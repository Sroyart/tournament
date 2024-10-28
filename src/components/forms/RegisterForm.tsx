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
        {state?.errors?.email && (
          <div role="alert">
            {state.errors.email.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        )}
      </label>
      <label>
        Password
        <input name="password" type="password" />
        {state?.errors?.password && (
          <div role="alert">
            {state.errors.password.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        )}
      </label>
      <label>
        Confirm password
        <input name="confirmPassword" type="password" />
        {state?.errors?.confirmPassword && (
          <div role="alert">
            {state.errors.confirmPassword.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        )}
      </label>
      <button>Sign Up</button>
    </form>
  )
}

export default RegisterForm
