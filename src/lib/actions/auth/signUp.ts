"use server"

import { signIn } from "@/auth"
import { signUp } from "@/lib/queries/user"
import errorsArrayToObject from "@/utils/errorsHandling"
import { saltAndHashPassword } from "@/utils/password"
import { z } from "zod"

const schemaBuilder = (formData: FormData) =>
  z.object({
    firstName: z
      .string()
      .min(2, { message: "At least 2 characters long" })
      .max(50, { message: "At most 50 characters long" }),
    lastName: z
      .string()
      .min(2, { message: "At least 2 characters long" })
      .max(50, { message: "At most 50 characters long" }),
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

export const register = async (
  prevState: {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
  } | null,
  formData: FormData,
) => {
  const { success, error, data } = schemaBuilder(formData).safeParse(
    Object.fromEntries(formData),
  )

  if (!success) {
    return {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      confirmPassword: "",
      errors: errorsArrayToObject(error.errors),
    }
  }

  const { firstName, lastName, email, password } = data
  const passwordHashed = await saltAndHashPassword(password)
  const registerRespond = await signUp({
    ...data,
    password: passwordHashed,
  })

  if (registerRespond.errors) {
    return { ...registerRespond, confirmPassword: "" }
  }

  await signIn("credentials", {
    firstName,
    lastName,
    email,
    password,
    redirectTo: "/",
  })

  return {
    firstName,
    lastName,
    email,
    password,
    confirmPassword: "",
    errors: null,
  }
}
