import DeleteButton from "@/components/DeleteButton"
import { tournamentById } from "@/lib/queries/tournament"

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const tournament = await tournamentById(id)

  return (
    <div className="max-w-screen-xl mx-auto">
      <h1>{tournament?.name}</h1>
      <p>{tournament?.date.toLocaleDateString()}</p>
      <p>{tournament?.type}</p>
      <DeleteButton id={id} />
    </div>
  )
}
