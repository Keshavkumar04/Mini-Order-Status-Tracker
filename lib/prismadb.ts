import { PrismaClient } from "@prisma/client";

const prismadb = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prismadb;
}

export default prismadb;
