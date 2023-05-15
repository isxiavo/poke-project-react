import "./App.css";
import Header from "./components/header/Header";
import List from "./components/list/List";

function App() {
  return (
    <div className="App">
      <Header/>
      <section>
        <List />
      </section>
    </div>
  );
}

export default App;
