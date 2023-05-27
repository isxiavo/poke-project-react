import { Pokemon } from "../model/pokemon";

export const sortPokemonList = (list: Pokemon[], key: string, func:()=>void) => {
  function Sort(a: any, b: any) {
    if (a[key as keyof typeof a] < b[key as keyof typeof b]) {
      return -1;
    }
    if (a[key as keyof typeof a] > b[key as keyof typeof b]) {
      return 1;
    }
    return 0;
  }
  list.sort(Sort);
  func()
};
