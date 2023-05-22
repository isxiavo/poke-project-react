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
    <div className="detailsList">
      <table className="tableList">
        <tr>
          <th></th>
          <th><button>Number</button></th>
          <th><button>Name</button></th>
          <th><button>Height</button></th>
          <th><button>Weight</button></th>
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
      <button className="loadButton" onClick={morePokemons}>
        ▼
      </button>
    </div>
  );
}
