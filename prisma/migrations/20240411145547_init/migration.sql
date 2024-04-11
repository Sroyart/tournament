-- DropForeignKey
ALTER TABLE "Matches" DROP CONSTRAINT "Matches_tournamentId_fkey";

-- AlterTable
ALTER TABLE "Tournaments" ADD COLUMN     "winner" TEXT NOT NULL DEFAULT 'TBD';

-- AddForeignKey
ALTER TABLE "Matches" ADD CONSTRAINT "Matches_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournaments"("id") ON DELETE CASCADE ON UPDATE CASCADE;
