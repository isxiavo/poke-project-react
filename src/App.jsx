import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import ListSimple from "./components/list-simple/ListSimple";
import ListDetails from "./components/list-details/ListDetails";

let isLoading = true;

function App() {
  const [listState, setListState] = useState(true); // true simples / false detalhes
  const [pokemons, setPokemons] = useState([])
  const limit = 1000;
  const offset = 0;
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;


  function changeList() {
    setListState((old) => (old = !old));
  }

  function loadList() {
    if(isLoading) {
      return <span>LOADING.................</span>
    }
    else{
      return listState ? (<ListSimple pokemonsList={pokemons} limitList={10}/>) : 
      (<ListDetails pokemonsList={pokemons} limitList={10}/>)
    }
  }

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
    .then((pokemonsDetails) =>
      pokemonsDetails.map((unit) => setPokemons((old) => [...old, unit]))
    )
    .then(isLoading = false)
    .catch((error) => console.log(error))
  },[url])

  return (
    <div className="App">
      <Header />
      <button onClick={changeList}></button>
      <div>
        {loadList()}
      </div>
    </div>
  );
}

export default App;
