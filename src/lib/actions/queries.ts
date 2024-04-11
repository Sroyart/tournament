"use server";

import {
  changeWinner,
  newMatch,
  newTournament,
  removeMatch,
  removeTournament,
} from "@/lib/script";

export const postTournament = async (data: {
  name: string;
  Date: Date;
  type: string;
}) => {
  return await newTournament(data);
};

export const deleteTournament = async (id: number) => {
  return await removeTournament(id);
};

export const postMatch = async (data: any) => {
  return await newMatch(data);
};

export const deleteMatch = async (id: number) => {
  return await removeMatch(id);
};

export const updateWinner = async (data: any) => {
  await changeWinner({ winner: data.winner, id: data.id });
  return true;
};
