import NavLink from "@/components/NavLink"
import Link from "next/link"
import React from "react"

const AuthButtons = () => (
  <>
    <NavLink path="/sign-in" title="Sign in" />
    <li className="flex items-center">
      <Link
        href="/sign-up"
        className="block text-blue-500 border-blue-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border md:hover:text-blue-700 md:px-6 md:py-1 dark:text-white md:dark:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      >
        Sign up
      </Link>
    </li>
  </>
)

export default AuthButtons
