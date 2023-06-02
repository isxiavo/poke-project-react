import React, {  FC, useState } from "react";
import "./ListSimple.css";
import PokeSimple from "./poke-simple/PokeSimple";
import { Pokemon } from "../../../../model/pokemonType";
import PokeCard from "../../../../components/poke-card/poke-card";
import { usePokeList } from "../../context/PokeListContext";

interface ListSimpleProps  {
  limitList: number;
  listIndex: number;
}

let currentPokeCard: Pokemon;

export const ListSimple: FC<ListSimpleProps> = (props) => {
  const pokeCtx = usePokeList();
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
        {(!pokeCtx.isLoading! && props.listIndex === 0) && pokeCtx.pokemons!.map((poke: Pokemon, index: number) => {
          if (index < offset) {
            return <PokeSimple poke={poke} key={poke.id} click={()=>setPokeCard(poke)}></PokeSimple>;
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