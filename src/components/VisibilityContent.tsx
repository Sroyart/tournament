import { auth } from "@/auth"
import type { FC, PropsWithChildren } from "react"

const VisibilityContent: FC<{ userId: string } & PropsWithChildren> = async ({
  userId,
  children,
}) => {
  const session = await auth()

  return userId === session?.user?.id ? <>{children}</> : null
}

export default VisibilityContent
