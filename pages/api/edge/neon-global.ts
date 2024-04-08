import { neon } from "@neondatabase/serverless";
import { NextRequest as Request, NextResponse as Response } from "next/server";

export const config = {
  runtime: "edge",
};

// 1. initialize `start` time with Date.now()
const start = Date.now();

export default async function api(req: Request) {
  // 2. retrieve `count` from URL
  const url = process.env.NODE_ENV !== "production" ? new URL(req.url, "http://localhost:3000") : new URL(req.url);
  const count = toNumber(url.searchParams.get("count"));

  // 3. initialize `time` time with Date.now()
  const time = Date.now();

  // 4. initialize DB client
  const sql = neon(process.env.NEON_DATABASE_URL);

  // 5. run queries `count` times
  let data = null;
  for (let i = 0; i < count; i++) {
    data = await sql`
      SELECT "emp_no", "first_name", "last_name" 
      FROM "employees" 
      LIMIT 10`;
  }

  // 6. return response
  return Response.json(
    {
      data,
      queryDuration: Date.now() - time,
      invocationIsCold: start === time,
      invocationRegion: (req.headers.get("x-vercel-id") ?? "").split(":")[1] || null,
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
