import type { NextAuthConfig } from "next-auth"

export const authConfig = {
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = Boolean(auth?.user)
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
