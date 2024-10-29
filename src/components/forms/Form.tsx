import React from "react"

type Props = {
  formAction: (payload: FormData) => void
  children: React.ReactNode
  isPending: boolean
}

const Form: React.FC<Props> = ({ formAction, children, isPending }) => (
  <div className="flex justify-center items-center h-full my-16">
    <form action={formAction}>
      <fieldset>{children}</fieldset>
      <button
        className="bg-blue-primary hover:bg-blue-secondary text-white w-full py-2 rounded-md"
        aria-disabled={isPending}
        disabled={isPending}
      >
        Log in
      </button>
    </form>
  </div>
)

export default Form
