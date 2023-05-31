import { Ability } from "../model/AbilityModel ";

export const fetchAbilities = (readyFunc?: () => void) => {
  const amount: number = 358;
  const offset: number = 0;
  const url: string = `https://pokeapi.co/api/v2/ability?offset=${offset}&limit=${amount}`;
  const abilities: Ability[] = [];

  fetch(url)
    .then(response => response.json())
    .then(jsonBody => jsonBody.results)
    .then(abilitiesList => {
      console.log(abilitiesList);
      abilitiesList.map((ability: Ability) => abilities.push(ability) )
    })
    .then(readyFunc)
    .catch((err) => console.log(err))

  return abilities;
}