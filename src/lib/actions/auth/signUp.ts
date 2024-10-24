"use server"

import type { RegisterType } from "@/types/auth"
import { z } from "zod"

const registerSchema = z.object({
  email: z.string().email({ message: "Please enter email address" }),
  password: z.string().min(8, {
    message: "At least 8 characters long",
  }),
})

export const register: (credential: RegisterType) => Promise<{
  email: string
  password: string
}> = async (previousState: string | undefined | null, formData: FormData) => {
  const email = formData.get("email")
  const password = formData.get("password")

  return { email, password }
}
