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
      // benchmarkRuns: {
      //   select: {
      //     queryDuration: true,
      //     dataService: true,
      //     queryCount: true,
      //     runtime: true,
      //   },
      // },
    },
  });
  console.dir(fullTestRuns, { depth: null });

  // Pass data to the page via props
  return { props: { fullTestRuns } };
}; // satisfies GetServerSideProps<{ fullTestRuns: BenchmarkRunData[] }>

export default function Page({ fullTestRuns }) {
  const router = useRouter();

  return (
    <div>
      {fullTestRuns.map((fullTestRun) => {
        return (
          <div className="flex flex-row gap-1" key={fullTestRun.id}>
            <div>{fullTestRun.id}</div>
            <Button onClick={() => router.push(`/history/${fullTestRun.id}`)}>View</Button>
          </div>
        );
      })}
    </div>
  );
}
