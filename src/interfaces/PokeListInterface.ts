import  React  from "react";
import { Pokemon } from "../model/pokemon";

export interface IPokeList {
  pokemons?: Pokemon[];
  setPokemons?: React.Dispatch<React.SetStateAction<Pokemon[]>>;
}