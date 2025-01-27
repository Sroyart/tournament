import React from "react"

type ButtonSubmit = {
  type?: "submit"
  onClick?: never
}

type ButtonOnClickProps = {
  type?: "button"
  onClick?: () => void
}

type Props = {
  isPending?: boolean
  buttonText: { pending: string; default: string }
  color?: "red"
} & (ButtonSubmit | ButtonOnClickProps)

const Button: React.FC<Props> = ({
  isPending,
  buttonText,
  type = "submit",
  onClick,
  color = "blue" as "blue" | "red",
}) => (
  <button
    className={`bg-${color}-500 hover:bg-${color}-600 cursor-pointer my-4 active:bg-${color}-900 text-white w-full py-2 px-2 rounded-md disabled:bg-blue-100 disabled:text-${color}-400`}
    aria-disabled={isPending}
    disabled={isPending}
    type={type}
    onClick={onClick}
  >
    {isPending ? buttonText.pending : buttonText.default}
  </button>
)

export default Button
