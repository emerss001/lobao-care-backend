/*
  Warnings:

  - Added the required column `grade` to the `produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "produtos" ADD COLUMN     "grade" DECIMAL(10,2) NULL;
