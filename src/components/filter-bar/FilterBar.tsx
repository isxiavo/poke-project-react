import React, { FC, useEffect } from "react";
import "./FilterBar.css";
import { usePokeList } from "../../context/PokeListContext";
import { filterPokemons } from "../../services/filterPokemons.service";
import StatsFilterBox from "./stats-filterbox/StatsFilterBox";
import TypesFilterBox from "./types-filterbox/TypesFilterBox";
import { IPokeList } from "../../interfaces/PokeListInterface";
import { Pokemon } from "../../model/pokemon";

interface FilterBarProps {}

const basePokemonList: Pokemon[] = [];
let isBaseReady = false;
const typesList: string[] = [];
const statsCheck = {
  hp: { min: 0, max: 0 },
  atk: { min: 0, max: 0 },
  def: { min: 0, max: 0 },
  satk: { min: 0, max: 0 },
  sdef: { min: 0, max: 0 },
  spd: { min: 0, max: 0 },
};

const FilterBar: FC<FilterBarProps> = () => {
  const pokeCtx: IPokeList = usePokeList();

  function applyFilter() {
    if (!isBaseReady) {
      pokeCtx.pokemons!.map((unit) => basePokemonList.push(unit));
      isBaseReady = true;
    }
    pokeCtx.setPokemons?.((old) => (old = basePokemonList));

    if (typesList.length > 0) {
      pokeCtx.setPokemons?.(
        (old) => (old = filterPokemons(basePokemonList, typesList, [], [], statsCheck))
      );
      console.log("filtrou");
    }
    console.log(basePokemonList);
    console.log(pokeCtx.pokemons);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="filterbar">
      <button className="hideButton">→</button>
      <TypesFilterBox checkedTypes={typesList}></TypesFilterBox>
      <hr></hr>
      <StatsFilterBox statsCheckProp={statsCheck}></StatsFilterBox>
      <button onClick={applyFilter}>Apply</button>
    </div>
  );
};
export default FilterBar;
