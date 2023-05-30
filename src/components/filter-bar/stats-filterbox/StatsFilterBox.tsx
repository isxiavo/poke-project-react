import React, { FC } from "react";
import "./StatsFilterBox.css";

interface StatsFilterBoxProps {
  statsCheckProp: {
    hp?: { min: number; max: number };
    atk?: { min: number; max: number };
    def?: { min: number; max: number };
    satk?: { min: number; max: number };
    sdef?: { min: number; max: number };
    spd?: { min: number; max: number };
  };
}
const statList: string[] = ['hp','atk','def','satk','sdef','spd']

const StatsFilterBox: FC<StatsFilterBoxProps> = (props) => {
  function updateStatsCheck(statName: string, keyName: string, value: number) {
    if (keyName === "min") {
      props.statsCheckProp[statName as keyof typeof props.statsCheckProp]!.min = value;
    }
    if (keyName === "max") {
      props.statsCheckProp[statName as keyof typeof props.statsCheckProp]!.max = value;
    }
    console.log(props.statsCheckProp)
  }

  return (
    <div className="stats-filterbox">
      <h2>STATS</h2>
        {statList.map((stat) => 
          <div className="stat">
            <label>{stat.toUpperCase()}</label>
            <input
              className="textInput"
              type="number"
              min={0}
              max={100}
              placeholder="0"
              onChange={(e)=> updateStatsCheck(stat,'min',parseInt(e.target.value))}
            />
            <input
              className="textInput"
              type="number"
              min={0}
              max={100}
              placeholder="0"
              onChange={(e)=> updateStatsCheck(stat,'max',parseInt(e.target.value))}
            />
          </div>
        )}
    </div>
  );
};

export default StatsFilterBox;
