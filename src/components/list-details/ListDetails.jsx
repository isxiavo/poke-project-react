import React, { useState } from "react";
import "./ListDetails.css";
import PokeDetail from "../poke-detail/PokeDetail";

export default function ListDetails(props) {
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
    <div className="DetailsList">
      <table className="TableList">
        <tr>
          <th>Thumb</th>
          <th>Number</th>
          <th>Name</th>
          <th>Height</th>
          <th>Weight</th>
          <th></th>
        </tr>
        {pokemonsList.map((poke, index, array) => {
          if (index < offset) {
            return <PokeDetail data={poke} key={poke.id}></PokeDetail>;
          } else {
            return null;
          }
        })}
      </table>
      <button className="LoadButton" onClick={morePokemons}>
        ▼
      </button>
    </div>
  );
}
