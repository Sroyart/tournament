"use server"

import { newTeams } from "@/lib/queries/team"
import errorsArrayToObject from "@/utils/errorsHandling"
import { z } from "zod"

const schemaBuilder = z.object({
  name: z
    .string()
    .min(3, { message: "Please enter a name" })
    .max(20, { message: "Name is too long" }),
})

export const postTeams = async (
  tournamentId: string,
  prevState: {
    name: string
  } | null,
  formData: FormData,
) => {
  const { success, error, data } = schemaBuilder.safeParse(
    Object.fromEntries(formData),
  )

  if (!success) {
    return {
      name: formData.get("name") as string,
      errors: errorsArrayToObject(error.errors),
    }
  }

  const { name } = data
  const teams = await newTeams(name, tournamentId)

  return {
    ...teams,
    errors: null,
  }
}
