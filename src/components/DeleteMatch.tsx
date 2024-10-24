"use client"

import { deleteMatch } from "@/lib/actions/queries"
import { useRouter } from "next/navigation"
import React from "react"

const DeleteMatch: React.FC<{ id: number }> = ({ id }) => {
  const router = useRouter()

  return (
    <button
      type="button"
      onClick={async () => {
        await deleteMatch(id).then(() => {
          router.refresh()
        })
      }}
      className="mx-4 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-0.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
    >
      supprimer le match
    </button>
  )
}

export default DeleteMatch
