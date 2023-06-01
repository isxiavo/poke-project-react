import { Pokemon } from "../model/pokemonModel";

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
  lista.map((unit) => newLista.push(unit));

  // TYPES FILTER
  if (filterTypes.length > 0) { 
    newLista = newLista.filter((poke) => {
      if (filterTypes.length < 2) {
        if (filterTypes[0] === "any") {
          return lista;
        } else {
          return (
            poke.types.length < 2 && poke.types[0].type.name === filterTypes[0]
          );
        }
      } else {
        if (filterTypes.includes("any")) {
          return (
            poke.types.length > 1 &&
            (poke.types[0].type.name ===
              filterTypes.find((name) => name !== "any") ||
              poke.types[1].type.name ===
                filterTypes.find((name) => name !== "any"))
          );
        } else {
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

  // ABILITIES FILTER
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

  // MOVES FILTER
  if (filterMoves.length > 0) { 
    newLista = newLista.filter((poke) => {
      return filterMoves.every((val) =>
        poke.moves.some((ele) => ele.move.name === val)
      ); //   SOME É UM OU OUTRO
    });
  }

  // STATS FILTER
  for (const [statName, statValue] of Object.entries(filterStats)) { 
    if (statName !== undefined) {
      newLista = newLista.filter((poke) => {
        return (
          Number(poke.stats.find((statContainer) => statContainer.stat.name)?.base_stat) 
          >= statValue.min 
          &&
          Number(poke.stats.find((statContainer) => statContainer.stat.name)?.base_stat) 
          <= statValue.max
        );
      });
    }
  }

  return newLista;
};
