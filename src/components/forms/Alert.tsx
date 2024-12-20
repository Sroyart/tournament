import React from "react"

const Alert: React.FC<{ errors: string[] | undefined }> = ({ errors }) => (
  <>
    {errors && (
      <div role="alert">
        {errors.map((message, key) => (
          <span
            className="bg-red-200 rounded-md text-red-950 p-3 mb-2 inline-block w-full text-center"
            role="alert"
            key={key}
          >
            {message}
          </span>
        ))}
      </div>
    )}
  </>
)

export default Alert
