import { Pokemon } from "../model/pokemon";

type checkStatsType = {
  hp?: { min: number; max: number };
  atk?: { min: number; max: number };
  def?: { min: number; max: number };
  satk?: { min: number; max: number };
  sdef?: { min: number; max: number };
  spd?: { min: number; max: number };
};

export const filterPokemons = (
  lista: Pokemon[],
  filterTypes: string[],
  filterAbilities: string[],
  filterMoves: string[],
  filterStats: checkStatsType
) => {
  let newLista: Pokemon[] = [];

  if (filterTypes.length > 0) {
    newLista = lista.filter((poke) => {
      if (filterTypes.length < 2) {
        if (filterTypes[0] === "any") {
          console.log('apenas "any"')
          return lista;
        } else {
          console.log('um tipo que não é "any"')
          return (
            poke.types.length < 2 && poke.types[0].type.name === filterTypes[0]
          );
        }
      } else {
        if (filterTypes.includes("any")) {
          console.log('mais de um tipo com "any"')
          return (
            poke.types.length > 1 &&
            (poke.types[0].type.name === filterTypes.find((name) => name !== 'any') ||
              poke.types[1].type.name === filterTypes.find((name) => name !== 'any'))
          );
        } else {
          console.log('mais de um tipo sem "any"')
          return (
            poke.types.length > 1 &&
            (poke.types[0].type.name === filterTypes[0] ||
              poke.types[0].type.name === filterTypes[1]) &&
            (poke.types[1].type.name === filterTypes[0] ||
              poke.types[1].type.name === filterTypes[1])
          );
        }
      }
    });
  }

  if (filterAbilities.length > 0) {
    newLista = newLista.filter((poke) => {
      if (filterAbilities.length < 2) {
        return poke.abilities.some(
          (ele) => ele.ability.name === filterAbilities[0]
        );
      } else {
        return (
          poke.abilities.length > 1 &&
          filterAbilities.every((val) =>
            poke.abilities.some((ele) => ele.ability.name === val)
          ) //   SOME É UM OU OUTRO
        );
      }
    });
  }

  if (filterMoves.length > 0) {
    newLista = newLista.filter((poke) => {
      if (filterMoves.length < 2) {
        return poke.moves.some((ele) => ele.move.name === filterMoves[0]);
      } else {
        return (
          poke.moves.length > 1 &&
          filterMoves.every((val) =>
            poke.moves.some((ele) => ele.move.name === val)
          ) //   SOME É UM OU OUTRO
        );
      }
    });
  }

  for (const [statName, statValue] of Object.entries(filterStats)) {
    // loop check for stats (MIN-MAX)
    if (statName !== undefined) {
      newLista = newLista.filter((poke) => {
        return (
          Number(poke[statName as keyof typeof poke]) >= statValue.min &&
          Number(poke[statName as keyof typeof poke]) <= statValue.max
        );
      });
    }
  }

  return newLista;
};
