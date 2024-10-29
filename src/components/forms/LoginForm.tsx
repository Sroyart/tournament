"use client"

import Form from "@/components/forms/Form"
import FormField from "@/components/forms/FormField"
import { authentication } from "@/lib/actions/auth/signIn"
import React, { useActionState } from "react"

const LoginForm = () => {
  const [state, formAction, isPending] = useActionState(authentication, null)

  return (
    <Form
      formAction={formAction}
      isPending={isPending}
      buttonText={{ pending: "Signing in...", default: "Sign in" }}
    >
      <FormField name="email" type="email" label="Email" />
      <FormField name="password" type="password" label="Password" />
      {state && (
        <span
          className="bg-red-intComp rounded-md text-red-secText p-3 mb-2 inline-block"
          role="alert"
        >
          {state}
        </span>
      )}
    </Form>
  )
}

export default LoginForm
