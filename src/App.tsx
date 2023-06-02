import React from "react";
//import { PokeListProvider } from "./pages/Pokedex/context/PokeListContext";
import "./App.css";
import Header from "./components/header/Header";
//import { ListSimple } from "./pages/Pokedex/components/list-simple/ListSimple";
//import { ListDetails } from "./pages/Pokedex/components/list-details/ListDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PokeDex from "./pages/Pokedex/PokeDex";
import { PokeListProvider } from "./pages/Pokedex/context/PokeListContext";



function App() {
  const qClient = new QueryClient();


  return (
    <QueryClientProvider client={qClient}>
      <div className="App">
        <button className="Filter">▼</button>
        <Header />
        <PokeListProvider>
          <PokeDex/>
        </PokeListProvider>
      </div>
    </QueryClientProvider>
  );
}

export default App;
