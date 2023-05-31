import React, { FC } from "react";
import "./AbilityTagFilter.css";

interface AbilityTagFilterProps {
  placeID: number;
  name: string;
  check: (name: string, isChecked: boolean) => void;
}

const lightStyle = { backgroundColor: "lightGray" };
const darkStyle = { backgroundColor: "gray", color: "white" };

const AbilityTagFilter: FC<AbilityTagFilterProps> = (props) => (
  <div
    className="ability-tagfilter"
    style={props.placeID % 2 === 0 ? lightStyle : darkStyle}
  >
    <label>
      <input
        className="ability-checkbox"
        type="checkbox"
        onChange={(e) => props.check(props.name, e.target.checked)}
        />
      {` ${props.name}`}
    </label>
  </div>
);

export default AbilityTagFilter;