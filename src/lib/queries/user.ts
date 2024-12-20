import { Prisma } from "@prisma/client"
import prisma from "@/lib/db"

const errorArray = {
  firstName: [],
  lastName: [],
  email: [],
  password: [],
  confirmPassword: [],
  others: [],
}

export const signUp = async ({
  firstName,
  lastName,
  email,
  password,
}: {
  firstName: string
  lastName: string
  email: string
  password: string
}) => {
  try {
    const register = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password,
      },
    })

    return { ...register, errors: null }
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return {
          firstName,
          lastName,
          email,
          password,
          errors: {
            ...errorArray,
            email: ["Email already exist"],
          },
        }
      }
    }

    return {
      firstName,
      lastName,
      email,
      password,
      errors: {
        ...errorArray,
        others: ["Something went wrong"],
      },
    }
  }
}
