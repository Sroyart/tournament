import UserIcon from "@/app/assets/UserIcon"
import React from "react"
import { signOut } from "@/auth"
import LogoutIcon from "@/app/assets/LogoutIcon"

const DropdownSession = () => (
  <li className="group/profile block relative">
    <UserIcon />
    <div className="absolute right-0 invisible group-hover/profile:visible ">
      <div className="overflow-hidden rounded-md mt-2">
        <form
          action={async () => {
            "use server"
            await signOut({ redirectTo: "/" })
          }}
        >
          <button className="flex bg-blue-50 p-2 items-center gap-1 hover:bg-blue-100 active:bg-blue-200">
            <span>Logout</span>
            <LogoutIcon />
          </button>
        </form>
      </div>
    </div>
  </li>
)

export default DropdownSession
