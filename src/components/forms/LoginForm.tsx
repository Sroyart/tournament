"use client"

import Form from "@/components/forms/Form"
import { FormField } from "@/components/forms/FormField"
import { authentication } from "@/lib/actions/auth/signIn"
import React, { useActionState } from "react"

type LoginFieldsType = {
  name: "email" | "password"
  type: "email" | "password"
  label: string
}

const fields: LoginFieldsType[] = [
  { name: "email", type: "email", label: "Email" },
  { name: "password", type: "password", label: "Password" },
]
const LoginForm = () => {
  const [state, formAction, isPending] = useActionState(authentication, null)

  return (
    <Form
      formAction={formAction}
      isPending={isPending}
      buttonText={{ pending: "Signing in...", default: "Sign in" }}
      errors={state ? [state] : []}
    >
      {fields.map((field, key) => (
        <FormField
          key={key}
          name={field.name}
          type={field.type}
          label={field.label}
        />
      ))}
    </Form>
  )
}

export default LoginForm
