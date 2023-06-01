import React, {  FC, useEffect, useState } from "react";
import "./ListSimple.css";
import PokeSimple from "../poke-simple/PokeSimple";
import { Pokemon } from "../../model/pokemonModel";
import PokeCard from "../poke-card/poke-card";
import { usePokeList } from "../../context/PokeListContext";
import { IPokeList } from "../../interfaces/PokeListInterface";
import FilterBar from "../filter-bar/FilterBar";

interface ListSimpleProps  {
  limitList: number;
}

let currentPokeCard: Pokemon;

export const ListSimple: FC<ListSimpleProps> = (props) => {
  const pokeCtx: IPokeList = usePokeList();
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
      <FilterBar func={morePokemons}></FilterBar>
      <ol className="OList">
        {!pokeCtx.isLoading! && pokeCtx.pokemons!.map((poke: Pokemon, index: number) => {
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