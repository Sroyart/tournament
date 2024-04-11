/*
  Warnings:

  - You are about to drop the column `team1Id` on the `Matches` table. All the data in the column will be lost.
  - You are about to drop the column `team2Id` on the `Matches` table. All the data in the column will be lost.
  - You are about to drop the column `winnerId` on the `Matches` table. All the data in the column will be lost.
  - You are about to drop the `Players` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Teams` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `team1` to the `Matches` table without a default value. This is not possible if the table is not empty.
  - Added the required column `team2` to the `Matches` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Matches" DROP CONSTRAINT "Matches_team1Id_fkey";

-- DropForeignKey
ALTER TABLE "Matches" DROP CONSTRAINT "Matches_team2Id_fkey";

-- DropForeignKey
ALTER TABLE "Matches" DROP CONSTRAINT "Matches_winnerId_fkey";

-- DropForeignKey
ALTER TABLE "Players" DROP CONSTRAINT "Players_teamId_fkey";

-- DropForeignKey
ALTER TABLE "Teams" DROP CONSTRAINT "Teams_tournamentId_fkey";

-- AlterTable
ALTER TABLE "Matches" DROP COLUMN "team1Id",
DROP COLUMN "team2Id",
DROP COLUMN "winnerId",
ADD COLUMN     "team1" TEXT NOT NULL,
ADD COLUMN     "team2" TEXT NOT NULL;

-- DropTable
DROP TABLE "Players";

-- DropTable
DROP TABLE "Teams";
