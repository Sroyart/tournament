import DeleteButton from "@/components/DeleteButton"
import Ranking from "@/components/Ranking"
import Switch from "@/components/Switch"
import VisibilityContent from "@/components/VisibilityContent"
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

  return (
    <div className="max-w-(--breakpoint-xl) mx-auto">
      <div className="flex justify-end">
        <VisibilityContent userId={tournament.userId}>
          {() => <Switch tournament={tournament} />}
        </VisibilityContent>
      </div>
      <h1>{tournament.name}</h1>
      <p>{tournament.date.toLocaleDateString()}</p>
      <p>{tournament.type}</p>
      <Ranking id={id} />
      <div className="absolute left-0 bottom-0 shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full">
        <div className=" flex justify-end gap-2 px-4 max-w-(--breakpoint-xl) mx-auto">
          <VisibilityContent
            userId={tournament.userId}
            text={{ owner: "Add teams", invite: "Join with a team" }}
            show
          >
            {({ text }) => (
              <Link
                className="bg-blue-500 hover:bg-blue-600 my-4 active:bg-blue-700 text-white py-2 px-2 rounded-md disabled:bg-blue-100 disabled:text-blue-400"
                href={`${id}/join`}
              >
                {text}
              </Link>
            )}
          </VisibilityContent>
          <VisibilityContent userId={tournament.userId}>
            {() => (
              <div className="w-24">
                <DeleteButton id={id} />
              </div>
            )}
          </VisibilityContent>
        </div>
      </div>
    </div>
  )
}
