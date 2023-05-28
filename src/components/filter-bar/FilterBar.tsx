import React, { FC } from "react";
import "./FilterBar.css";
import StatsFilterBox from "./stats-filterbox/StatsFilterBox";
import TypesFilterBox from "./types-filterbox/TypesFilterBox";

interface FilterBarProps {}

const FilterBar: FC<FilterBarProps> = () => {
  const typesList: string[] = [];

  return (
    <div className="filterbar">
      <button className="hideButton">→</button>
      <TypesFilterBox checkedTypes={typesList}></TypesFilterBox>
      <hr></hr>
      <StatsFilterBox></StatsFilterBox>
      <button>Apply</button>
    </div>
  );
};
export default FilterBar;
