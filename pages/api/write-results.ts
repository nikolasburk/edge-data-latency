import prismaResults from "../../prisma-results";
import { Location, Runtime, DataService, QueryCount } from "../../prisma-results/prisma-client";
import type { NextApiRequest, NextApiResponse } from "next";

export const dynamic = "force-dynamic"; // static by default, unless reading the request

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(`url: `, req.url);
  const { dataService, runtime, location, queryCount, queryDuration, route, fullTestRunId } = req.body;

  const result = await prismaResults.benchmarkRun.create({
    data: {
      dataService: dataService as DataService,
      runtime: runtime as Runtime,
      location: location as Location,
      queryCount: queryCount as QueryCount,
      queryDuration: Number(queryDuration),
      route: route as string,
      fullTestRunId
    },
  });
  console.log(`stored benchmark run: `, result)

  return res.status(200).json(result);
}
