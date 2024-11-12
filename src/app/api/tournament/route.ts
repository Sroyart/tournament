import { deleteTournament, tournamentById } from "@/lib/queries/tournament"
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

  return NextResponse.json(await deleteTournament(id))
}
