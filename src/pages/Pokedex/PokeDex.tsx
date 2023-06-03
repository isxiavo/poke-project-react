import React, { FC, useState } from "react";
import "./PokeDex.css";
import { ListDetails } from "./components/list-details/ListDetails";
import { ListSimple } from "./components/list-simple/ListSimple";
import { FilterBar } from "../../components/filter-bar/FilterBar";

interface PokeDexProps {}

const PokeDex: FC<PokeDexProps> = (props) => {
  const [listState, setListState] = useState(1); // true simples / false detalhes
  const [showFilterbar, setShowFilterBar] = useState(false)

  const changeListState = (altering?: boolean) => {
    const currentListState: number = listState;
    if(altering) {
      setListState(() => 0) // set loading state
      setTimeout(() => {setListState(() => currentListState)}, 1000) // re-set current lista state
    }
    else{
      setListState((old) => old === 1 ? 2 : 1) // muda a lista para a outra que não está ativa
    }
    
  };
  const changeFilterBarState = () => {
    setShowFilterBar(old => old = !old)
    console.log('alterou')
  }

  return (
    <div className="pokedex">
      <button onClick={() => changeListState(false)}>A</button>
      {listState === 0 && (
        <div className="loading">AAAAAAAAAAAAAAAAAAAAAAAAAAAA</div>
      )}  
      {listState === 1 && (
        <ListSimple limitList={50} listIndex={0}></ListSimple>
      )}  
      {listState === 2 && (
        <ListDetails limitList={50} listIndex={1}></ListDetails>
      )}
      {showFilterbar && 
        <FilterBar 
          applyFilter={() => changeListState(true)}
          hideShow={changeFilterBarState}
        />
      }
      <button onClick={changeFilterBarState}>B</button>
    </div>
  );
};

export default PokeDex;
