import { auth } from "@/auth"
import DeleteButton from "@/components/DeleteButton"
import Switch from "@/components/Switch"
import { tournamentById } from "@/lib/queries/tournament"
import Link from "next/link"
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
      <div className="flex justify-end">
        <Switch tournament={tournament} />
      </div>
      <h1>{tournament.name}</h1>
      <p>{tournament.date.toLocaleDateString()}</p>
      <p>{tournament.type}</p>
      {tournament.userId === session?.user?.id && (
        <div className="w-24">
          <DeleteButton id={id} />
        </div>
      )}
      <Link href={`${id}/join`}>Join</Link>
    </div>
  )
}
