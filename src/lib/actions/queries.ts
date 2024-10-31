"use server"

import {
  changeWinner,
  newMatch,
  newTournament,
  removeMatch,
  removeTournament,
} from "@/lib/script"

export const postTournament = async (data: {
  name: string
  Date: Date
  type: string
}) => await newTournament(data)

export const deleteTournament = async (id: number) => await removeTournament(id)

export const postMatch = async (data: any) => await newMatch(data)

export const deleteMatch = async (id: number) => await removeMatch(id)

export const updateWinner = async (data: any) => {
  await changeWinner({ winner: data.winner, id: data.id })

  return true
}
