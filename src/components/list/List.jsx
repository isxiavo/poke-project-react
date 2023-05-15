import React, { useEffect, useState } from "react";
import "./List.css";
import PokeUnit from "../poke-unit/PokeUnit";

export default function List(props) {
  const [offset, setOffset] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const limit = 20;
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((jsonBody) => jsonBody.results)
      .then((pokemonList) =>
        pokemonList.map((pokemon) =>
          fetch(pokemon.url).then((response) => response.json())
        )
      )
      .then((data) => Promise.all(data))
      .then((pokemonsDetails) => pokemonsDetails.map((unit) => setPokemons((old) => [...old, unit])))
      .catch((error) => console.log(error));
  },[url]);

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
  
  function morePokemon () {
    setOffset((old) => old + 20)
  }

  return (
    <div  className="SimpleList">
      <ol className="OList">
        {pokemons.map((poke, index, array) => (
          <PokeUnit data={poke} key={poke.id}></PokeUnit>
        ))}
      </ol>
      <button className="LoadButton" onClick={morePokemon}>▼</button>
    </div>
  );
}
