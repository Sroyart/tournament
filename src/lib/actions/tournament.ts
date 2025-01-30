"use server"

import { newTournament, updateTournament } from "@/lib/queries/tournament"
import { removeMatch } from "@/lib/script"
import errorsArrayToObject from "@/utils/errorsHandling"
import { ownerCheck } from "@/utils/ownerCheck"
import type { Tournaments } from "@prisma/client"
import { revalidatePath } from "next/cache"
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

export const updateTournamentAction = async (tournament: Tournaments) => {
  const isOwner = await ownerCheck(tournament)

  if (!isOwner) {
    return { error: ["You are not the owner of this tournament"] }
  }

  await updateTournament(tournament)

  revalidatePath(`/tournament/${tournament.id}`)

  return { error: [] }
}

export const deleteMatch = async (id: number) => await removeMatch(id)
