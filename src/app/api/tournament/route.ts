import { auth } from "@/auth"
import { deleteTournament, tournamentById } from "@/lib/queries/tournament"
import type { Tournaments } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

export async function DELETE(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const id = searchParams.get("id")

  if (!id) {
    return new Response(`No id provided`, {
      status: 400,
    })
  }

  const tournament = await tournamentById(id)

  if (!tournament) {
    return new Response(`Tournament not found`, {
      status: 404,
    })
  }

  const isOwner = await ownerCheck(tournament)

  if (isOwner) {
    return new Response(`Unauthorized`, {
      status: 401,
    })
  }

  return NextResponse.json(await deleteTournament(id))
}

async function ownerCheck(tournament: Tournaments) {
  const session = await auth()

  return session?.user?.id === tournament.userId
}
