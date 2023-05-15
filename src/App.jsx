import "./App.css";
import Header from "./components/header/Header";
import List from "./components/list/List";

function App() {

  return (
    <div className="App">
      <Header/>
      <div>
        <List />
      </div>
    </div>
  );
}

export default App;