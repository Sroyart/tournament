"use client"

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

type Props = {
  title: string | React.JSX.Element
  path: string
}

const NavLink: React.FC<Props> = ({ title, path }) => {
  const pathname = usePathname()

  return (
    <li className="flex items-center">
      <Link
        href={path}
        className={clsx(
          pathname === path ? "text-black dark:text-white" : "text-grey-400",
          "block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0  dark:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
        )}
      >
        {title}
      </Link>
    </li>
  )
}

export default NavLink
