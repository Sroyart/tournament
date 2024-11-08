"use client"

import Image from "next/image"
import React from "react"
import GithubIcon from "../../../public/Github/GithubIcon.svg"
import WhiteGithubIcon from "../../../public/Github/WhiteGithubIcon.svg"
import Link from "next/link"

const GithubLinkUrl = "https://github.com/Sroyart"
const GithubLink = () => (
  <>
    <li className="flex items-center dark:hidden">
      <Link href={GithubLinkUrl}>
        <Image src={GithubIcon} width={20} height={20} alt="Github" />
      </Link>
    </li>
    <li className="items-center dark:flex hidden">
      <Link href={GithubLinkUrl}>
        <Image src={WhiteGithubIcon} width={20} height={20} alt="Github" />
      </Link>
    </li>
  </>
)

export default GithubLink
