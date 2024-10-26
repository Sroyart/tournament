"use client"

import { register } from "@/lib/actions/auth/signUp"
import React, { useActionState } from "react"

const RegisterForm = () => {
  const [state, formAction] = useActionState(register, null)

  return (
    <form action={formAction}>
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button>Sign Up</button>
    </form>
  )
}

export default RegisterForm
