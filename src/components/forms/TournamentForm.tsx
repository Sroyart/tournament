"use client"

import { postTournament } from "@/lib/actions/queries"
import { useRouter } from "next/navigation"
import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"

type Tournament = {
  name: string;
  Date: Date;
  type: string;
};

const TournamentForm = () => {
  const router = useRouter()
  const { register, handleSubmit } = useForm<Tournament>()
  const onSubmit: SubmitHandler<Tournament> = (data) => {
    postTournament(data).then(() => {
      router.refresh()
    })
  }

  return (
    <div className="mt-4">
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nom du tournoi
          </label>
          <input
            type="text"
            {...register("name")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <div className="flex items-center me-4 justify-between">
            <div className="flex">
              <input
                {...register("type")}
                type="radio"
                value="football"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="inline-radio"
                className="ms-0.5 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Football
              </label>
            </div>
            <div className="flex">
              <input
                {...register("type")}
                type="radio"
                value="basketball"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="inline-radio"
                className="ms-0.5 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Basketball
              </label>
            </div>
            <div className="flex">
              <input
                {...register("type")}
                type="radio"
                value="golf"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="inline-radio"
                className="ms-0.5 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Golf
              </label>
            </div>
            <div className="flex">
              <input
                {...register("type")}
                type="radio"
                value="Pétanque"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="inline-radio"
                className="ms-0.5 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Pétanque
              </label>
            </div>
            <div className="flex">
              <input
                {...register("type")}
                type="radio"
                value="Tennis"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="inline-radio"
                className="ms-0.5 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Tennis
              </label>
            </div>
          </div>
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
    </div>
  )
}

export default TournamentForm
