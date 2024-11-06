import type { Tournaments } from "@prisma/client"
import React from "react"

type Props = { tournament: Tournaments }

const Card: React.FC<Props> = ({ tournament: { name, date, type } }) => (
  <div className="p-4 bg-blue-50 rounded-xl">
    <div className="text-lg mb-2 font-semibold truncate">
      <span>{name}</span>
    </div>
    <div className="text-sm text-gray-500">
      <span>{type}</span>
    </div>
    <div className="text-black text-opacity-50 text-sm">
      <span className="float-end ">{date.toLocaleDateString()}</span>
    </div>
  </div>
)

export default Card
