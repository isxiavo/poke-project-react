import React, { useState } from "react";
import "./ListSimple.css";
import PokeSimple from "../poke-simple/PokeSimple";
import { Pokemon } from "../../model/pokemon";
import PokeCard from "../poke-card/poke-card";
import { usePokeList } from "../../context/PokeListContext";

interface Props  {
  limitList: number;
}

let currentPokeCard: Pokemon;

export default function ListSimple(props: Props) {
  const {pokemons} = usePokeList();
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
        {pokemons!.map((poke: Pokemon, index: number) => {
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