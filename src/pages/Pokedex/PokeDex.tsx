import React, { FC, useState, useCallback } from "react";
import "./PokeDex.css";
import { ListDetails } from "./components/list-details/ListDetails";
import { ListSimple } from "./components/list-simple/ListSimple";
import FilterBar from "../../components/filter-bar/FilterBar";

interface PokeDexProps {}

const PokeDex: FC<PokeDexProps> = (props) => {
  const [listState, setListState] = useState(1); // true simples / false detalhes

  const changeListState = useCallback(() => {
    setListState((old) => old === 1 ? 2 : 1) // muda a lista para a outra que não está ativa
  },[]);

  return (
    <div className="pokedex">
      <button onClick={() => changeListState()}>A</button>
      {listState === 0 && (
        <div className="loading">AAAAAAAAAAAAAAAAAAAAAAAAAAAA</div>
      )}  
      {listState === 1 && (
        <ListSimple limitList={50} listIndex={0} />
      )}  
      {listState === 2 && (
        <ListDetails limitList={50} listIndex={1} />
      )}     
      <FilterBar />
    </div>
  );
};

export default PokeDex;
