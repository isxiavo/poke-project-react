import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import ListSimple from "./components/list-simple/ListSimple";
import ListDetails from "./components/list-details/ListDetails";

function App() {
  const [listState, setListState] = useState(false) // true simples / false detalhes
  function changeList () {
    setListState((old) => old = !old)
  }

  return (
    <div className="App">
      <Header/>
      <button onClick={changeList}></button>
      <div>
        {listState ? <ListSimple /> : <ListDetails/>}
      </div>
    </div>
  );
}

export default App;