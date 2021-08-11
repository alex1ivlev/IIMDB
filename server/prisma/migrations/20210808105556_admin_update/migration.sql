/*
  Warnings:

  - Made the column `admin` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
UPDATE "User" SET admin=false WHERE TRUE;
ALTER TABLE "User" ALTER COLUMN "admin" SET NOT NULL,
ALTER COLUMN "admin" SET DEFAULT false;
