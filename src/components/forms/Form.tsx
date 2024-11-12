import Button from "@/components/Button"
import React from "react"

type Props = {
  formAction: (payload: FormData) => void
  children: React.ReactNode
  isPending: boolean
  buttonText: { pending: string; default: string }
}

const Form: React.FC<Props> = ({
  formAction,
  children,
  isPending,
  buttonText,
}) => (
  <div className="flex justify-center items-center h-full my-16 ">
    <form action={formAction} className="w-96 max-w-full">
      <fieldset>{children}</fieldset>
      <Button isPending={isPending} buttonText={buttonText} />
    </form>
  </div>
)

export default Form
