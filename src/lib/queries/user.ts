import { Prisma } from "@prisma/client"
import prisma from "@/lib/db"

export const signUp = async (
  email: string,
  password: string,
  passwordHashed: string,
) => {
  try {
    const register = await prisma.user.create({
      data: {
        email,
        password: passwordHashed,
      },
    })

    return { ...register, errors: null }
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return {
          email,
          password,
          errors: {
            email: ["Email already exist"],
            password: [],
            confirmPassword: [],
          },
        }
      }

      throw new Error()
    }

    throw new Error()
  }
}
