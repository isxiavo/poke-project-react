import React, { FC } from "react";
import "./Header.css";

// function Header() {

//   return (
//     <div>
//       <header className="Header">
//         <span className="Return">←</span>
//         <h2 className="Title">Pokedex</h2>
//         <div className="Filter">▼</div>
//       </header>
//     </div>
//   );
// }

interface HeaderProps {
  
}

const Header: FC<HeaderProps> = (props) => {
  return (
    <div>
      <header className="Header">
        <span className="Return">←</span>
        <h2 className="Title">Pokedex</h2>
      </header>
    </div>
  );
};

export default Header;
