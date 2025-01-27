"use client"

import Form from "@/components/forms/Form"
import { FormField } from "@/components/forms/FormField"
import { postTeams } from "@/lib/actions/team"
import { useParams } from "next/navigation"
import React, { useActionState } from "react"

const fields = [{ name: "name", type: "text", label: "Name" }]
const JoinForm = () => {
  const params = useParams<{ id: string }>()
  const [state, formAction, isPending] = useActionState(
    postTeams.bind(null, params.id),
    null,
  )

  return (
    <Form
      formAction={formAction}
      isPending={isPending}
      buttonText={{ pending: "Joining...", default: "Join" }}
      errors={state?.errors?.others}
    >
      {fields.map((field, key) => (
        <FormField
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

export default JoinForm
