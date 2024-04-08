import { Kysely } from "kysely";
import { PlanetScaleDialect } from "kysely-planetscale";
import { NextRequest as Request, NextResponse as Response } from "next/server";

export const config = {
  runtime: "edge",
};

interface EmployeeTable {
  emp_no: number;
  first_name: string;
  last_name: string;
}

interface Database {
  employees: EmployeeTable;
}

// 1. initialize `start` time with Date.now()
const start = Date.now();

export default async function api(req: Request) {
  // 2. retrieve `count` from URL
  const url = process.env.NODE_ENV !== "production" ? new URL(req.url, "http://localhost:3000") : new URL(req.url);
  const count = toNumber(new URL(url).searchParams.get("count"));

  // 3. initialize `time` time with Date.now()
  const time = Date.now();

  // 4. initialize DB client
  const db = new Kysely<Database>({
    dialect: new PlanetScaleDialect({
      url: process.env.PLANETSCALE_DATABASE_URL,
    }),
  });

  // 5. run queries `count` times
  let data = null;
  for (let i = 0; i < count; i++) {
    data = await db.selectFrom("employees").select(["emp_no", "first_name", "last_name"]).limit(10).execute();
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
      headers: {
        "x-edge-is-cold": start === time ? "1" : "0",
      },
    }
  );
}

// convert a query parameter to a number
// also apply a min and a max
function toNumber(queryParam: string | null, min = 1, max = 5) {
  const num = Number(queryParam);
  return Number.isNaN(num) ? null : Math.min(Math.max(num, min), max);
}
