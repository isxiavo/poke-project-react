import React from "react";
import "./PokeSimple.css";
import TypeTag from "../type-tag/TypeTag";
import { Pokemon } from "../../model/pokemonModel";
import { colorsLight } from "../../data/pokemonColors";

type Props = {
  poke: Pokemon;
  click: () => void;
}

export default function PokeSimple(props: Props) {

  const imgs = {
    default : props.poke.sprites.front_default,
    dreamworld : props.poke.sprites.other.dream_world.front_default,
    official: props.poke.sprites.other["official-artwork"].front_default,
    home : props.poke.sprites.other.home.front_default
  }

  const style = {
    backgroundColor: colorsLight[props.poke.types[0].type.name as keyof typeof colorsLight] || "#000",
  };

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
    <li className="PokeSimple" style={style} onClick={props.click}>
      <div className="Text">
        <span className="Name">{props.poke.name}</span>
        <span className="Number">#{props.poke.id}</span>
      </div>
      <div className="Details">
        <div>
          <ol className="TypeList">
            {props.poke.types.map((type) => (
              <li>
                <TypeTag key={props.poke.id} type={type.type.name} isCheck={false}/>
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
    </li>
  );
}
