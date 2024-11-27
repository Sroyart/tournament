/*
  Warnings:

  - The primary key for the `Tournaments` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Matches" DROP CONSTRAINT "Matches_tournamentId_fkey";

-- AlterTable
ALTER TABLE "Matches" ALTER COLUMN "tournamentId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Tournaments" DROP CONSTRAINT "Tournaments_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Tournaments_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Tournaments_id_seq";

-- AddForeignKey
ALTER TABLE "Matches" ADD CONSTRAINT "Matches_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournaments"("id") ON DELETE CASCADE ON UPDATE CASCADE;
