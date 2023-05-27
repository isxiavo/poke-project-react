import React, { useState } from "react";
import "./ListDetails.css";
import PokeDetail from "../poke-detail/PokeDetail";
import { Pokemon } from "../../model/pokemon";
import PokeCard from "../poke-card/poke-card";

type Props = {
  pokemonsList: Pokemon[];
  limitList: number;
}

let currentPokeCard: Pokemon;

export default function ListDetails(props: Props) {
  const pokemonsList = props.pokemonsList;
  const limit = props.limitList;
  const [offset, setOffset] = useState(limit);
  const [cardOpen, setCardOpen] = useState(false);
  
  function SortPokemons(key: string) {

    function Sort(a: any, b: any) {
      if (a[key as keyof typeof a] < b[key as keyof typeof b]) {
        return -1;
      }
      if (a[key as keyof typeof a] > b[key as keyof typeof b]) {
        return 1;
      }
      return 0;
    }
    pokemonsList.sort(Sort);
    morePokemons();
  }  

  function morePokemons() {
    setOffset((old) => old + limit);
  }

  function setPokeCard(pokemon: Pokemon) {
    currentPokeCard = pokemon
    setCardOpen((old) => old = true);
    console.log(currentPokeCard)
  }

  function closePokeCard () {
    setCardOpen((old) => old = false);
  }

  const setaStyle = {'fontSize': '.7rem'}

  return (
    <>
      {cardOpen && <PokeCard pokemon={currentPokeCard} click={()=>closePokeCard()}></PokeCard>}
      <div className="detailsList">
        <table className="tableList">
          <tr>
            <th className="thThumb"></th>
            <th>
              <button onClick={() => SortPokemons('id')}>
                <span>#</span>
                <span style={setaStyle}>▼</span>
              </button>
            </th>
            <th>
              <button onClick={() => SortPokemons('name')}>
                <span>NAME</span>
                <span style={setaStyle}>▼</span>
              </button>
            </th>
            <th className="thType">
              <button >
                <span>TYPE</span>
                <span style={setaStyle}> </span>
              </button>
            </th>
            <th>
              <button onClick={() => SortPokemons('hp')}>
                <span>HP</span>
                <span style={setaStyle}>▼</span>
              </button>
            </th>
            <th>
              <button onClick={() => SortPokemons('atk')}>
                <span>ATK</span>
                <span style={setaStyle}>▼</span>
              </button>
            </th>
            <th>
              <button onClick={() => SortPokemons('def')}>
                <span>DEF</span>
                <span style={setaStyle}>▼</span>
              </button>
            </th>
            <th>
              <button onClick={() => SortPokemons('satk')}>
                <span>SATK</span>
                <span style={setaStyle}>▼</span>
              </button>
            </th>
            <th>
              <button onClick={() => SortPokemons('sdef')}>
                <span>SDEF</span>
                <span style={setaStyle}>▼</span>
              </button>
            </th>
            <th>
              <button onClick={() => SortPokemons('spd')}>
                <span>SPD</span>
                <span style={setaStyle}>▼</span>
              </button>
            </th>
          </tr>
          {pokemonsList.map((poke: Pokemon, index: number) => {
            if (index < offset) {
              return <PokeDetail data={poke} key={poke.id} click={()=>setPokeCard(poke)}></PokeDetail>;
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
