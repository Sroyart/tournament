import { auth } from "@/auth"
import prisma from "@/lib/db"
import { Prisma, type Tournaments } from "@prisma/client"

type Tournament = {
  name: string
  date: Date
  type: string
}

export async function allTournaments() {
  try {
    return await prisma.tournaments.findMany({
      orderBy: { date: "asc" },
      where: { isPublic: true },
    })
  } catch {
    throw new Error("Failed to fetch tournaments.")
  }
}

export async function tournamentById(id: string) {
  try {
    return await prisma.tournaments.findUnique({
      where: { id },
    })
  } catch {
    throw new Error("Failed to fetch tournament.")
  }
}

export const deleteTournament = async (id: string) => {
  try {
    return await prisma.tournaments.delete({
      where: { id },
    })
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return new Response(error.message, {
        status: 500,
      })
    }

    return new Response(`Failed to delete tournament.`, {
      status: 500,
    })
  }
}

export const newTournament = async (tournament: Tournament) => {
  const session = await auth()

  if (!session?.user?.id) {
    throw new Error(`You need to be logged in to create a tournament.`)
  }

  try {
    return await prisma.tournaments.create({
      data: { ...tournament, userId: session.user.id },
    })
  } catch (e) {
    return prismaErrorHandling(e)
  }
}

export const userTournaments = async () => {
  const session = await auth()

  if (!session?.user?.id) {
    throw new Error(`You need to be logged in to see your tournaments.`)
  }

  try {
    return await prisma.tournaments.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: { date: "asc" },
    })
  } catch {
    throw new Error("Failed to fetch tournaments.")
  }
}

export const updateTournament = async (tournament: Tournaments) => {
  try {
    return await prisma.tournaments.update({
      where: { id: tournament.id },
      data: tournament,
    })
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      throw new Error(e.message)
    }

    throw new Error(`Failed to update tournament.`)
  }
}

const prismaErrorHandling = (e: unknown) => {
  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    throw new Error(e.message)
  }

  throw new Error(`Failed to create tournament.`)
}
