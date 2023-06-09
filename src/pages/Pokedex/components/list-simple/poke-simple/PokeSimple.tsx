import React, {  FC, useState, useCallback } from "react";
import "./PokeSimple.css";
import { TypeTag } from "../../../../../components/type-tag/TypeTag";
import { Pokemon } from "../../../../../model/pokemonType";
import { colorsLight } from "../../../../../data/pokemonColors";
import PokeCard from "../../../../../components/poke-card/PokeCard";

type PokeSimpleProps = {
  poke: Pokemon;
}

const PokeSimple: FC<PokeSimpleProps> = (props) => {

  const imgs = {
    default : props.poke.sprites.front_default,
    dreamworld : props.poke.sprites.other.dream_world.front_default,
    official: props.poke.sprites.other["official-artwork"].front_default,
    home : props.poke.sprites.other.home.front_default
  }

  const style = {
    backgroundColor: colorsLight[props.poke.types[0].type.name as keyof typeof colorsLight] || "#000",
  };

  const [pokeCard, setPokeCard] = useState(false)

  const changePokeCardState = useCallback(() => {
    setPokeCard((old) => old = !old)
  },[])

  function checkImg(img: string) {
    if (img) {
      return img
    }
    else if (imgs.dreamworld) {
      return imgs.dreamworld
    }
    else if (imgs.home) {
      return imgs.home
    }
    else{
      return imgs.home
    }
  }

  return (
    <li className="PokeSimple" style={style} onClick={changePokeCardState}>
      <div className="Text">
        <span className="Name">{props.poke.name}</span>
        <span className="Number">#{props.poke.id}</span>
      </div>
      <div className="Details">
        <div>
          <ol className="TypeList">
            {props.poke.types.map((type, index) => (
              <li>
                <TypeTag key={props.poke.id + index} type={type.type.name} isCheck={false}/>
              </li>
            ))}
          </ol>
        </div>
        <div className="Thumbnail">
          <img
            src={(checkImg(imgs.official))}
            alt="thumb"
          />
        </div>
      </div>
      {pokeCard && (
        <PokeCard
          pokemon={props.poke}
          click={()=>changePokeCardState}
        />
      )}
    </li>
  );
}

export default React.memo(PokeSimple)