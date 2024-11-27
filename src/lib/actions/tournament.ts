"use server"

import { newTournament } from "@/lib/queries/tournament"
import { changeWinner, newMatch, removeMatch } from "@/lib/script"
import errorsArrayToObject from "@/utils/errorsHandling"
import { redirect } from "next/navigation"
import { z } from "zod"

export const postTournament = async (
  prevState: {
    name: string
    date: Date
    type: string
  } | null,
  formData: FormData,
) => {
  const name = formData.get("name") as string
  const date = new Date(formData.get("date") as string)
  const type = formData.get("type") as string
  const checkBody = z
    .object({
      name: z
        .string()
        .min(3, { message: "Please enter a name" })
        .max(20, { message: "Name is too long" }),
      date: z.date({ message: "Please enter a date" }),
      type: z.string({ message: "Please enter a type" }),
    })
    .safeParse({ name, date, type })

  if (!checkBody.success) {
    return {
      name,
      date,
      type,
      errors: errorsArrayToObject(checkBody.error.errors),
    }
  }

  const { id } = await newTournament({
    name,
    date,
    type,
  })

  return redirect(`/tournament/${id}`)
}

export const postMatch = async (data: any) => await newMatch(data)

export const deleteMatch = async (id: number) => await removeMatch(id)

export const updateWinner = async (data: any) => {
  await changeWinner({ winner: data.winner, id: data.id })

  return true
}
