import { auth } from "@/auth"
import type { FC, JSX } from "react"

type VisibilityContentProps = {
  userId: string
  children: (props: { text: string }) => JSX.Element
  show?: true
  text?: {
    owner: string
    invite: string
  }
}

const VisibilityContent: FC<VisibilityContentProps> = async ({
  userId,
  children,
  show = false,
  text = { owner: "", invite: "" },
}) => {
  const session = await auth()

  if (userId === session?.user?.id) {
    return children({ text: text.owner })
  }

  if (show) {
    return children({ text: text.invite })
  }

  return null
}

export default VisibilityContent
