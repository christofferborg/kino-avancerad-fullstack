import { PrismaClient } from "./prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

// Skapa adaptern utanför så den bara initieras en gång per process
const adapter = new PrismaMariaDb({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "comment_db",
});

// Skapa en global typdeklaration så TypeScript inte klagar
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Återanvänd instansen om den redan finns, annars skapa en ny med adaptern
export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
