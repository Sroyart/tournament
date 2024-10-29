import React from "react"

type Props = {
  name: string
  type: string
  label: string
}

const FormField: React.FC<Props> = ({ name, type, label }) => (
  <>
    <label htmlFor={`${name}_input`} className="inline-block w-full">
      <span>{label}</span>
    </label>
    <input
      className="border border-grey-primary rounded-md w-full mt-1 mb-5 py-1 px-3"
      name={name}
      id={`${name}_input`}
      type={type}
    />
  </>
)

export default FormField
