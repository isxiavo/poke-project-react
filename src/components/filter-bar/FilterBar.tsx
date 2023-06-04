import React, { FC, useCallback } from "react";
import "./FilterBar.css";
import { StatsFilterBox } from "./stats-filterbox/StatsFilterBox";
import { TypesFilterBox } from "./types-filterbox/TypesFilterBox";
import { MovesFilterBox } from "./moves-filterbox/MovesFilterBox";
import { Pokemon } from "../../model/pokemonType";
import { IPokeList } from "../../model/pokeListInterface";
import { usePokeList } from "../../pages/Pokedex/context/PokeListContext";
import { filterPokemons } from "../../services/filterPokemons.service";
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
  hideShow: () => void;
}

export const FilterBar: FC<FilterBarProps> = (props) => {
  const pokeCtx: IPokeList = usePokeList();

  const applyFilter = useCallback(() => {

    if (!isBaseReady) {
      // primeiro set
      pokeCtx.pokemons!.map((unit) => basePokemonList.push(unit));
      isBaseReady = true;
    }
    pokeCtx.pokemons! = filterPokemons(
      basePokemonList,
      typesList,
      abilitiesList,
      movesList,
      statsCheck
    );
    console.log(pokeCtx.pokemons);

  },[pokeCtx.pokemons])

  return (
    <div className="filterbar">
      <button className="hideButton" onClick={()=> props.hideShow}>→</button>
      <TypesFilterBox checkedTypes={typesList}></TypesFilterBox>
      <hr></hr>
      <StatsFilterBox statsCheckProp={statsCheck}></StatsFilterBox>
      <hr></hr>
      <AbilitiesFilterBox
        abilitiesListProp={abilitiesList}
      ></AbilitiesFilterBox>
      <hr></hr>
      <MovesFilterBox movesListProp={movesList} />
      <button onClick={applyFilter}>Apply</button>
    </div>
  );
};
