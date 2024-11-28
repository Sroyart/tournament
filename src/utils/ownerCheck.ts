import { auth } from "@/auth"
import type { Tournaments } from "@prisma/client"

export async function ownerCheck(tournament: Tournaments) {
  const session = await auth()

  return session?.user?.id === tournament.userId
}
