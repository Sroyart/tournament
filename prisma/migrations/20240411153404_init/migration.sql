/*
  Warnings:

  - You are about to drop the column `winner` on the `Tournaments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Matches" ADD COLUMN     "winner" TEXT NOT NULL DEFAULT 'TBD';

-- AlterTable
ALTER TABLE "Tournaments" DROP COLUMN "winner";
