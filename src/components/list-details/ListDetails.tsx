import React, { useState } from "react";
import "./ListDetails.css";
import PokeDetail from "../poke-detail/PokeDetail";
import { Pokemon } from "../../model/pokemonModel";
import PokeCard from "../poke-card/poke-card";
import { sortPokemonList } from "../../services/sortPokemonList.service";
import { usePokeList } from "../../context/PokeListContext";

type Props = {
  limitList: number;
};

let currentPokeCard: Pokemon;

export default function ListDetails(props: Props) { 
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

  const setaStyle = { fontSize: ".7rem" };

  return (
    <>
      <div className="detailsList">
        <table className="tableList">
          <tr>
            <th className="thThumb"></th>
            <th>
              <button onClick={() => sortPokemonList(pokemons!, "id", morePokemons)}>
                <span>#</span>
                <span style={setaStyle}>▼</span>
              </button>
            </th>
            <th>
              <button onClick={() => sortPokemonList(pokemons!, "name", morePokemons)}>
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
              <button onClick={() => sortPokemonList(pokemons!, "hp", morePokemons)}>
                <span>HP</span>
                <span style={setaStyle}>▼</span>
              </button>
            </th>
            <th>
              <button onClick={() => sortPokemonList(pokemons!, "atk", morePokemons)}>
                <span>ATK</span>
                <span style={setaStyle}>▼</span>
              </button>
            </th>
            <th>
              <button onClick={() => sortPokemonList(pokemons!, "def", morePokemons)}>
                <span>DEF</span>
                <span style={setaStyle}>▼</span>
              </button>
            </th>
            <th>
              <button onClick={() => sortPokemonList(pokemons!, "satk", morePokemons)}>
                <span>SATK</span>
                <span style={setaStyle}>▼</span>
              </button>
            </th>
            <th>
              <button onClick={() => sortPokemonList(pokemons!, "sdef", morePokemons)}>
                <span>SDEF</span>
                <span style={setaStyle}>▼</span>
              </button>
            </th>
            <th>
              <button onClick={() => sortPokemonList(pokemons!, "spd", morePokemons)}>
                <span>SPD</span>
                <span style={setaStyle}>▼</span>
              </button>
            </th>
          </tr>
          {pokemons!.map((poke: Pokemon, index: number) => {
            if (index < offset) {
              return (
                <PokeDetail
                  data={poke}
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
