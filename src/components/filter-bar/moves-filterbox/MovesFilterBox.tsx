import React, { FC, useEffect, useState } from 'react';
import './MovesFilterBox.css'
import { fetchMoves } from '../../../services/fetchMoves.service';
import MoveTagFilter from './move-tagfilter/MoveTagFilter';
import { Move } from '../../../model/moveModel';

interface MovesFilterBoxProps {
  movesListProp: string[];
}

const MovesFilterBox: FC<MovesFilterBoxProps> = (props) => {

  const [movesList, setMovesList] = useState<Move[]>([])
  const [movesListReady, setMovesListReady] = useState(false);

  function isMovesListReady() {
    setMovesListReady((old) => old = !old)
  }

  function checkMove(moveName: string, isChecked: boolean) {
    if(isChecked) {
      props.movesListProp.push(moveName)
    }
    else {
      props.movesListProp.splice(props.movesListProp.indexOf(moveName) ,1)
    }
    console.log(props.movesListProp)
  }

  useEffect(() => {
    setMovesList(() => fetchMoves(isMovesListReady))
  },[])

  return(
    <div className='moves-filterbox'>
      <h3>MOVES</h3>
      <input type='text' placeholder='search'/>
      <div className='moves-container'>
        {movesListReady && movesList.map((move,i) =>
        <MoveTagFilter name={move.name} placeID={i} check={checkMove}></MoveTagFilter>)}
      </div>
    </div>
  )
}
export default MovesFilterBox;
