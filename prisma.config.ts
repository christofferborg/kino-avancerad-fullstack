import "dotenv/config"; // DETTA KRÄVS I PRISMA 7 FÖR ATT LÄSA .ENV LOKALT
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"), // Hämtar din Postgres-sträng
  },
});
