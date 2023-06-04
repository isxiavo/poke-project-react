import React, {  FC, useState } from "react";
import "./ListSimple.css";
import PokeSimple from "./poke-simple/PokeSimple";
import { Pokemon } from "../../../../model/pokemonType";
import { usePokeList } from "../../context/PokeListContext";

interface ListSimpleProps  {
  limitList: number;
  listIndex: number;
}

export const ListSimple: FC<ListSimpleProps> = (props) => {
  const pokeCtx = usePokeList();
  const limit = props.limitList;
  const [offset, setOffset] = useState(limit);

  function morePokemons() {
    setOffset((old) => old + limit);
  }

  return (
    <div className="SimpleList">
      <ol className="OList">
        {(!pokeCtx.isLoading! && props.listIndex === 0) && pokeCtx.pokemons!.map((poke: Pokemon, index: number) => {
          if (index < offset) {
            return <PokeSimple poke={poke} key={poke.id}></PokeSimple>;
          }else {
            return null
          }
        })}
      </ol>
      <button className="LoadButton" onClick={morePokemons}>
        ▼
      </button>
    </div>
  );
}

