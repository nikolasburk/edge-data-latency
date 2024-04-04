// import { PrismaClient } from '@prisma/client'
import prisma from "../../../prisma/prisma"
import type { NextApiRequest, NextApiResponse } from 'next'

const start = Date.now();

export default async function api(req: NextApiRequest, res: NextApiResponse) {

  console.log(`url: `, req.url)

  const url = process.env.NODE_ENV !== 'production' ? new URL(req.url, 'http://localhost:3000') : new URL(req.url)

  const count = toNumber(url.searchParams.get("count"));

  console.log(`query count: `, count)

  const time = Date.now();

  let data = null;
  for (let i = 0; i < count; i++) {
    data = await prisma.employees.findMany({ take: 10 });
  }

  return res.json(
    {
      data,
      queryDuration: Date.now() - time,
      invocationIsCold: start === time,
      // invocationRegion: (req.headers.get("x-vercel-id") ?? "").split(":")[1] || null,
    },
    // {
    //   headers: { "x-edge-is-cold": start === time ? "1" : "0" },
    // }
  );
}

// convert a query parameter to a number, applying a min and max, defaulting to 1
function toNumber(queryParam: string | null, min = 1, max = 5) {
  const num = Number(queryParam);
  return Number.isNaN(num) ? 1 : Math.min(Math.max(num, min), max);
}
