/*
  Warnings:

  - Made the column `grade` on table `produtos` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "produtos" ALTER COLUMN "grade" DROP NOT NULL;
