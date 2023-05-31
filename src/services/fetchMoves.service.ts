import { Move } from "../model/moveModel";

export const fetchMoves = (readyFunc?: () => void) => {
  const amount: number = 920;
  const offset:number = 0;
  const url: string = `https://pokeapi.co/api/v2/move?offset=${offset}&limit=${amount}`;
  const moves: Move[] = [];

  fetch(url)
    .then(response => response.json())
    .then(jsonBody => jsonBody.results)
    .then(movesList => {
      console.log(movesList);
      movesList.map((move: Move) => moves.push(move) )
    })
    .then(readyFunc)
    .catch((err) => console.log(err))

  return moves;
}