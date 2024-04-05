import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const start = Date.now();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(`process.env.SUPABASE_DATABASE_URL: `, process.env.SUPABASE_DATABASE_URL);
  console.log(`init prisma`);

  const prisma = new PrismaClient({
    datasourceUrl: process.env.SUPABASE_DATABASE_URL,
  });

  console.log(`url: `, req.url);

  const { count } = req.query;

  console.log(`query count: `, count);

  // await prisma.$connect();

  const time = Date.now();

  let data = null;
  for (let i = 0; i < toNumber(count); i++) {
    data = await prisma.employees.findMany({ take: 10 });
  }

  const queryDuration = Date.now() - time;

  // await prisma.$disconnect();

  return res.status(200).json({
    data,
    queryDuration,
    invocationIsCold: start === time,
  });
}

// convert a query parameter to a number, applying a min and max, defaulting to 1
function toNumber(queryParam: string | string[] | null, min = 1, max = 5) {
  const num = Number(queryParam);
  return Number.isNaN(num) ? 1 : Math.min(Math.max(num, min), max);
}
