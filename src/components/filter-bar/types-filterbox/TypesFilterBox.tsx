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
    } else {
      const i = props.checkedTypes.indexOf(type);
      props.checkedTypes.splice(i, 1);
    }

    if(props.checkedTypes.length > 1) {
      setTagsAvai(false)
    }

    console.log(props.checkedTypes);
  }

  function setTagsAvai(value: boolean) {
    if(!value) {

    }
    else{
      
    }
  }

  return (
    <div className="types-filterbox">
      <h2>TYPE</h2>
      <div className="types-grid">
        {typetagsList}
      </div>
    </div>
  );
};

export default TypesFilterBox;
