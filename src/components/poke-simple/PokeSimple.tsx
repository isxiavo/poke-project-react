import React from "react";
import "./PokeSimple.css";
import TypeTag from "../type-tag/TypeTag";
import { Pokemon } from "../../model/pokemon";
import { colorsLight } from "../../data/pokemonColors";

type Props = {
  data: Pokemon;
  click: () => void;
}



export default function PokeSimple(props: Props) {

  

  const imgs = {
    default : props.data.sprites.front_default,
    dreamworld : props.data.sprites.dream_world,
    official: props.data.sprites.official_artwork,
    home : props.data.sprites.home
  }

  const style = {
    backgroundColor: colorsLight[props.data.types[0].type.name as keyof typeof colorsLight] || "#000",
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
        <span className="Name">{props.data.name}</span>
        <span className="Number">#{props.data.id}</span>
      </div>
      <div className="Details">
        <div>
          <ol className="TypeList">
            {props.data.types.map((type) => (
              <li>
                <TypeTag key={props.data.id} type={type.type.name} isCheck={false}/>
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
