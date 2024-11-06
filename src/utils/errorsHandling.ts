import type { z } from "zod"

export default function errorsArrayToObject(errors: z.ZodIssue[]) {
  return errors.reduce<Record<string, string[]>>((acc, error) => {
    const [key]: (number | string)[] = error.path

    if (!key) {
      throw new Error("Key is missing")
    }

    acc[key] ??= []
    acc[key].push(error.message)

    return acc
  }, {})
}
