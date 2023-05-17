import React, { useState } from "react";
import "./ListDetails.css";
import PokeDetail from "../poke-detail/PokeDetail";
//import PokeUnit from "../poke-unit/PokeUnit";

export default function ListDetails(props) {
  const pokemonsList = []
  const [offset, setOffset] = useState(0);
  const limit = 20;

  function morePokemon() {
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
        {pokemonsList.map((poke, index, array) => (
          <PokeDetail data={poke} key={poke.id}></PokeDetail>
        ))}
      </table>
      <button className="LoadButton" onClick={morePokemon}>
        ▼
      </button>
    </div>
  );
}
