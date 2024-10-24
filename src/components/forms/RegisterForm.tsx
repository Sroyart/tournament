"use client"

import { register } from "@/lib/actions/auth/signUp"
import React from "react"
import { useFormState } from "react-dom"

const RegisterForm = () => {
  const [state, action] = useFormState(register, {
    email: "",
    password: "",
  })

  return (
    <form action={action}>
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
