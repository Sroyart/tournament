-- CreateTable
CREATE TABLE "Tournaments" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tournaments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Matches" (
    "id" SERIAL NOT NULL,
    "tournamentId" INTEGER NOT NULL,
    "team1Id" INTEGER NOT NULL,
    "team2Id" INTEGER NOT NULL,
    "winnerId" INTEGER NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Matches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teams" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tournamentId" INTEGER NOT NULL,
    "matches1Id" INTEGER NOT NULL,
    "matches2Id" INTEGER NOT NULL,

    CONSTRAINT "Teams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Players" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "teamId" INTEGER NOT NULL,

    CONSTRAINT "Players_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Teams_matches1Id_key" ON "Teams"("matches1Id");

-- CreateIndex
CREATE UNIQUE INDEX "Teams_matches2Id_key" ON "Teams"("matches2Id");

-- AddForeignKey
ALTER TABLE "Matches" ADD CONSTRAINT "Matches_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournaments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Matches" ADD CONSTRAINT "Matches_team1Id_fkey" FOREIGN KEY ("team1Id") REFERENCES "Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Matches" ADD CONSTRAINT "Matches_team2Id_fkey" FOREIGN KEY ("team2Id") REFERENCES "Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Matches" ADD CONSTRAINT "Matches_winnerId_fkey" FOREIGN KEY ("winnerId") REFERENCES "Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teams" ADD CONSTRAINT "Teams_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournaments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Players" ADD CONSTRAINT "Players_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
