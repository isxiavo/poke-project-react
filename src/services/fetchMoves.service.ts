import { Move } from "../model/moveModel";

export function fetchMoves(): Promise<Move[]>{
  const amount: number = 920;
  const offset: number = 0;
  const url: string = `https://pokeapi.co/api/v2/move?offset=${offset}&limit=${amount}`;

  return fetch(url)
    .then((res) => res.json())
    .then((jsonBody) => jsonBody.results)
    .then((list) => {
      
      return list;
    });
};
