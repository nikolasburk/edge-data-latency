import { NextRequest as Request, NextResponse as Response } from "next/server";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const config = {
  runtime: "edge",
};

export const employees = pgTable("employees", {
  id: serial("emp_no").primaryKey(),
  first_name: varchar("first_name", { length: 256 }),
  last_name: varchar("last_name", { length: 256 }),
});

// 1. initialize `start` time with Date.now()
const start = Date.now();

export default async function api(req: Request) {
  console.log(`url: `, req.url);

  // 2. retrieve `count` from URL
  const url = process.env.NODE_ENV !== "production" ? new URL(req.url, "http://localhost:3000") : new URL(req.url);
  const count = toNumber(url.searchParams.get("count"));

  // 3. initialize `time` time with Date.now()
  const time = Date.now();

  // 4. initialize DB client
  console.log(`process.env.NEON_DATABASE_URL: `, process.env.NEON_DATABASE_URL);
  console.log(`init drizzle`);
  const sql = neon(process.env.NEON_DATABASE_URL!);
  const db = drizzle(sql);

  // 5. run queries `count` times
  let data = null;
  for (let i = 0; i < count; i++) {
    data = await db.select().from(employees).limit(10);
  }

  // 6. return response
  return Response.json(
    {
      data,
      queryDuration: Date.now() - time,
      invocationIsCold: start === time,
      // invocationRegion: (req.headers.get("x-vercel-id") ?? "").split(":")[1] || null,
    },
    {
      headers: { "x-edge-is-cold": start === time ? "1" : "0" },
    }
  );
}

// convert a query parameter to a number, applying a min and max, defaulting to 1
function toNumber(queryParam: string | null, min = 1, max = 5) {
  const num = Number(queryParam);
  return Number.isNaN(num) ? 1 : Math.min(Math.max(num, min), max);
}
