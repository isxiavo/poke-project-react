import React, { useEffect, useState } from "react";
import "./List.css";
import PokeUnit from "../poke-unit/PokeUnit";

export default function List() {
  
  const [offset, setOffset] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const limit = 20;
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((jsonBody) => jsonBody.results)
      .then((pokemonList) =>
        pokemonList.map((pokeRaw, index, array) =>
          fetch(pokeRaw.url)
            .then((response) => response.json())
            .then((data) => {
              setPokemons((old) => [...old, data]);
            })
            .catch((error) => console.log(error))
        )
      )
      .catch((error) => console.log(error))
  },[url]);

  function idSort( a, b ) {
    if ( a.id < b.id ){
      return -1;
    }
    if ( a.id > b.id ){
      return 1;
    }
    return 0;
  }
  
  pokemons.sort(idSort)
  //console.log(pokemons)

  return (
    <ol className="OList">
      {pokemons.length > 0 && pokemons.map((poke, index, array) => (
        <PokeUnit data={poke} key={poke.id}></PokeUnit>
      ))}
      <button onClick={() => setOffset(() => offset + 20)}></button>
    </ol>
  );
}
