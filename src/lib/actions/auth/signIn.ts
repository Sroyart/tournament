"use server"

import { signIn } from "@/auth"
import { AuthError } from "next-auth"

const enum ResponseForm {
  InvalidCredentials = "Invalid email or password.",
  SomethingWentWrong = "Something went wrong.",
}

export const authentication = async (
  prevState:
    | ResponseForm.InvalidCredentials
    | ResponseForm.SomethingWentWrong
    | null,
  formData: FormData,
) => {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  try {
    await signIn("credentials", { email, password, redirectTo: "/" })
  } catch (error: unknown) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return ResponseForm.InvalidCredentials

        default:
          return ResponseForm.SomethingWentWrong
      }
    }

    throw error
  }

  return null
}
