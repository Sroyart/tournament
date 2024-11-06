import React from "react"
import Link from "next/link"
import Image from "next/image"
import icon from "/public/icons.png"
import Logo from "@/app/assets/Logo"
import AuthButtons from "@/components/AuthButtons"
import { auth } from "@/auth"
import DropdownSession from "@/components/DropdownSession"
import ThemeChanger from "@/components/ThemeChanger"

const navLinks = [
  { title: "Acceuil", path: "/" },
  { title: "Tournois", path: "/tournaments" },
]
const Navbar = async () => {
  const session = await auth()

  return (
    <nav className="border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src={icon} width={50} height={50} alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">
            TourNament
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <Logo />
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex  flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="flex items-center">
              <ThemeChanger />
            </li>
            {navLinks.map((link) => (
              <li key={link.title} className="flex items-center">
                <Link
                  href={link.path}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {link.title}
                </Link>
              </li>
            ))}
            {session ? <DropdownSession /> : <AuthButtons />}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
