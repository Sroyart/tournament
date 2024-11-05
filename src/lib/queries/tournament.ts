import { auth } from "@/auth"
import prisma from "@/lib/db"
import { Prisma } from "@prisma/client"

type Tournament = {
  name: string
  date: Date
  type: string
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

  return await prisma.tournaments.findMany({
    where: {
      userId: session.user.id,
    },
  })
}

const prismaErrorHandling = (e: unknown) => {
  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    throw new Error(e.message)
  }

  throw new Error(`Failed to create tournament.`)
}
