"use client"

import { authentication } from "@/lib/actions/auth/signIn"
import React, { useActionState } from "react"

const LoginForm = () => {
  const [state, formAction, isPending] = useActionState(authentication, null)

  return (
    <form action={formAction}>
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
        {state && <div role="alert">{state}</div>}
      </label>
      <button className="mt-4 w-full" aria-disabled={isPending}>
        Log in
      </button>
    </form>
  )
}

export default LoginForm
