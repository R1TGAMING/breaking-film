import * as z from "zod";

export const SigninFormSchema = z.object({
  username: z
    .string()
    .min(2, { error: "Name must be at least 2 characters long." })
    .trim(),
  password: z
    .string()
    .min(6, { error: "Be at least 6 characters long" })
    .trim(),
});

export type FormState =
  | {
      errors?: {
        name?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export type SessionPayload = {
  id: number;
  username: string;
  expiresAt: Date;
};
