import React, { useState } from "react";
import "./ListSimple.css";
import PokeSimple from "../poke-simple/PokeSimple";
import { Pokemon } from "../../model/pokemon";
import PokeCard from "../poke-card/poke-card";

type Props = {
  pokemonsList: Pokemon[];
  limitList: number;
}

let listReady = false;
const pokemonsList: Pokemon[] = [];
let currentPokeCard: Pokemon;

export default function ListSimple(props: Props) {
  if(!listReady) {
    props.pokemonsList.map((unit) => pokemonsList.push(unit))
    listReady = true
  }
  const limit = props.limitList;
  const [offset, setOffset] = useState(limit);
  const [cardOpen, setCardOpen] = useState(false);

  function morePokemons() {
    setOffset((old) => old + limit);
  }

  function setPokeCard(pokemon: Pokemon) {
    currentPokeCard = pokemon;
    setCardOpen((old) => (old = true));
    console.log(currentPokeCard);
  }

  function closePokeCard() {
    setCardOpen((old) => (old = false));
  }

  return (
    <div className="SimpleList">
      <ol className="OList">
        {pokemonsList.map((poke: Pokemon, index: number) => {
          if (index < offset) {
            return <PokeSimple data={poke} key={poke.id} click={()=>setPokeCard(poke)}></PokeSimple>;
          }else {
            return null
          }
        })}
      </ol>
      <button className="LoadButton" onClick={morePokemons}>
        ▼
      </button>
      {cardOpen && (
        <PokeCard
          pokemon={currentPokeCard}
          click={()=>closePokeCard()}
        ></PokeCard>
      )}
    </div>
  );
}