import CardsList from "@/components/CardsList"
import TournamentForm from "@/components/forms/TournamentForm"
import { userTournaments } from "@/lib/queries/tournament"
import React from "react"

export default async function Page() {
  const tournaments = await userTournaments()

  return (
    <>
      <TournamentForm />
      {tournaments.length === 0 ? (
        <div className="flex justify-center">
          <span>No tournaments yet.</span>
        </div>
      ) : (
        <CardsList tournaments={tournaments} />
      )}
    </>
  )
}
