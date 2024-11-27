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
      <button
        className="bg-blue-500 hover:bg-blue-600 my-4 active:bg-blue-700 text-white w-full py-2 rounded-md disabled:bg-blue-100 disabled:text-blue-400"
        aria-disabled={isPending}
        disabled={isPending}
      >
        {isPending ? buttonText.pending : buttonText.default}
      </button>
      <Alert errors={errors} />
    </form>
  </div>
)

export default Form
