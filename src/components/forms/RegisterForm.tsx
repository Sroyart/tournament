"use client"

import Form from "@/components/forms/Form"
import { FormField } from "@/components/forms/FormField"
import { register } from "@/lib/actions/auth/signUp"
import React, { useActionState } from "react"

type RegisterFieldsType = {
  name: "firstName" | "lastName" | "email" | "password" | "confirmPassword"
  type: "text" | "email" | "password"
  label: string
}

const fields: RegisterFieldsType[] = [
  { name: "firstName", type: "text", label: "First name" },
  { name: "lastName", type: "text", label: "Last name" },
  { name: "email", type: "email", label: "Email" },
  { name: "password", type: "password", label: "Password" },
  { name: "confirmPassword", type: "password", label: "Confirm password" },
]
const RegisterForm = () => {
  const [state, formAction, isPending] = useActionState(register, null)

  return (
    <Form
      formAction={formAction}
      isPending={isPending}
      buttonText={{ pending: "Signing up...", default: "Sign up" }}
      errors={state?.errors?.others}
    >
      {fields.map((field, key) => (
        <FormField
          defaultValue={state?.[field.name]}
          key={key}
          name={field.name}
          type={field.type}
          label={field.label}
          errors={state?.errors?.[field.name]}
        />
      ))}
    </Form>
  )
}

export default RegisterForm
