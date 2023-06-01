import React, { useState } from "react";
import { PokeListProvider } from "./context/PokeListContext";
import "./App.css";
import Header from "./components/header/Header";
import { ListSimple } from "./components/list-simple/ListSimple";
import ListDetails from "./components/list-details/ListDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const qClient = new QueryClient();
  const [listState, setListState] = useState(true); // true simples / false detalhes

  const changeListState = () => {
    setListState((old) => (old = !old)); // change type of list
  };

  return (
    <QueryClientProvider client={qClient}>
      <div className="App">
        <button className="Filter">▼</button>
        <Header />
        <button onClick={changeListState}>A</button>
        <PokeListProvider>
          <div>
            {listState ? (
              <ListSimple limitList={50}></ListSimple>
            ) : (
              <ListDetails limitList={50}></ListDetails>
            )}
          </div>
        </PokeListProvider>
      </div>
    </QueryClientProvider>
  );
}

export default App;
