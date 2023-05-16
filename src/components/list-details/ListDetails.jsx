import React, { useEffect, useState } from "react";
import "./ListDetails.css";
import PokeDetail from "../poke-detail/PokeDetail";
//import PokeUnit from "../poke-unit/PokeUnit";

export default function ListDetails(props) {
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
  
  function morePokemon () {
    setOffset((old) => old + limit)
  }

  return (
    <div  className="DetailsList">
      <ol className="OList">
        {pokemons.map((poke, index, array) => (
          <PokeDetail data={poke} key={poke.id}></PokeDetail>
        ))}
      </ol>
      <button className="LoadButton" onClick={morePokemon}>▼</button>
    </div>
  );
}
