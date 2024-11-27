import { auth } from "@/auth"
import DeleteButton from "@/components/DeleteButton"
import { tournamentById } from "@/lib/queries/tournament"
import { notFound } from "next/navigation"

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const tournament = await tournamentById(id)

  if (!tournament) {
    notFound()
  }

  const session = await auth()

  return (
    <div className="max-w-screen-xl mx-auto">
      <h1>{tournament.name}</h1>
      <p>{tournament.date.toLocaleDateString()}</p>
      <p>{tournament.type}</p>
      {tournament.userId === session?.user?.id && <DeleteButton id={id} />}
    </div>
  )
}
