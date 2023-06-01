import React, { useState } from "react";
import "./ListDetails.css";
import PokeDetail from "../poke-detail/PokeDetail";
import { Pokemon } from "../../model/pokemonModel";
import PokeCard from "../poke-card/poke-card";
import { sortPokemonList } from "../../services/sortPokemonList.service";
import { usePokeList } from "../../context/PokeListContext";
import { IPokeList } from "../../interfaces/PokeListInterface";
import FilterBar from "../filter-bar/FilterBar";

type Props = {
  limitList: number;
};

let currentPokeCard: Pokemon;

export default function ListDetails(props: Props) { 
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

  const setaStyle = { fontSize: ".7rem" };

  return (
    <>
      <div className="detailsList">
        <FilterBar func={morePokemons}></FilterBar>
        <table className="tableList">
          <tr>
            <th className="thThumb"></th>
            <th>
              <button onClick={() => sortPokemonList(pokeCtx.pokemons!, "id", morePokemons)}>
                <span>#</span>
                <span style={setaStyle}>▼</span>
              </button>
            </th>
            <th>
              <button onClick={() => sortPokemonList(pokeCtx.pokemons!, "name", morePokemons)}>
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
              <button onClick={() => sortPokemonList(pokeCtx.pokemons!, "hp", morePokemons)}>
                <span>HP</span>
                <span style={setaStyle}>▼</span>
              </button>
            </th>
            <th>
              <button onClick={() => sortPokemonList(pokeCtx.pokemons!, "atk", morePokemons)}>
                <span>ATK</span>
                <span style={setaStyle}>▼</span>
              </button>
            </th>
            <th>
              <button onClick={() => sortPokemonList(pokeCtx.pokemons!, "def", morePokemons)}>
                <span>DEF</span>
                <span style={setaStyle}>▼</span>
              </button>
            </th>
            <th>
              <button onClick={() => sortPokemonList(pokeCtx.pokemons!, "satk", morePokemons)}>
                <span>SATK</span>
                <span style={setaStyle}>▼</span>
              </button>
            </th>
            <th>
              <button onClick={() => sortPokemonList(pokeCtx.pokemons!, "sdef", morePokemons)}>
                <span>SDEF</span>
                <span style={setaStyle}>▼</span>
              </button>
            </th>
            <th>
              <button onClick={() => sortPokemonList(pokeCtx.pokemons!, "spd", morePokemons)}>
                <span>SPD</span>
                <span style={setaStyle}>▼</span>
              </button>
            </th>
          </tr>
          {!pokeCtx.isLoading && pokeCtx.pokemons!.map((poke: Pokemon, index: number) => {
            if (index < offset) {
              return (
                <PokeDetail
                  poke={poke}
                  placeID={index}
                  key={poke.id}
                  click={() => setPokeCard(poke)}
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
      {cardOpen && (
        <PokeCard
          pokemon={currentPokeCard}
          click={() => closePokeCard()}
        ></PokeCard>
      )}
    </>
  );
}
