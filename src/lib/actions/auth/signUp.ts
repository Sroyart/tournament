"use server"

import { signIn } from "@/auth"
import { signUp } from "@/lib/queries/user"
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
  const { success, error, data } = registerSchema.safeParse(
    Object.fromEntries(formData),
  )

  if (!success) {
    return {
      email: "",
      password: "",
      errors: errorsArrayToObject(error.errors),
    }
  }

  const { email, password } = data
  const passwordHashed = await saltAndHashPassword(password)
  const registerRespond = await signUp(email, password, passwordHashed)

  if (registerRespond.errors) {
    return registerRespond
  }

  await signIn("credentials", { email, password, redirectTo: "/" })

  return { email, password, errors: null }
}
