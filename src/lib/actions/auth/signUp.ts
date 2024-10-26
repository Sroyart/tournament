"use server"

import { z } from "zod"

export const register = async (
  state: { email: string; password: string } | null,
  formData: FormData,
) => {
  const registerSchema = z.object({
    email: z.string().email({ message: "Please enter email address" }),
    password: z.string().min(8, {
      message: "At least 8 characters long",
    }),
  })
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const result = registerSchema.safeParse({ email, password })
  const errorsArrayToObject = (errors: z.ZodIssue[]) =>
    errors.reduce<Record<string, string[]>>((acc, error) => {
      const [key]: (number | string)[] = error.path

      if (!key) {
        throw new Error("Key is missing")
      }

      acc[key] ??= []
      acc[key].push(error.message)

      return acc
    }, {})

  if (!result.success) {
    return { email, password, errors: errorsArrayToObject(result.error.errors) }
  }

  return { email, password, errors: null }
}
