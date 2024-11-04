import React from "react"

type Props = {
  name: string
  type: string
  label: string
  errors?: string[]
}

type DropdownProps = Props & {
  options: { value: string; label: string }[]
}

const FormField: React.FC<Props> = ({ name, type, label, errors }) => (
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
    {errors && (
      <div role="alert">
        {errors.map((error) => (
          <span
            className="bg-red-intComp rounded-md text-red-secText p-3 mb-2 inline-block"
            role="alert"
            key={error}
          >
            {error}
          </span>
        ))}
      </div>
    )}
  </>
)
const DropdownField: React.FC<DropdownProps> = ({
  name,
  label,
  errors,
  options,
}) => (
  <>
    <label htmlFor={`${name}-select`}>{label}</label>
    <select name={name} id={`${name}-select`}>
      <option value="">--Please choose an option--</option>
      {options.map((option, key) => (
        <option key={key} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {errors && (
      <div role="alert">
        {errors.map((error) => (
          <span
            className="bg-red-intComp rounded-md text-red-secText p-3 mb-2 inline-block"
            role="alert"
            key={error}
          >
            {error}
          </span>
        ))}
      </div>
    )}
  </>
)

export { FormField, DropdownField }
