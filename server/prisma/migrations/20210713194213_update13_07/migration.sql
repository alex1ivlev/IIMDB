/*
  Warnings:

  - You are about to drop the column `userId` on the `Movie` table. All the data in the column will be lost.
  - Added the required column `creatorId` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_userId_fkey";

-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "userId",
ADD COLUMN     "creatorId" INTEGER NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL,
ALTER COLUMN "rating" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Movie" ADD FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
