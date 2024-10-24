import Link from "next/link"
import React from "react"

const AuthButtons = () => (
  <>
    <li>
      <Link
        href="/sign-in"
        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      >
        Sign in
      </Link>
    </li>
    <li>
      <Link
        href="/sign-up"
        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      >
        Sign up
      </Link>
    </li>
  </>
)

export default AuthButtons
