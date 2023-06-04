import React, { FC, useState } from "react";
import "./TypeTag.css";
import { colorsDefault } from "../../data/pokemonColors";

interface TypeTagProps {
  type: string;
  isCheck: boolean;
  func?: (checkValue: boolean, type: string) => void;
}

export const TypeTag: FC<TypeTagProps> = (props) => {
  
  const typeColorStyle = {
    backgroundColor:
      colorsDefault[props.type as keyof typeof colorsDefault] || "#000",
  };

  const [isChecked, setIsChecked] = useState(false);

  function check() {
    // send inverted value first cause States takes too long to change
    props.func!(!isChecked, props.type);
    setIsChecked((old) => !old)
  }

  if (props.isCheck) {
    return (
      <div className={isChecked ? 'typetag-checked' : 'typetag-unchecked'} style={typeColorStyle} onClick={check}>
        {props.type}
      </div>
    );
  }
  else {
    return (
      <div className={'typetag-unchecked'} style={typeColorStyle}>
        {props.type}
      </div>
    );
  }

  
}
