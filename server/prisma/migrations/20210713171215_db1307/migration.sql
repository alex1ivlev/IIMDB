/*
  Warnings:

  - You are about to drop the column `body` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - Made the column `userId` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `movieId` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rank` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Movie.userId_unique";

-- DropIndex
DROP INDEX "Review.userId_unique";

-- AlterTable
ALTER TABLE "Movie" ALTER COLUMN "title" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "body",
ADD COLUMN     "comment" TEXT,
ADD COLUMN     "movieId" INTEGER NOT NULL,
ADD COLUMN     "rank" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "title" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "username" TEXT;

-- CreateTable
CREATE TABLE "_MovieToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ActorToMovie" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MovieToTag_AB_unique" ON "_MovieToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_MovieToTag_B_index" ON "_MovieToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ActorToMovie_AB_unique" ON "_ActorToMovie"("A", "B");

-- CreateIndex
CREATE INDEX "_ActorToMovie_B_index" ON "_ActorToMovie"("B");

-- AddForeignKey
ALTER TABLE "_MovieToTag" ADD FOREIGN KEY ("A") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToTag" ADD FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActorToMovie" ADD FOREIGN KEY ("A") REFERENCES "Actor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActorToMovie" ADD FOREIGN KEY ("B") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;
