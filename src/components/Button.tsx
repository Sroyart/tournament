import React from "react"

enum ColorEnum {
  blue = "bg-blue-500",
  red = "bg-red-500",
}

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
    className={`${ColorEnum[color]} hover:bg-blue-600 my-4 active:bg-blue-700 text-white w-full py-2 px-2 rounded-md disabled:bg-blue-100 disabled:text-blue-400`}
    aria-disabled={isPending}
    disabled={isPending}
    type={type}
    onClick={onClick}
  >
    {isPending ? buttonText.pending : buttonText.default}
  </button>
)

export default Button
