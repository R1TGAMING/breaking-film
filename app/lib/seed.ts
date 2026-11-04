import { prisma } from "@/app/lib/prisma";
import bcrypt from "bcrypt";

async function seed() {
  const passwordHash = await bcrypt.hash(process.env.PASSWORD_DASHBOARD!, 10);

  const user = await prisma.user.upsert({
    where: { id: 1 },
    create: {
      username: process.env.USERNAME_DASHBOARD!,
      password: passwordHash,
    },
    update: { password: passwordHash },
  });

  console.log("User created: " + user.username);
}

seed()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
