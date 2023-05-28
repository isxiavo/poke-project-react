import React, { FC } from 'react';
import './StatsFilterBox.css'


interface StatsFilterBoxProps {}

const StatsFilterBox: FC<StatsFilterBoxProps> = () => (
  <div className="stats-filterbox">
      <h2>STATS</h2>
      <div className='stat'>
        <label>HP</label>
        <input className='textInput' type='number' min={0} max={100} placeholder='MIN'/>
        <input className='textInput' type='number' min={0} max={100} placeholder='MAX'/>
      </div>
      <div className='stat'>
        <label>ATK</label>
        <input className='textInput' type='number' min={0} max={100} placeholder='MIN'/>
        <input className='textInput' type='number' min={0} max={100} placeholder='MAX'/>
      </div>
      <div className='stat'>
        <label>DEF</label>
        <input className='textInput' type='number' min={0} max={100} placeholder='MIN'/>
        <input className='textInput' type='number' min={0} max={100} placeholder='MAX'/>
      </div>
      <div className='stat'>
        <label>SATK</label>
        <input className='textInput' type='number' min={0} max={100} placeholder='MIN'/>
        <input className='textInput' type='number' min={0} max={100} placeholder='MAX'/>
      </div>
      <div className='stat'>
        <label>SATK</label>
        <input className='textInput' type='number' min={0} max={100} placeholder='MIN'/>
        <input className='textInput' type='number' min={0} max={100} placeholder='MAX'/>
      </div>
      <div className='stat'>
        <label>SPD</label>
        <input className='textInput' type='number' min={0} max={100} placeholder='MIN'/>
        <input className='textInput' type='number' min={0} max={100} placeholder='MAX'/>
      </div>
    </div>
);

export default StatsFilterBox;
