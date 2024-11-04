"use server"

import prisma from "@/lib/db"
import { getUser } from "@/lib/script"
import errorsArrayToObject from "@/utils/errorsHandling"
import { saltAndHashPassword } from "@/utils/password"
import { z } from "zod"

export const register = async (
  prevState: {
    email: string
    password: string
  } | null,
  formData: FormData,
) => {
  const registerSchema = z.object({
    email: z.string().email({ message: "Please enter email address" }),
    password: z
      .string()
      .min(8, {
        message: "At least 8 characters long",
      })
      .refine((data) => data === formData.get("confirmPassword"), {
        message: "Passwords do not match",
      }),
    confirmPassword: z.string(),
  })
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const confirmPassword = formData.get("confirmPassword") as string
  const result = registerSchema.safeParse({ email, password, confirmPassword })

  if (!result.success) {
    return { email, password, errors: errorsArrayToObject(result.error.errors) }
  }

  try {
    await getUser(email)
  } catch {
    return { email, password, errors: { email: ["Email is already taken"] } }
  }

  const passwordHashed = await saltAndHashPassword(password)

  await prisma.user.create({
    data: {
      email,
      password: passwordHashed,
    },
  })

  return { email, password, errors: null }
}
