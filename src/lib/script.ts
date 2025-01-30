import { PrismaClient, type User } from "@prisma/client"

const prisma = new PrismaClient()

export const allTournaments = async () => {
  const tournaments = await prisma.tournaments.findMany({
    include: {
      matches: true,
    },
  })

  return tournaments
}

export const removeMatch = async (id: number) => {
  const match = await prisma.matches.delete({
    where: {
      id,
    },
  })

  return match
}

export async function getUser(email: string): Promise<User | null> {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    return user
  } catch {
    throw new Error(`Failed to fetch user.`)
  }
}
