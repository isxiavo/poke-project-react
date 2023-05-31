import React, { FC } from "react";
import "./MoveTagFilter.css";

interface MoveTagFilterProps {
  placeID: number;
  name: string;
  check: (name: string, isChecked: boolean) => void;
}

const lightStyle = { backgroundColor: "lightGray" };
const darkStyle = { backgroundColor: "gray", color: "white" };

const MoveTagFilter: FC<MoveTagFilterProps> = (props) => (
  <div
    className="move-tagfilter"
    style={props.placeID % 2 === 0 ? lightStyle : darkStyle}
  >
    <label>
      <input
        className="move-checkbox"
        type="checkbox"
        onChange={(e) => props.check(props.name, e.target.checked)}
        />
      {` ${props.name}`}
    </label>
  </div>
);

export default MoveTagFilter;