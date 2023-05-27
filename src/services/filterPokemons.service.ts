import { Pokemon } from "../model/pokemon";

type Stats = {
  hp?: {min: number, max: number},
  atk?: {min: number, max: number},
  def?: {min: number, max: number},
  satk?: {min: number, max: number},
  sdef?: {min: number, max: number},
  spd?: {min: number, max: number}
}

export const filterPokemons = (lista: Pokemon[], types: string[], stats: Stats) => {
  let newLista: Pokemon[] = lista;

  if (types.length > 0) {

     newLista = lista.filter((poke) => {
      
      if (types.length < 2) {
        return (
          poke.types[0].type.name === types[0]
        );
      }
      else {
        return (
          poke.types.length > 1
          &&
          (poke.types[0].type.name === types[0] || poke.types[0].type.name === types[1])
          &&
          (poke.types[1].type.name === types[0] || poke.types[1].type.name === types[1])
        )
      }

    });

  }

  

  return newLista;
};
