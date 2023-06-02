import React, { FC } from "react";
import "./FilterBar.css";
import { usePokeList } from "../../pages/Pokedex/context/PokeListContext";
import { filterPokemons } from "../../services/filterPokemons.service";
import StatsFilterBox from "./stats-filterbox/StatsFilterBox";
import TypesFilterBox from "./types-filterbox/TypesFilterBox";
import MovesFilterBox from "./moves-filterbox/MovesFilterBox";
import { IPokeList } from "../../model/pokeListInterface";
import { Pokemon } from "../../model/pokemonType";
import AbilitiesFilterBox from "./abilities-filterbox/AbilitiesFilterBox";



let isBaseReady = false;
const basePokemonList: Pokemon[] = [];
const typesList: string[] = [];
const abilitiesList: string[] = [];
const movesList: string[] = [];
const statsCheck = {
  hp: { min: 0, max: 9999 },
  atk: { min: 0, max: 9999 },
  def: { min: 0, max: 9999 },
  satk: { min: 0, max: 9999 },
  sdef: { min: 0, max: 9999 },
  spd: { min: 0, max: 9999 },
};

interface FilterBarProps {
  func: () => void;
}

export const FilterBar: FC<FilterBarProps> = (props) => {
  const pokeCtx: IPokeList = usePokeList();

  function applyFilter() {
    if (!isBaseReady) { // primeiro set
      pokeCtx.pokemons!.map((unit) => basePokemonList.push(unit));
      isBaseReady = true;
    }

    pokeCtx.pokemons! = filterPokemons(basePokemonList, typesList, abilitiesList, movesList, statsCheck)
    console.log(pokeCtx.pokemons)
    props.func()
  }

  return (
    <div className='filterbar'>
      <button className="hideButton" style={{'marginRight': 'auto'}}>→</button>
      <TypesFilterBox checkedTypes={typesList}></TypesFilterBox>
      <hr></hr>
      <StatsFilterBox statsCheckProp={statsCheck}></StatsFilterBox>
      <hr></hr>
      <AbilitiesFilterBox abilitiesListProp={abilitiesList}></AbilitiesFilterBox>
      <hr></hr>
      <MovesFilterBox movesListProp={movesList}/>
      <button onClick={applyFilter}>Apply</button>
    </div>
  );
};