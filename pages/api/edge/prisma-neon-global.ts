import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'
import { Pool } from '@neondatabase/serverless'
import { NextRequest as Request, NextResponse as Response } from "next/server";

export const config = {
  runtime: "edge",
};

const start = Date.now();

export default async function api(req: Request, ctx: any) {

  console.log(`url: `, req.url)

  const neon = new Pool({ connectionString: process.env.NEON_DATABASE_URL })
  const adapter = new PrismaNeon(neon)
  const prisma = new PrismaClient({ adapter })

  const url = process.env.NODE_ENV !== 'production' ? new URL(req.url, 'http://localhost:3000') : new URL(req.url)
  const count = toNumber(url.searchParams.get("count"));
  const time = Date.now();

  let data = null;
  for (let i = 0; i < count; i++) {
    data = await prisma.employees.findMany({ take: 10 });
  }

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
