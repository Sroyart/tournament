/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { NextAuthConfig } from "next-auth"

export const authConfig = {
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = Boolean(auth?.user)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const isOnTournaments = nextUrl.pathname.startsWith("/tournaments")
      const isOnSignIn = nextUrl.pathname === "/sign-in"
      const isOnSignUp = nextUrl.pathname === "/sign-up"

      if (isLoggedIn) {
        if (isOnSignIn || isOnSignUp) {
          return Response.redirect(new URL("/", nextUrl))
        }

        return true
      }

      if (isOnTournaments) {
        return Response.redirect(new URL("/sign-in", nextUrl))
      }

      return true
    },
  },
  providers: [],
} satisfies NextAuthConfig
