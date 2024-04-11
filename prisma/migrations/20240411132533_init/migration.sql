-- DropForeignKey
ALTER TABLE "Teams" DROP CONSTRAINT "Teams_tournamentId_fkey";

-- AlterTable
ALTER TABLE "Teams" ALTER COLUMN "tournamentId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Teams" ADD CONSTRAINT "Teams_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournaments"("id") ON DELETE SET NULL ON UPDATE CASCADE;
