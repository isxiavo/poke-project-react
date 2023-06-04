import React, { FC, useMemo } from "react";
import "./TypesFilterBox.css";
import { TypeTag } from "../../type-tag/TypeTag";

interface TypesFilterBoxProps {
  checkedTypes: string[];
}

export const pokeTypes: string[] = [
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

export const TypesFilterBox: FC<TypesFilterBoxProps> = (props) => {
  function setFilterTypes(isChecked: boolean, type: string) {
    if (isChecked) {
      props.checkedTypes.push(type);
      console.log("adicionou");
    } else {
      const i = props.checkedTypes.indexOf(type);
      props.checkedTypes.splice(i, 1);
      console.log("removeu");
    }

    if (props.checkedTypes.length > 1) {
    }

    console.log(props.checkedTypes);
  }

  const MemoTypeTag = useMemo(()=>TypeTag,[]);

  return (
    <div className="types-filterbox">
      <h3>TYPE</h3>
      <div className="types-grid">
        {pokeTypes.map((ele) => {
          return (
            <MemoTypeTag
              type={ele}
              isCheck={true}
              func={setFilterTypes}
            />
          );
        })}
      </div>
    </div>
  );
};
