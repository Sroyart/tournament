"use client"

import MoonIcon from "@/app/assets/themes/MoonIcon"
import SunIcon from "@/app/assets/themes/SunIcon"
import { useTheme } from "next-themes"

const ThemeChanger = () => {
  const { setTheme } = useTheme()

  return (
    <>
      <button
        onClick={() => {
          setTheme("light")
        }}
        className="hidden dark:inline"
      >
        <SunIcon />
      </button>
      <button
        onClick={() => {
          setTheme("dark")
        }}
        className="dark:hidden"
      >
        <MoonIcon />
      </button>
    </>
  )
}

export default ThemeChanger
