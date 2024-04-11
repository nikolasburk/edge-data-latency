import prismaResults from "@/prisma-results"
import { FullTestRun } from "@/prisma-results/prisma-client"
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

export const getServerSideProps = (async () => {

  const fullTestRuns = await prismaResults.fullTestRun.findMany()

  // Pass data to the page via props
  return { props: { fullTestRuns } }
}) satisfies GetServerSideProps<{ fullTestRuns: FullTestRun[] }>

export default function Page() {
  return <div>Hello World</div>
}