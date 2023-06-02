import { Ability } from "../model/abilityType";

export function fetchAbilities(): Promise<Ability[]>{
  const amount: number = 920;
  const offset: number = 0;
  const url: string = `https://pokeapi.co/api/v2/ability?offset=${offset}&limit=${amount}`;

  return fetch(url)
    .then((res) => res.json())
    .then((jsonBody) => jsonBody.results)
    .then((list) => list);
};
