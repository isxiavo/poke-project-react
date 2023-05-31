import React, { FC } from "react";
import "./TypesFilterBox.css";
import TypeTag from "../../type-tag/TypeTag";

interface TypesFilterBoxProps {
  checkedTypes: string[];
}

const pokeTypes: string[] = [
  "normal",
  "fire",
  "water",
  "grass",
  "electric",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dark",
  "dragon",
  "steel",
  "fairy",
  "any",
];

const TypesFilterBox: FC<TypesFilterBoxProps> = (props) => {
  const typetagsList: any = pokeTypes.map((ele, index, arr) => {
    return (
      <TypeTag
        type={pokeTypes[index]}
        isCheck={true}
        func={setFilterTypes}
      ></TypeTag>
    );
  });

  function setFilterTypes(isChecked: boolean, type: string) {
    if (isChecked) {
      props.checkedTypes.push(type);
      console.log('adicionou')
    } else {
      const i = props.checkedTypes.indexOf(type);
      props.checkedTypes.splice(i, 1);
      console.log('removeu')
    }

    if(props.checkedTypes.length > 1) {
      
    }

    console.log(props.checkedTypes)
  }

  return (
    <div className="types-filterbox">
      <h3>TYPE</h3>
      <div className="types-grid">
        {typetagsList}
      </div>
    </div>
  );
};

export default TypesFilterBox;
