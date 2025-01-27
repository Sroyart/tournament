import { auth } from "@/auth"
import { Prisma, type Teams, type Tournaments } from "@prisma/client"
import prisma from "@/lib/db"
import { tournamentById } from "@/lib/queries/tournament"

type Team = Omit<Teams, "id" | "ownerId">

export const newTeams = async (team: Team, tournamentId: string) => {
  const session = await auth()
  const userId = session?.user?.id

  if (!userId) {
    throw new Error(`You need to be logged in to create a team.`)
  }

  validateTournamentId(userId)

  const tournament = await validateTournament(tournamentId)

  if ("error" in tournament) {
    throw new Error(tournament.error)
  }

  try {
    return await prisma.teams.create({
      data: {
        ...team,
        ownerId: userId,
        tournament: { connect: [{ ...tournament }] },
      },
    })
  } catch (e) {
    return prismaErrorHandling(e)
  }
}

const validateTournamentId = (tournamentId: string) => {
  if (!tournamentId) {
    throw new Error(`Tournament ID is required.`)
  }
}
const validateTournament: (
  tournamentId: string,
) => Promise<Tournaments | { error: string }> = async (
  tournamentId: string,
) => {
  const session = await auth()
  const tournament = await tournamentById(tournamentId)

  if (!tournament) {
    return { error: `Tournament not found.` }
  }

  if (tournament.userId !== session?.user?.id) {
    return { error: `You are not the owner of this tournament.` }
  }

  return tournament
}
const prismaErrorHandling = (e: unknown) => {
  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    throw new Error(e.message)
  }

  throw new Error(`Failed to create team.`)
}
