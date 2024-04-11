import DeleteMatch from "@/app/components/DeleteMatch";
import DeleteTournament from "@/app/components/DeleteTournament";
import MatchForm from "@/app/components/forms/MatchForm";
import TournamentForm from "@/app/components/forms/TournamentForm";
import More from "@/app/components/More";
import Winner from "@/app/components/Winner";
import { allTournaments } from "@/lib/script";
import React from "react";

const page = async () => {
  const tournaments: any = await allTournaments();

  return (
    <>
      <TournamentForm />
      <div className="flex min-h-screen my-2 flex-col items-center p-24">
        {tournaments.map((tournament: any) => (
          <div
            key={tournament.id}
            className="block w-10/12 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {tournament.name}
            </h2>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {tournament.Date.toString()}
            </p>
            <More id={tournament.id}>
              <MatchForm tournamentId={tournament.id} />
              <tr>
                {tournament.matches.map((match: any) => (
                  <div key={match.id}>
                    <Winner match={match} />
                    <span className="text-blue-600">{match.team1}</span> vs{" "}
                    <span className="text-red-600">{match.team2}</span> -{" "}
                    {match.winner ? (
                      <span className="text-yellow-600 py-2">
                        Gagnant : {match.winner}
                      </span>
                    ) : null}{" "}
                    - {match.Date.toString().split("T")[0]}
                    <DeleteMatch id={match.id} />
                  </div>
                ))}
              </tr>
            </More>
            <DeleteTournament id={tournament.id} />
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
