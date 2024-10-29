"use server"

import { signIn } from "@/auth"
import { AuthError } from "next-auth"

export const authentication = async (
  prevState: "Invalid credentials." | "Something went wrong." | null,
  formData: FormData,
) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    await signIn("credentials", formData)
  } catch (error: unknown) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid email or password."

        default:
          return "Something went wrong."
      }
    }

    throw error
  }

  return null
}
