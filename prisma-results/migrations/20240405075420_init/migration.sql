-- CreateEnum
CREATE TYPE "DataService" AS ENUM ('Neon', 'PrismaNeon');

-- CreateEnum
CREATE TYPE "Runtime" AS ENUM ('Edge', 'Node');

-- CreateEnum
CREATE TYPE "QueryCount" AS ENUM ('One', 'Two', 'Five');

-- CreateEnum
CREATE TYPE "Location" AS ENUM ('Regional', 'Global');

-- CreateTable
CREATE TABLE "BenchmarkRun" (
    "id" SERIAL NOT NULL,
    "dataService" "DataService" NOT NULL,
    "runtime" "Runtime" NOT NULL,
    "route" TEXT NOT NULL,
    "location" "Location" NOT NULL,
    "queryCount" "QueryCount" NOT NULL,
    "queryDuration" INTEGER NOT NULL,

    CONSTRAINT "BenchmarkRun_pkey" PRIMARY KEY ("id")
);
