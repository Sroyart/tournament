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
        className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded-md disabled:bg-blue-950 disabled:text-blue-700"
        aria-disabled={isPending}
        disabled={isPending}
      >
        {isPending ? "Signing in..." : "Sign in"}
      </button>
    </form>
  </div>
)

export default Form
