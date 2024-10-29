import bcrypt from "bcryptjs"

const saltAndHashPassword = async (password: string): Promise<string> => {
  try {
    const salt: string = await bcrypt.genSalt(10)
    const hashedPassword: string = await bcrypt.hash(password, salt)

    return hashedPassword
  } catch {
    throw new Error(`Error hashing password`)
  }
}

export { saltAndHashPassword }
