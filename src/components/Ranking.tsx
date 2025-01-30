import { teamsByTournamentId } from "@/lib/queries/team"
import React from "react"
import { type Teams } from "@prisma/client"

const TableHeadElement: {
  title: string
  rowNam: keyof Teams
}[] = [
  {
    title: "Name",
    rowNam: "name",
  },
  {
    title: "Win",
    rowNam: "wins",
  },
  {
    title: "Lose",
    rowNam: "losses",
  },
]
const Ranking: React.FC<{ id: string }> = async ({ id }) => {
  const teams = await teamsByTournamentId(id)

  if (teams.length === 0) {
    return <p>There are no teams in this tournament.</p>
  }

  return (
    <div className="overflow-x-auto sm:rounded-lg shadow-md">
      <table className="w-full text-sm rtl:text-right text-left ">
        <thead className="bg-grey-400 uppercase text-grey-50">
          <tr>
            {TableHeadElement.map((head) => (
              <th className="px-6" key={head.title} scope="col">
                {head.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.id}>
              {TableHeadElement.map(({ rowNam }, key) => (
                <td className="px-6" key={key}>
                  {team[rowNam]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Ranking
