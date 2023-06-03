import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PageContent from "./components/page-content/PageContent";



function App() {
  const qClient = new QueryClient();


  return (
    <QueryClientProvider client={qClient}>
      <div className="App">
        <button className="Filter">▼</button>
        <Header />
        <PageContent/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
