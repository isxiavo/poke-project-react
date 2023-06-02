import  React  from "react";
import { Pokemon } from "./pokemonType";

export interface IPokeList {
  pokemons?: Pokemon[];
  isLoading?: boolean;
  setPokemons?: React.Dispatch<React.SetStateAction<Pokemon[]>>;
}