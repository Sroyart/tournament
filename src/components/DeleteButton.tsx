"use client"

import Button from "@/components/Button"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

const DeleteButton: React.FC<{ id: string }> = ({ id }) => {
  const router = useRouter()
  const [state, setState] = useState({ isPending: false, error: "" })
  const deleteTournament = async () => {
    setState({ ...state, isPending: true })

    try {
      const response = await fetch(`/api/tournament?id=${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        router.push("/")
      }

      if (!response.ok) {
        setState({ isPending: false, error: `Error: ${response.statusText}` })
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setState({ isPending: false, error: error.message })
      } else {
        setState({ isPending: false, error: "An unknown error occurred" })
      }
    }
  }

  return (
    <>
      {state.error && <p>{state.error}</p>}
      <Button
        onClick={() => deleteTournament()}
        isPending={state.isPending}
        buttonText={{ pending: "Deleting...", default: "Delete" }}
        color="red"
      />
    </>
  )
}

export default DeleteButton
