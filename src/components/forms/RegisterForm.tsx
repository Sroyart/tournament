"use client"

import Form from "@/components/forms/Form"
import FormField from "@/components/forms/FormField"
import { register } from "@/lib/actions/auth/signUp"
import React, { useActionState } from "react"

const RegisterForm = () => {
  const [state, formAction, isPending] = useActionState(register, null)

  return (
    <Form
      formAction={formAction}
      isPending={isPending}
      buttonText={{ pending: "Signing up...", default: "Sign up" }}
    >
      <FormField
        name="email"
        type="email"
        label="Email"
        errors={state?.errors?.email}
      />
      <FormField
        name="password"
        type="password"
        label="Password"
        errors={state?.errors?.password}
      />
      <FormField
        name="confirmPassword"
        type="password"
        label="Confirm password"
        errors={state?.errors?.confirmPassword}
      />
    </Form>
  )
}

export default RegisterForm
