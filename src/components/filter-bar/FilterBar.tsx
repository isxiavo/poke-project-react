import React, { FC } from "react";
import "./FilterBar.css";
import { usePokeList } from "../../context/PokeListContext";
import { filterPokemons } from "../../services/filterPokemons.service";
import StatsFilterBox from "./stats-filterbox/StatsFilterBox";
import TypesFilterBox from "./types-filterbox/TypesFilterBox";
import MovesFilterBox from "./moves-filterbox/MovesFilterBox";
import { IPokeList } from "../../interfaces/PokeListInterface";
import { Pokemon } from "../../model/pokemonModel";
import AbilitiesFilterBox from "./abilities-filterbox/AbilitiesFilterBox";

interface FilterBarProps {
  func: () => void;
}

let isBaseReady = false;
const basePokemonList: Pokemon[] = [];
const typesList: string[] = [];
const abilitiesList: string[] = [];
const movesList: string[] = [];
const statsCheck = {
  hp: { min: 0, max: 0 },
  atk: { min: 0, max: 0 },
  def: { min: 0, max: 0 },
  satk: { min: 0, max: 0 },
  sdef: { min: 0, max: 0 },
  spd: { min: 0, max: 0 },
};

const FilterBar: FC<FilterBarProps> = (props) => {
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
export default FilterBar;
