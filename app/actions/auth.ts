"use server";
import { SigninFormSchema } from "../lib/auth-definitions";
import { flattenError } from "zod/v4/core";
import { FormState } from "../lib/auth-definitions";
import bcrypt from "bcrypt";
import { prisma } from "../lib/prisma";
import { createSession } from "../lib/sessions";
import { redirect } from "next/navigation";

export async function signin(state: FormState, formData: FormData) {
  const validatedFields = SigninFormSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: flattenError(validatedFields.error).fieldErrors,
    };
  }

  const { username, password } = validatedFields.data;

  const user = await prisma.user.findFirst({
    where: {
      username: username,
    },
  });

  if (!user) {
    return {
      success: false,
      message: "error creating account or maybe account is not found.",
    };
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (isPasswordValid) {
    await createSession(user.id, user.username);

    redirect("/home");
  }
}
