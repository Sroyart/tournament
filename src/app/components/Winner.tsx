"use client";

import { updateWinner } from "@/lib/actions/queries";
import { useRouter } from "next/navigation";
import React from "react";

const Winner: React.FC<{ match: any }> = ({ match }) => {
  const router = useRouter();
  const [winner, setWinner] = React.useState<number | null>(null);
  return (
    <>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white mr-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-0.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => {
          const dropdown = document.getElementById("dropdown");
          if (dropdown?.classList.contains("hidden")) {
            dropdown.classList.remove("hidden");
          } else {
            dropdown?.classList.add("hidden");
          }
          if (winner === null) {
            return;
          }
          updateWinner({
            ...match,
            winner: winner,
          }).then(() => {
            router.refresh();
          });
        }}
      >
        Gagnant
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdown"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li
            onClick={() => setWinner(match.team1)}
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            {match.team1}
          </li>
          <li
            onClick={() => setWinner(match.team2)}
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            {match.team2}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Winner;
