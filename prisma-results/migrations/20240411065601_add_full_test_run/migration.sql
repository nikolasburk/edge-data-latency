-- AlterTable
ALTER TABLE "BenchmarkRun" ADD COLUMN     "fullTestRunId" INTEGER;

-- CreateTable
CREATE TABLE "FullTestRun" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FullTestRun_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BenchmarkRun" ADD CONSTRAINT "BenchmarkRun_fullTestRunId_fkey" FOREIGN KEY ("fullTestRunId") REFERENCES "FullTestRun"("id") ON DELETE SET NULL ON UPDATE CASCADE;
