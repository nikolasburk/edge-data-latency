import { NextRequest as Request, NextResponse as Response } from "next/server";
import { PrismaClient } from "../../../prisma-planetscale/prisma-client";
import { PrismaPlanetScale } from "@prisma/adapter-planetscale";
import { Client } from "@planetscale/database";

export const config = {
  runtime: "edge",
};

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
  console.log(`process.env.PLANETSCALE_DATABASE_URL: `, process.env.PLANETSCALE_DATABASE_URL);
  console.log(`init prisma`);
  const client = new Client({ url: process.env.PLANETSCALE_DATABASE_URL });
  const adapter = new PrismaPlanetScale(client);
  const prisma = new PrismaClient({ adapter });

  // 5. run queries `count` times
  let data = null;
  for (let i = 0; i < count; i++) {
    data = await prisma.employees.findMany({ take: 10 });
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
function toNumber(queryParam: string | string[] | null, min = 1, max = 5) {
  const num = Number(queryParam);
  return Number.isNaN(num) ? 1 : Math.min(Math.max(num, min), max);
}
