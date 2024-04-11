import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const allTournaments = async () => {
  const tournaments = await prisma.tournaments.findMany({
    include: {
      matches: true,
    },
  });
  return tournaments;
};

export const newTournament = async (tournamentDto: any) => {
  const tournament = await prisma.tournaments.create({
    data: {
      ...tournamentDto,
      Date: new Date(tournamentDto.Date),
    },
  });

  return tournament;
};

export const removeTournament = async (id: number) => {
  const tournament = await prisma.tournaments.delete({
    where: {
      id,
    },
  });

  return tournament;
};

export const newMatch = async (matchDto: any) => {
  const match = await prisma.matches.create({
    data: matchDto,
  });

  return match;
};

export const removeMatch = async (id: number) => {
  const match = await prisma.matches.delete({
    where: {
      id,
    },
  });

  return match;
};

export const changeWinner = async (winnerDto: any) => {
  const winner = await prisma.matches.update({
    data: winnerDto,
    where: {
      id: winnerDto.id,
    },
  });

  return winner;
};
