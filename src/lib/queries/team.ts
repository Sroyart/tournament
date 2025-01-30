import { auth } from "@/auth"
import { Prisma, type Tournaments } from "@prisma/client"
import prisma from "@/lib/db"
import { tournamentById } from "@/lib/queries/tournament"

export const teamsByTournamentId = async (tournamentId: string) => {
  validateTournamentId(tournamentId)

  const { tournament } = await validateTournament(tournamentId)

  return await prisma.teams.findMany({
    where: {
      tournament: {
        some: {
          id: tournament.id,
        },
      },
    },
  })
}

export const newTeams = async (name: string, tournamentId: string) => {
  const session = await auth()
  const userId = session?.user?.id

  if (!userId) {
    throw new Error(`You need to be logged in to create a team.`)
  }

  validateTournamentId(userId)

  const { error, tournament } = await validateTournament(tournamentId)

  try {
    return await prisma.teams.create({
      data: {
        name,
        isAccepted: !error,
        ownerId: userId,
        tournament: { connect: [{ id: tournament.id }] },
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
) => Promise<{ tournament: Tournaments; error: string | null }> = async (
  tournamentId: string,
) => {
  const session = await auth()
  const tournament = await tournamentById(tournamentId)

  if (!tournament) {
    throw new Error(`Tournament not found.`)
  }

  if (tournament.userId !== session?.user?.id) {
    return { tournament, error: `You are not the owner of this tournament.` }
  }

  return { tournament, error: null }
}
const prismaErrorHandling = (e: unknown) => {
  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    throw new Error(e.message)
  }

  throw new Error(String(e))
}
