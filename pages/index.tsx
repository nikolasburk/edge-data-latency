import { Button, Card, Title, AreaChart, Grid, Text } from "@tremor/react";
import { useCallback, useState } from "react";
import { Select, SelectItem } from "@tremor/react";
import { CircleStackIcon, BoltIcon } from "@heroicons/react/16/solid";
import Head from "next/head";
import GithubCorner from "@/components/github-corner";
import { Location, Runtime, DataService, QueryCount } from "../prisma-results/prisma-results";


const ATTEMPTS = 3;

type Region = "regional" | "global";
// type Runtime = "edge" | "node";

type ResultData = {
  queryDuration: number
}

export default function Page() {
  const [isTestRunning, setIsTestRunning] = useState(false);
  const [shouldTestGlobal, setShouldTestGlobal] = useState(true);
  const [shouldTestRegional, setShouldTestRegional] = useState(true);
  const [runtime, setRuntime] = useState("edge" as Runtime)
  const [queryCount, setQueryCount] = useState(1);
  const [dataService, setDataService] = useState("prisma-neon");
  const [data, setData] = useState({
    regional: [],
    global: [],
  });

  const runTest = useCallback(async (runtime: Runtime, dataService: string, type: Region, queryCount: number) => {
    console.log(`runTest:`, runtime, dataService, type, queryCount);
    const path = `/api/${runtime}/${dataService}-${type}?count=${queryCount}`
    console.log(`path:`, path);
    try {
      const start = Date.now();
      const res = await fetch(path);
      const data = await res.json();
      const end = Date.now();
      console.log(`received data: `, data)
      return {
        ...data,
        elapsed: end - start,
      };
    } catch (e) {
      // instead of retrying we just give up
      return null;
    }
  }, []);

  const onRunTest = useCallback(async () => {
    console.log(`Run Test button clicked`);
    console.log(`runtime: `, runtime);
    console.log(`queries: `, queryCount);

    setIsTestRunning(true);
    setData({ regional: [], global: [] });

    for (let i = 0; i < ATTEMPTS; i++) {
      console.log(`ATTEMPT: `, i)
      let regionalValue = null;
      let globalValue = null;

      if (shouldTestRegional) {
        regionalValue = await runTest(runtime, dataService, "regional", queryCount);
      }

      if (shouldTestGlobal) {
        globalValue = await runTest(runtime, dataService, "global", queryCount);
      }

      setData((data) => {
        return {
          ...data,
          regional: [...data.regional, regionalValue],
          global: [...data.global, globalValue],
        };
      });
    }

    setIsTestRunning(false);
  }, [runTest, runtime, queryCount, dataService, shouldTestGlobal, shouldTestRegional]);

  return (
    <main className="p-6 max-w-5xl flex flex-col gap-3">
      <Head>
        <title>Vercel Edge Functions + Database Latency</title>
        <meta
          name="description"
          content="Observe the latency querying different data services from varying
          compute locations."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image:url" content="/edge-data.png" />
        <meta name="twitter:image" content="/edge-data.png" />
      </Head>
      <GithubCorner url="https://github.com/vercel-labs/edge-data-latency" />

      <h1 className="text-2xl font-bold">Vercel Edge Functions + Database Latency</h1>
      <p>
        Observe the latency querying different data services from varying compute locations. We built this playground to
        demonstrate different data access patterns and how they can impact latency through sequential data requests
        (i.e. waterfalls).
      </p>
      <p>
        Learn more about{" "}
        <a
          href="https://vercel.com/docs/functions/configuring-functions/runtime#edge"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Vercel Edge Functions
        </a>
        {" or "}
        <a
          href="https://vercel.com/templates/edge-functions"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          deploy a template
        </a>
        .
      </p>
      <form className="flex flex-col gap-5 bg-gray-100 dark:bg-gray-800 p-5 my-5 rounded">
        {/* Data service */}
        <div className="flex flex-col gap-1">
          <p className="font-bold">Data service</p>
          <div className="py-1 inline-flex">
            <Select
              data-testid="database-dropdown"
              className="max-w-xs"
              placeholder="Select Database"
              onValueChange={(v) => setDataService(v)}
              value="prisma-neon"
            >
              <SelectItem data-testid="prisma-neon" value="prisma-neon" icon={null}>
                Prisma ORM (w/ Neon Serverless)
              </SelectItem>
              <SelectItem data-testid="neon" value="neon" icon={NeonIcon}>
                Neon (@neondatabase/serverless driver)
              </SelectItem>
              <SelectItem data-testid="planetscale" value="planetscale" icon={CircleStackIcon}>
                PlanetScale (Kysely + Serverless SDK)
              </SelectItem>
              <SelectItem data-testid="supabase" value="supabase" icon={BoltIcon}>
                Supabase (supabase-js)
              </SelectItem>
            </Select>
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-col gap-1">
          <p className="font-bold">Location</p>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Vercel Edge Functions support multiple regions. By default they&apos;re global, but it&apos;s possible to
            express a region preference via the <Code className="text-xs">region</Code> setting.
          </p>
          <p className="text-sm flex gap-3 flex-wrap gap-y-1">
            <label className="flex items-center gap-2 whitespace-nowrap">
              <input
                type="checkbox"
                name="region"
                value="global"
                checked={shouldTestGlobal}
                onChange={(e) => setShouldTestGlobal(e.target.checked)}
              />{" "}
              Test global function
            </label>
            <label className="flex items-center gap-2 whitespace-nowrap">
              <input
                type="checkbox"
                name="region"
                value="regional"
                checked={shouldTestRegional}
                onChange={(e) => setShouldTestRegional(e.target.checked)}
              />{" "}
              Test regional (US East) function
            </label>
          </p>
        </div>

        {/* Edge vs Serverless */}
        <div className="flex flex-col gap-1">
          <p className="font-bold">Edge vs Serverless</p>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Vercel Functions can be executed in different runtimes which can be configured via the <Code className="text-xs">runtime</Code> setting.
          </p>
          <p className="text-sm flex gap-3 flex-wrap gap-y-1">
            <label className="flex items-center gap-2 whitespace-nowrap">
              <input
                type="radio"
                name="edge"
                value="edge"
                onChange={() => setRuntime("edge")}
                checked={runtime === "edge"}
              />{" "}
              edge
            </label>
            <label className="flex items-center gap-2 whitespace-nowrap">
              <input
                type="radio"
                name="node"
                value="node"
                onChange={() => setRuntime("node")}
                checked={runtime === "node"}
              />{" "}
              node
            </label>
          </p>
        </div>

        {/* Waterfall */}
        <div className="flex flex-col gap-1">
          <p className="font-bold">Waterfall</p>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Executing complex API routes globally can be slow when the database is single-region, due to having multiple
            roundtrips to a single server that&apos;s distant from the user.
          </p>
          <p className="text-sm flex gap-3 flex-wrap gap-y-1">
            <label className="flex items-center gap-2 whitespace-nowrap">
              <input
                type="radio"
                name="queries"
                value="1"
                onChange={() => setQueryCount(1)}
                checked={queryCount === 1}
              />{" "}
              Single query (no waterfall)
            </label>
            <label className="flex items-center gap-2 whitespace-nowrap">
              <input
                type="radio"
                name="queries"
                value="2"
                onChange={() => setQueryCount(2)}
                checked={queryCount === 2}
              />{" "}
              2 serial queries
            </label>
            <label className="flex items-center gap-2 whitespace-nowrap">
              <input
                type="radio"
                name="queries"
                value="5"
                onChange={() => setQueryCount(5)}
                checked={queryCount === 5}
              />{" "}
              5 serial queries
            </label>
          </p>
        </div>

        <div>
          <Button
            type="button"
            data-testid="run-test"
            onClick={onRunTest}
            loading={isTestRunning}
            disabled={dataService === ""}
          >
            Run Test
          </Button>
        </div>

        {data.regional.length || data.global.length ? (
          <Grid className="gap-5" numItems={1} numItemsMd={2}>
            <Card>
              <Title>Latency distribution (processing time)</Title>
              <Text>
                This is how long it takes for the edge function to run the queries and return the result. Your internet
                connections <b>will not</b> influence these results.
              </Text>

              <AreaChart
                className="mt-6"
                data={new Array(ATTEMPTS).fill(0).map((_, i) => {
                  return {
                    attempt: `#${i + 1}`,
                    Regional: data.regional[i] ? data.regional[i].queryDuration : null,
                    Global: data.global[i] ? data.global[i].queryDuration : null,
                  };
                })}
                index="attempt"
                categories={["Global", "Regional"]}
                colors={["indigo", "cyan"]}
                valueFormatter={dataFormatter}
                yAxisWidth={48}
              />
            </Card>
            <Card>
              <Title>Latency distribution (end-to-end)</Title>
              <Text>
                This is the total latency from the client&apos;s perspective. It considers the total roundtrip between
                browser and edge. Your internet connection and location <b>will</b> influence these results.
              </Text>

              <AreaChart
                className="mt-6"
                data={new Array(ATTEMPTS).fill(0).map((_, i) => {
                  return {
                    attempt: `#${i + 1}`,
                    Regional: data.regional[i] ? data.regional[i].elapsed : null,
                    Global: data.global[i] ? data.global[i].elapsed : null,
                  };
                })}
                index="attempt"
                categories={["Global", "Regional"]}
                colors={["indigo", "cyan"]}
                valueFormatter={dataFormatter}
                yAxisWidth={48}
              />
            </Card>
          </Grid>
        ) : null}
      </form>
    </main>
  );
}

