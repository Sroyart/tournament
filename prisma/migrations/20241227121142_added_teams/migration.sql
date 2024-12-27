-- CreateTable
CREATE TABLE "Teams" (
    "id" SERIAL NOT NULL,
    "ownerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Teams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_TeamsToTournaments" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_TeamsToTournaments_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_TeamsToTournaments_B_index" ON "_TeamsToTournaments"("B");

-- AddForeignKey
ALTER TABLE "Teams" ADD CONSTRAINT "Teams_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TeamsToTournaments" ADD CONSTRAINT "_TeamsToTournaments_A_fkey" FOREIGN KEY ("A") REFERENCES "Teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TeamsToTournaments" ADD CONSTRAINT "_TeamsToTournaments_B_fkey" FOREIGN KEY ("B") REFERENCES "Tournaments"("id") ON DELETE CASCADE ON UPDATE CASCADE;
