"use client"

import Form from "@/components/forms/Form"
import { DropdownField, FormField } from "@/components/forms/FormField"
import { postTournament } from "@/lib/actions/tournament"
import React, { useActionState } from "react"

const options = [
  { value: "basketball", label: "Basketball" },
  { value: "golf", label: "Golf" },
  { value: "baseball", label: "Baseball" },
  { value: "tennis", label: "Tennis" },
]
const TournamentForm = () => {
  const [state, formAction, isPending] = useActionState(postTournament, null)

  return (
    <div className="mt-4">
      <Form
        formAction={formAction}
        isPending={isPending}
        buttonText={{ pending: "Submitting...", default: "Submit" }}
      >
        <div className="mb-5">
          <FormField
            label="Tournament name"
            type="text"
            name="name"
            errors={state?.errors.name}
          />
        </div>
        <div className="mb-5">
          <div className="flex items-center me-4 justify-between">
            <div className="flex">
              <DropdownField
                label="Choose a sport:"
                name="type"
                type=""
                options={options}
                errors={state?.errors.type}
              />
            </div>
          </div>
        </div>
        <FormField
          label="Date"
          type="date"
          name="date"
          errors={state?.errors.date}
        />
      </Form>
    </div>
  )
}

export default TournamentForm
