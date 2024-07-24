-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('HIGH', 'MEDIUM', 'LOW');

-- CreateTable
CREATE TABLE "Issue" (
    "id" SERIAL NOT NULL,
    "testcasename" TEXT NOT NULL,
    "testdescription" TEXT NOT NULL,
    "estimatedtime" INTEGER NOT NULL,
    "module" TEXT NOT NULL,
    "priority" "Priority" NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Issue_pkey" PRIMARY KEY ("id")
);
