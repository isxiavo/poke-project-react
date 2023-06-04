import React, { FC, useState } from "react";
import "./ListDetails.css";
import PokeDetail from "./poke-detail/PokeDetail";
import { Pokemon } from "../../../../model/pokemonType";
import { sortPokemons } from "../../../../services/sortPokemonList.service";
import { usePokeList } from "../../context/PokeListContext";

type ListDetailsProps = {
  limitList: number;
  listIndex: number;
};

export const ListDetails: FC<ListDetailsProps> = (props) => { 
  const pokeCtx = usePokeList();

  const limit = props.limitList;
  const [offset, setOffset] = useState(limit);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [update, setUpdate] = useState(false);

  function morePokemons() {
    setOffset((old) => old + limit);
  }

  function updateList() {
    setUpdate((old) => !old)
  }

  const setaStyle = { fontSize: ".7rem" };

  return (
    <>
      <div className="detailsList">
        <table className="tableList">
          <tr>
            <th className="thThumb"></th>
            <th>
              <button onClick={() => sortPokemons(pokeCtx.pokemons!, "id", false, updateList)}>
                <span>#</span>
                <span style={setaStyle}>▼</span>
              </button>
            </th>
            <th>
              <button onClick={() => sortPokemons(pokeCtx.pokemons!, "name", false, updateList)}>
                <span>NAME</span>
                <span style={setaStyle}>▼</span>
              </button>
            </th>
            <th className="thType">
              <button>
                <span>TYPE</span>
                <span style={setaStyle}> </span>
              </button>
            </th>
            <th>
              <button onClick={() => sortPokemons(pokeCtx.pokemons!, "hp", true, updateList)}>
                <span>HP</span>
                <span style={setaStyle}>▼</span>
              </button>
            </th>
            <th>
              <button onClick={() => sortPokemons(pokeCtx.pokemons!, "attack", true, updateList)}>
                <span>ATK</span>
                <span style={setaStyle}>▼</span>
              </button>
            </th>
            <th>
              <button onClick={() => sortPokemons(pokeCtx.pokemons!, "defense", true, updateList)}>
                <span>DEF</span>
                <span style={setaStyle}>▼</span>
              </button>
            </th>
            <th>
              <button onClick={() => sortPokemons(pokeCtx.pokemons!, "special-attack", true, updateList)}>
                <span>SATK</span>
                <span style={setaStyle}>▼</span>
              </button>
            </th>
            <th>
              <button onClick={() => sortPokemons(pokeCtx.pokemons!, "special-defense", true, updateList)}>
                <span>SDEF</span>
                <span style={setaStyle}>▼</span>
              </button>
            </th>
            <th>
              <button onClick={() => sortPokemons(pokeCtx.pokemons!, "speed", true, updateList)}>
                <span>SPD</span>
                <span style={setaStyle}>▼</span>
              </button>
            </th>
          </tr>
          {(!pokeCtx.isLoading && props.listIndex === 1) && pokeCtx.pokemons!.map((poke: Pokemon, index: number) => {
            if (index < offset) {
              return (
                <PokeDetail
                  poke={poke}
                  placeID={index}
                  key={poke.id}
                ></PokeDetail>
              );
            } else {
              return null;
            }
          })}
        </table>
        <button className="loadButton" onClick={morePokemons}>
          ▼
        </button>
      </div>
      
    </>
  );
}
