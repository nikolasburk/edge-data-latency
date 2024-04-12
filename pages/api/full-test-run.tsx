import prismaResults from "../../prisma-results";
import type { NextApiRequest, NextApiResponse } from "next";

export const dynamic = "force-dynamic"; // static by default, unless reading the request

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(`url: `, req.url);

  const result = await prismaResults.fullTestRun.create({});
  console.log(`stored full test run: `, result);

  return res.status(200).json(result);
}
