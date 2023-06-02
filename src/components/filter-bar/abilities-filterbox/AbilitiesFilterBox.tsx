import React, { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import './AbilitiesFilterBox.css'
import { fetchAbilities } from '../../../services/fetchAbilities.service';
import AbilityTagFilter from './abilities-tagfilter/AbilityTagFilter';


interface AbilitiesFilterBoxProps {
  abilitiesListProp: string[];
}

const AbilitiesFilterBox: FC<AbilitiesFilterBoxProps> = (props) => {

  const {data: abilitiesList, isLoading} = useQuery(['abilities'], fetchAbilities)

  function checkAbility(abilityName: string, isChecked: boolean) {
    if(isChecked) {
      props.abilitiesListProp.push(abilityName)
    }
    else {
      props.abilitiesListProp.splice(props.abilitiesListProp.indexOf(abilityName) ,1)
    }
    console.log(props.abilitiesListProp)
  }

  return (
    <div className='abilities-filterbox'>
      <h3>ABILITIES</h3>
      <input type='text' placeholder='search'/>
      <div className='abilities-container'>
        {!isLoading && abilitiesList!.map((ability,i) =>
        <AbilityTagFilter name={ability.name} placeID={i} check={checkAbility}></AbilityTagFilter>)}
      </div>
    </div>
  )
}

export default AbilitiesFilterBox;
