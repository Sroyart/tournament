import { allTournaments } from "@/lib/script";

export default async function Home() {
  const tournaments = await allTournaments();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {tournaments.map((tournament) => (
        <div
          key={tournament.id}
          className="block w-10/12 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {tournament.name}
          </h2>
          {tournament.matches.map((match) => (
            <div key={match.id}>
              <span className="text-blue-600">{match.team1}</span> vs{" "}
              <span className="text-red-600">{match.team2}</span> -{" "}
              {match.winner ? (
                <span className="text-yellow-600 py-2">
                  Gagnant : {match.winner}
                </span>
              ) : null}{" "}
              - {match.Date.toString().split("T")[0]}
            </div>
          ))}
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {tournament.Date.toString()}
          </p>
        </div>
      ))}
    </main>
  );
}
