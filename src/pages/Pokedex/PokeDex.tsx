import React, { FC, useState, useCallback } from "react";
import "./PokeDex.css";
import { ListDetails } from "./components/list-details/ListDetails";
import { ListSimple } from "./components/list-simple/ListSimple";
import { FilterBar } from "../../components/filter-bar/FilterBar";

interface PokeDexProps {}

const PokeDex: FC<PokeDexProps> = (props) => {
  const [listState, setListState] = useState(1); // true simples / false detalhes
  const [showFilterbar, setShowFilterBar] = useState(false)

  const changeListState = useCallback(() => {
    setListState((old) => old === 1 ? 2 : 1) // muda a lista para a outra que não está ativa
  },[]);
  
  const changeFilterBarState = useCallback(() => {
    setShowFilterBar(old => old = !old)
    console.log('alterou')
  },[])

  const MemoListSimple = useCallback(ListSimple, [])
  const MemoListDetails = useCallback(ListDetails, [])
  const MemoFilterBar = useCallback(FilterBar, [])

  return (
    <div className="pokedex">
      <button onClick={() => changeListState()}>A</button>
      {listState === 0 && (
        <div className="loading">AAAAAAAAAAAAAAAAAAAAAAAAAAAA</div>
      )}  
      {listState === 1 && (
        <MemoListSimple limitList={50} listIndex={0}></MemoListSimple>
      )}  
      {listState === 2 && (
        <MemoListDetails limitList={50} listIndex={1}></MemoListDetails>
      )}
      {showFilterbar && 
        <MemoFilterBar 
          hideShow={changeFilterBarState}
        />
      }
      <button onClick={changeFilterBarState}>B</button>
    </div>
  );
};

export default PokeDex;
