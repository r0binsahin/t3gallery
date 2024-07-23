import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import * as schema from "./schema";

// Use this object to send drizzle queries to your DB
export const db = drizzle(sql, { schema });

console.log("POSTGRES_URL:", process.env.POSTGRES_URL);
