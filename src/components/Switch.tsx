"use client"

import { updateTournamentAction } from "@/lib/actions/tournament"
import type { Tournaments } from "@prisma/client"
import React from "react"

type Props = {
  tournament: Tournaments
}

const Switch: React.FC<Props> = ({ tournament }) => (
  <label className="inline-flex items-center cursor-pointer">
    <input
      onChange={async (e) => {
        await updateTournamentAction({
          ...tournament,
          isPublic: e.target.checked,
        })
      }}
      type="checkbox"
      className="sr-only peer"
      checked={tournament.isPublic}
    />
    <div className="relative w-11 h-6 bg-grey-200 peer-focus:outline-hidden peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-grey-700 peer-checked:after:translate-x-full peer-checked:rtl:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-grey-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-grey-600 peer-checked:bg-blue-600"></div>
    <span className="ms-3 text-sm font-medium ">
      This tournament is {tournament.isPublic ? "public" : "private"}
    </span>
  </label>
)

export default Switch
