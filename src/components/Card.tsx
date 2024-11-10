import type { Tournaments } from "@prisma/client"
import React from "react"

type Props = { tournament: Tournaments }

const Card: React.FC<Props> = ({ tournament: { name, date, type } }) => (
  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-xl">
    <div className="dark:text-white text-lg mb-2 font-semibold truncate">
      <span>{name}</span>
    </div>
    <div className="dark:text-white text-sm text-gray-500">
      <span>{type}</span>
    </div>
    <div className="text-black dark:text-white text-opacity-50 text-sm">
      <span className="float-end ">{date.toLocaleDateString()}</span>
    </div>
  </div>
)

export default Card
