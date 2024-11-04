import prisma from "@/lib/db"

type Tournament = {
  name: string
  date: Date
  type: string
}

export const newTournament = async (tournament: Tournament) => {
  try {
    return await prisma.tournaments.create({
      data: tournament,
    })
  } catch {
    throw new Error(`Failed to fetch user.`)
  }
}
