-- AlterTable
ALTER TABLE "Tournaments" ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "Tournaments" ADD CONSTRAINT "Tournaments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
