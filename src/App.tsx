import React, { useState } from "react";
import { PokeListProvider } from "./context/PokeListContext";
import "./App.css";
import Header from "./components/header/Header";
import ListSimple from "./components/list-simple/ListSimple";
import ListDetails from "./components/list-details/ListDetails";
import FilterBar from "./components/filter-bar/FilterBar";

// let isLoading = true;

function App() {

  const [listState, setListState] = useState(true); // true simples / false detalhes

  const changeListState = () => {
    setListState((old) => (old = !old)); // change type of list
    // if(isLoading){isLoading = false}
  }
  
  // function currentList() {
  //   if(isLoading) {
  //     return <span>LOADING.................</span>
  //   }
  //   else{
  //     return 
  //   }
  // }

  return (
    <div className="App">
      <Header />
      <button onClick={changeListState}>A</button>
      <PokeListProvider>
        <div>
          {listState ? (<ListSimple limitList={50}/>) : 
            (<ListDetails limitList={50}/>)}
        </div>
        <FilterBar></FilterBar>
      </PokeListProvider>
    </div>
    
  );
}

export default App;
