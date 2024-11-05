import Card from "@/components/Card"
import type { Tournaments } from "@prisma/client"
import React from "react"

type Props = {
  tournaments: Tournaments[]
}

const CardsList: React.FC<Props> = ({ tournaments }) => (
  <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 my-2 p-24">
    {tournaments.map((tournament) => (
      <Card key={tournament.id} tournament={tournament} />
    ))}
  </div>
)

export default CardsList
