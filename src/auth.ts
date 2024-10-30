import nextAuth from "next-auth"
import authCredentials from "next-auth/providers/credentials"
import { authConfig } from "@/auth.config"
import { z } from "zod"
import bcrypt from "bcryptjs"
import { getUser } from "@/lib/script"

export const { handlers, signIn, signOut, auth } = nextAuth({
  ...authConfig,
  providers: [
    authCredentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials)

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data
          const user = await getUser(email)

          if (!user) {
            return null
          }

          const passwordsMatch = await bcrypt.compare(password, user.password)

          if (passwordsMatch) {
            return user
          }
        }

        return null
      },
    }),
  ],
})
