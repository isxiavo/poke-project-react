import React from "react";
import './Header.css'

function Header() {

  return (
    <div>
      <header className="Header">
        <span className="Return">←</span>
        <h2 className="Title">Pokedex</h2>
        <div className="Filter">▼</div>
      </header>
    </div>
  );
}

export default Header;
