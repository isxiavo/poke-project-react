import React, { useState } from "react";
import "./ListSimple.css";
import PokeSimple from "../poke-simple/PokeSimple";
import { Pokemon } from "../../model/pokemon";

type Props = {
  pokemonsList: Pokemon[];
  limitList: number;
}

export default function ListSimple(props: Props) {
  const pokemonsList = props.pokemonsList;
  const limit = props.limitList;
  const [offset, setOffset] = useState(limit);

  /*function idSort(a, b) {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  }
  pokemons.sort(idSort);
  */

  function morePokemons() {
    setOffset((old) => old + limit);
  }

  return (
    <div className="SimpleList">
      <ol className="OList">
        {pokemonsList.map((poke: Pokemon, index: number) => {
          if (index < offset) {
            return <PokeSimple data={poke} key={poke.id}></PokeSimple>;
          }else {
            return null
          }
        })}
      </ol>
      <button className="LoadButton" onClick={morePokemons}>
        ▼
      </button>
    </div>
  );
}