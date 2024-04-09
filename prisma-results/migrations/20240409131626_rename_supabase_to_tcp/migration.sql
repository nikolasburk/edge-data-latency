/*
  Warnings:

  - The values [PrismaSupabase] on the enum `DataService` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "DataService_new" AS ENUM ('Neon', 'PrismaNeon', 'PrismaNeonTCP', 'Supabase', 'PrismaSupabaseTCP', 'PlanetScale', 'PrismaPlanetScale', 'PrismaPlanetScaleTCP');
ALTER TABLE "BenchmarkRun" ALTER COLUMN "dataService" TYPE "DataService_new" USING ("dataService"::text::"DataService_new");
ALTER TYPE "DataService" RENAME TO "DataService_old";
ALTER TYPE "DataService_new" RENAME TO "DataService";
DROP TYPE "DataService_old";
COMMIT;
