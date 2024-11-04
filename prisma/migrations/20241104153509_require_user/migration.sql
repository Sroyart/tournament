/*
  Warnings:

  - Made the column `userId` on table `Tournaments` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Tournaments" DROP CONSTRAINT "Tournaments_userId_fkey";

-- AlterTable
ALTER TABLE "Tournaments" ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Tournaments" ADD CONSTRAINT "Tournaments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
