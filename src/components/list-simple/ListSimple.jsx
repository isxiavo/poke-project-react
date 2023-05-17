import React, { useState, useEffect } from "react";
import "./ListSimple.css";
import PokeSimple from "../poke-simple/PokeSimple";

const delay = () => new Promise(
  resolve => setTimeout(resolve, 1000)
);

export default function ListSimple(props) {
  const [offset, setOffset] = useState(10);
  const pokemonsList = props.pokemonsList;
  const limit = props.limitList;

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
        {pokemonsList.map((poke, index, array) => {
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