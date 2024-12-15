import Button from "@/components/Button"
import Alert from "@/components/forms/Alert"
import React from "react"

type Props = {
  formAction: (payload: FormData) => void
  children: React.ReactNode
  isPending: boolean
  buttonText: { pending: string; default: string }
  errors?: string[]
}

const Form: React.FC<Props> = ({
  formAction,
  children,
  isPending,
  buttonText,
  errors,
}) => (
  <div className="flex justify-center items-center h-full my-16 ">
    <form action={formAction} className="w-96 max-w-full">
      <fieldset>{children}</fieldset>
      <Alert errors={errors} />
      <Button
        isPending={isPending}
        buttonText={{
          pending: buttonText.pending,
          default: buttonText.default,
        }}
        type="submit"
      />
    </form>
  </div>
)

export default Form
