"use client"

import { deleteTournament } from "@/lib/actions/tournament"
import { useRouter } from "next/navigation"
import React from "react"

const DeleteTournament: React.FC<{ id: number }> = ({ id }) => {
  const router = useRouter()

  return (
    <button
      type="button"
      onClick={async () => {
        await deleteTournament(id).then(() => {
          router.refresh()
        })
      }}
      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
    >
      Supprimer le tournoi
    </button>
  )
}

export default DeleteTournament
