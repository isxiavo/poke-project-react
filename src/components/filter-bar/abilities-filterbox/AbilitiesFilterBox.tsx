import React, { FC, useState, useEffect } from 'react';
import './AbilitiesFilterBox.css'
import { fetchAbilities } from '../../../services/fetchAbilities.service';
import { Ability } from '../../../model/AbilityModel ';
import AbilityTagFilter from './abilities-tagfilter/AbilityTagFilter';


interface AbilitiesFilterBoxProps {
  abilitiesListProp: string[];
}

const AbilitiesFilterBox: FC<AbilitiesFilterBoxProps> = (props) => {

  const [abilitiesList, setAbilitiesList] = useState<Ability[]>([])
  const [abilitiesListReady, setAbilitiesListReady] = useState(false);

  function isAbilitiesListReady() {
    setAbilitiesListReady((old) => old = !old)
  }

  function checkAbility(abilityName: string, isChecked: boolean) {
    if(isChecked) {
      props.abilitiesListProp.push(abilityName)
    }
    else {
      props.abilitiesListProp.splice(props.abilitiesListProp.indexOf(abilityName) ,1)
    }
    console.log(props.abilitiesListProp)
  }

  useEffect(() => {
    setAbilitiesList(() => fetchAbilities(isAbilitiesListReady))
  },[])

  return (
    <div className='abilities-filterbox'>
      <h3>ABILITIES</h3>
      <input type='text' placeholder='search'/>
      <div className='abilities-container'>
        {abilitiesListReady && abilitiesList.map((ability,i) =>
        <AbilityTagFilter name={ability.name} placeID={i} check={checkAbility}></AbilityTagFilter>)}
      </div>
    </div>
  )
}

export default AbilitiesFilterBox;