const dataFormatter = (number: number) => `${Intl.NumberFormat("us").format(number).toString()}ms`;

async function writeResults(resultData: ResultData, dataService: DataService, runtime: Runtime, location: Location, queryCount: QueryCount, route: string) {
  const body = {
    queryDuration: resultData.queryDuration,
    dataService,
    runtime,
    location,
    queryCount, 
    route
  }
  console.log(`write data: `, body)


  try {
    const response = await fetch('/api/write-results', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    console.log('Response from server:', responseData);
    // Handle the response from the server as needed
  } catch (error) {
    console.error('Error:', error);
    // Handle errors
  }

}

function Code({ className = "", children }) {
  return <code className={`bg-gray-200 dark:bg-gray-700 text-sm p-1 rounded ${className}`}>{children}</code>;
}

function NeonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="flex-none h-5 w-5 mr-3"
      width="20"
      height="20"
      viewBox="0 0 36 36"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6.207A6.207 6.207 0 0 1 6.207 0h23.586A6.207 6.207 0 0 1 36 6.207v20.06c0 3.546-4.488 5.085-6.664 2.286l-6.805-8.754v10.615A5.586 5.586 0 0 1 16.945 36H6.207A6.207 6.207 0 0 1 0 29.793V6.207Zm6.207-1.241c-.686 0-1.241.555-1.241 1.24v23.587c0 .686.555 1.242 1.24 1.242h10.925c.343 0 .434-.278.434-.621V16.18c0-3.547 4.488-5.086 6.665-2.286l6.805 8.753V6.207c0-.686.064-1.241-.621-1.241H6.207Z"
        fill="rgb(186 193 205)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6.207A6.207 6.207 0 0 1 6.207 0h23.586A6.207 6.207 0 0 1 36 6.207v20.06c0 3.546-4.488 5.085-6.664 2.286l-6.805-8.754v10.615A5.586 5.586 0 0 1 16.945 36H6.207A6.207 6.207 0 0 1 0 29.793V6.207Zm6.207-1.241c-.686 0-1.241.555-1.241 1.24v23.587c0 .686.555 1.242 1.24 1.242h10.925c.343 0 .434-.278.434-.621V16.18c0-3.547 4.488-5.086 6.665-2.286l6.805 8.753V6.207c0-.686.064-1.241-.621-1.241H6.207Z"
        fill="rgb(186 193 205)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6.207A6.207 6.207 0 0 1 6.207 0h23.586A6.207 6.207 0 0 1 36 6.207v20.06c0 3.546-4.488 5.085-6.664 2.286l-6.805-8.754v10.615A5.586 5.586 0 0 1 16.945 36H6.207A6.207 6.207 0 0 1 0 29.793V6.207Zm6.207-1.241c-.686 0-1.241.555-1.241 1.24v23.587c0 .686.555 1.242 1.24 1.242h10.925c.343 0 .434-.278.434-.621V16.18c0-3.547 4.488-5.086 6.665-2.286l6.805 8.753V6.207c0-.686.064-1.241-.621-1.241H6.207Z"
        fill="rgb(186 193 205)"
      />
      <path
        d="M29.793 0A6.207 6.207 0 0 1 36 6.207v20.06c0 3.546-4.488 5.085-6.664 2.286l-6.805-8.754v10.615A5.586 5.586 0 0 1 16.945 36a.62.62 0 0 0 .62-.62v-19.2c0-3.547 4.488-5.086 6.665-2.286l6.805 8.753V1.241C31.035.556 30.479 0 29.793 0Z"
        fill="rgb(156 163 175)"
      />
    </svg>
  );
}
