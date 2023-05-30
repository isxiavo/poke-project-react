import React, { useState, useEffect } from "react";
import "./TypeTag.css";
import { colorsDefault } from "../../data/pokemonColors";

interface Props {
  type: string;
  isCheck: boolean;
  func?: (checkValue: boolean, type: string) => void;
}

export default function TypeTag(props: Props) {
  
  const typeColorStyle = {
    backgroundColor:
      colorsDefault[props.type as keyof typeof colorsDefault] || "#000",
  };

  const [isChecked, setIsChecked] = useState(false);
  const [className, setClassName] = useState("");

  function check() {
    setIsChecked((old) => old = !isChecked)
  }

  useEffect(() => {
    setClassName((old) => old = isChecked ? "typetag-checked" : "typetag-unchecked")
    props.func?.(isChecked, props.type);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isChecked])

  if (props.isCheck) {
    return (
      <div className={className} style={typeColorStyle} onClick={check}>
        {props.type}
      </div>
    );
  }
  else {
    return (
      <div className={className} style={typeColorStyle}>
        {props.type}
      </div>
    );
  }

  
}
