import React, { FC } from 'react';
import './MovesFilterBox.css';
import { useQuery } from '@tanstack/react-query'
import { fetchMoves } from '../../../services/fetchMoves.service';
import MoveTagFilter from './move-tagfilter/MoveTagFilter';

interface MovesFilterBoxProps {
  movesListProp: string[];
}

const MovesFilterBox: FC<MovesFilterBoxProps> = (props) => {

  const {data: movesList, isLoading} = useQuery(['moves'], fetchMoves)

  function checkMove(moveName: string, isChecked: boolean) {
    if(isChecked) {
      props.movesListProp.push(moveName)
    }
    else {
      props.movesListProp.splice(props.movesListProp.indexOf(moveName) ,1)
    }
    console.log(props.movesListProp)
  }

  return(
    <div className='moves-filterbox'>
      <h3>MOVES</h3>
      <input type='text' placeholder='search'/>
      <div className='moves-container'>
        {!isLoading && movesList!.map((move,i) =>
        <MoveTagFilter name={move.name} placeID={i} check={checkMove}></MoveTagFilter>)}
      </div>
    </div>
  )
}
export default MovesFilterBox;
