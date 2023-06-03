import { Pokemon } from "../model/pokemonType";

export const sortPokemons = (
  list: Pokemon[],
  key: string,
  stat: boolean,
  func: () => void
) => {
  function Sort(a: Pokemon, b: Pokemon) {
    console.log(list)
    if (stat) {
      if (      
          Number(a.stats.find((statContainer) => statContainer.stat.name === key)!.base_stat)
         <
          Number(b.stats.find((statContainer) => statContainer.stat.name === key)!.base_stat)
      ) {
        return -1;
      }
      if (
          Number(a.stats.find((statContainer) => statContainer.stat.name === key)!.base_stat)
         >
          Number(b.stats.find((statContainer) => statContainer.stat.name === key)!.base_stat)
      ) {
        return 1;
      }
    } 
    else {
      if (a[key as keyof typeof a] < b[key as keyof typeof b]) {
        return -1;
      }
      if (a[key as keyof typeof a] > b[key as keyof typeof b]) {
        return 1;
      }     
    }
    return 0;
  }
  list.sort(Sort);
  func();
};
