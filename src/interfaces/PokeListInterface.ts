import  React  from "react";
import { Pokemon } from "../model/pokemonModel";

export interface IPokeList {
  pokemons?: Pokemon[];
  isLoading?: boolean;
  setPokemons?: React.Dispatch<React.SetStateAction<Pokemon[]>>;
}