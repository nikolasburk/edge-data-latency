import prismaResults from "@/prisma-results";
import { Button } from "@tremor/react";
import { useRouter } from "next/router";

// import { FullTestRun, Prisma } from "@/prisma-results/prisma-client"
// import type { GetServerSideProps } from 'next'

// const benchmarkRunData = Prisma.validator<Prisma.FullTestRunDefaultArgs>()({
//   select: { id: true, benchmarkRuns: true },
// })
// type BenchmarkRunData = Prisma.BenchmarkRunGetPayload<typeof benchmarkRunData>

export const getServerSideProps = async () => {
  const fullTestRuns = await prismaResults.fullTestRun.findMany({
    select: {
      id: true,
    },
  });
  console.dir(fullTestRuns, { depth: null });
  return { props: { fullTestRuns } };
}; // satisfies GetServerSideProps<{ fullTestRuns: BenchmarkRunData[] }>

export default function Page({ fullTestRuns }) {
  const router = useRouter();

  return (
    <div className="flex flex-col m-14">
      {fullTestRuns.map((fullTestRun) => {
        return (
          <div className="flex flex-row justify-between items-center w-full p-2 border-b border-gray-300" key={fullTestRun.id}>
            <div className="flex-grow">Benchmark run: {fullTestRun.id}</div>
            <Button className="ml-2" onClick={() => router.push(`/history/${fullTestRun.id}`)}>View</Button>
          </div>
        );
      })}
    </div>
  );
}
