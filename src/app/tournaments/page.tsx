import Card from "@/components/Card"
import TournamentForm from "@/components/forms/TournamentForm"
import { userTournaments } from "@/lib/queries/tournament"
import React from "react"

const page = async () => {
  const tournaments = await userTournaments()

  return (
    <>
      <TournamentForm />
      {tournaments.length === 0 ? (
        <div className="flex justify-center">
          <span>No tournaments yet.</span>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 my-2 p-24">
          {tournaments.map((tournament) => (
            <Card key={tournament.id} tournament={tournament} />
          ))}
        </div>
      )}
    </>
  )
}

export default page
