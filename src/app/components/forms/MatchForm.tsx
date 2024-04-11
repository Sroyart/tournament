"use client";

import { postMatch } from "@/lib/actions/queries";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Match = {
  team1: string;
  team2: string;
  Date: Date;
};

const MatchForm: React.FC<{ tournamentId: number }> = ({ tournamentId }) => {
  const router = useRouter();

  const { register, handleSubmit } = useForm<Match>();

  const onSubmit: SubmitHandler<Match> = (data) => {
    postMatch({
      ...data,
      tournamentId: tournamentId,
      Date: new Date(data.Date),
    }).then(() => {
      router.refresh();
    });
  };
  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5"></div>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Nom de l&apos;équipe 1
        </label>
        <input
          type="text"
          {...register("team1")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Nom de l&apos;équipe 2
        </label>
        <input
          type="text"
          {...register("team2")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="date"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Date
        </label>
        <input
          type="date"
          {...register("Date")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Valider
      </button>
    </form>
  );
};

export default MatchForm;
