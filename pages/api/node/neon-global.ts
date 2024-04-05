import { neon } from "@neondatabase/serverless";
import type { NextApiRequest, NextApiResponse } from "next";

const start = Date.now();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  
  const { count } = req.query
  
  const sql = neon(process.env.NEON_DATABASE_URL);

  const time = Date.now();
  let data = null;
  for (let i = 0; i < toNumber(count); i++) {
    data = await sql`
      SELECT "emp_no", "first_name", "last_name" 
      FROM "employees" 
      LIMIT 10`;
  }

  return res.status(200).json(
    {
      data,
      queryDuration: Date.now() - time,
      invocationIsCold: start === time,
      // invocationRegion: (req.headers.get("x-vercel-id") ?? "").split(":")[1] || null,
    }
    // {
    //   headers: { "x-edge-is-cold": start === time ? "1" : "0" },
    // }
  );
}

// convert a query parameter to a number, applying a min and max, defaulting to 1
function toNumber(queryParam: string | string[] | null, min = 1, max = 5) {
  const num = Number(queryParam);
  return Number.isNaN(num) ? 1 : Math.min(Math.max(num, min), max);
}
