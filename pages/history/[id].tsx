import prismaResults from "@/prisma-results";
import { Prisma } from "@/prisma-results/prisma-client";
import { GetServerSideProps } from "next";
import { AreaChart } from "@tremor/react";

// 2: Define a type that only contains a subset of the scalar fields
const benchmarkData = Prisma.validator<Prisma.BenchmarkRunDefaultArgs>()({
  select: {
    queryDuration: true,
    dataService: true,
    queryCount: true,
    runtime: true,
  },
});

type BenchmarkData = Prisma.BenchmarkRunGetPayload<typeof benchmarkData>;

type BenchmarkChartDataPerDataService = {
  [dataService: string]: number[];
};

type BenchmarkChartData = {
  [key: string]: BenchmarkChartDataPerDataService;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id;
  const fullTestRun = await prismaResults.fullTestRun.findUnique({
    where: { id: Number(id) },
    select: {
      id: true,
      benchmarkRuns: {
        select: {
          queryDuration: true,
          dataService: true,
          queryCount: true,
          runtime: true,
        },
      },
    },
  });
  console.log(fullTestRun.benchmarkRuns);
  return { props: { fullTestRun } };
};

export default function Page({ fullTestRun }) {
  console.log(`render`, fullTestRun);

  const benchmarkChartData: BenchmarkChartData = fullTestRun.benchmarkRuns.reduce(
    (acc: BenchmarkChartData, obj: BenchmarkData) => {
      const key = `${obj.runtime}-${obj.queryCount}`;
      if (!acc[key]) {
        acc[key] = {};
      }
      if (!acc[key][obj.dataService]) {
        acc[key][obj.dataService] = [];
      }
      acc[key][obj.dataService].push(obj.queryDuration);
      return acc;
    },
    {}
  );
  console.log(benchmarkChartData);

  return (
    <div className="m-14" key={fullTestRun.id}>
      {Object.keys(benchmarkChartData).map((key) => {
        console.log(`key: `, key);
        const finalChartData = transformToFinalChartData(benchmarkChartData[key]);
        console.log(`finalChartData: `, finalChartData);
        const categories = Object.keys(finalChartData[0]).filter((key) => key !== "index");
        console.log(`categories: `, categories);
        return (
          <div key={key}>
            <h1 className="text-3xl font-bold text-gray-900">{key}</h1>
            <AreaChart
              className="mt-6"
              data={finalChartData}
              index="index"
              categories={categories}
              colors={key.includes("Edge") ? colorsEdge : colorsNode}
              valueFormatter={dataFormatter}
              yAxisWidth={48}
            />
          </div>
        );
      })}
    </div>
  );
}

// PrismaNeon, DrizzleNeon, Neon, PrismaPlanetScale, DrizzlePlanetScale, PlanetScale, Supabase
const colorsEdge = ["green", "purple", "yellow", "emerald", "fuchsia", "amber", "orange"]

// // PrismaNeon, PrismaNeonTCP, DrizzleNeon, DrizzleNeonTCP, Neon, PrismaPlanetScale, PrismaPlanetScaleTCP, DrizzlePlanetScale, DrizzlePlanetScaleTCP, PlanetScale, PrismaSupabaseTCP, DrizzleSupabaseTCP, Supabase
const colorsNode = ["green", "lime", "purple", "violet", "yellow", "emerald", "teal", "fuchsia", "pink", "amber", "cyan", "rose", "orange"]

function transformToFinalChartData(inputData) {
  const transformedArray = [];

  // Iterate over the arrays to determine the length
  const arrayLength = (Object.values(inputData)[0] as Array<any>).length;

  // Iterate over each index
  for (let i = 0; i < arrayLength; i++) {
    const newItem = { index: i + 1 }; // Adding 1 to make the index start from 1 instead of 0

    // Iterate over each property (key) in the input object
    for (const service in inputData) {
      if (inputData.hasOwnProperty(service)) {
        newItem[service] = inputData[service][i];
      }
    }

    transformedArray.push(newItem);
  }
  return transformedArray;
}

const dataFormatter = (number: number) => `${Intl.NumberFormat("us").format(number).toString()}ms`;
