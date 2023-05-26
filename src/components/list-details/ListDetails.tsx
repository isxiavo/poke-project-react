import React, { useState } from "react";
import "./ListDetails.css";
import PokeDetail from "../poke-detail/PokeDetail";
import { Pokemon } from "../../model/pokemon";

type Props = {
  pokemonsList: Pokemon[];
  limitList: number;
}

export default function ListDetails(props: Props) {
  const pokemonsList = props.pokemonsList;
  const limit = props.limitList;
  const [offset, setOffset] = useState(limit);
  
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

  return (
    <div className="detailsList">
      <table className="tableList">
        <tr>
          <th></th>
          <th><button onClick={() => SortPokemons('id')}>#</button></th>
          <th><button onClick={() => SortPokemons('name')}>Name</button></th>
          <th><button >Type</button></th>
          <th><button onClick={() => SortPokemons('hp')}>HP</button></th>
          <th><button onClick={() => SortPokemons('atk')}>ATK</button></th>
          <th><button onClick={() => SortPokemons('def')}>DEF</button></th>
          <th><button onClick={() => SortPokemons('satk')}>S.ATK</button></th>
          <th><button onClick={() => SortPokemons('sdef')}>S.DEF</button></th>
          <th><button onClick={() => SortPokemons('spd')}>SPD</button></th>
          <th></th>
        </tr>
        {pokemonsList.map((poke: Pokemon, index: number) => {
          if (index < offset) {
            return <PokeDetail data={poke} key={poke.id}></PokeDetail>;
          } else {
            return null;
          }
        })}
      </table>
      <button className="loadButton" onClick={morePokemons}>
        ▼
      </button>
    </div>
  );
}
