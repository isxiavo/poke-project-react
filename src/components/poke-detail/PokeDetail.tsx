import React from "react";
import "./PokeDetail.css";
import { Pokemon } from "../../model/pokemon";
import TypeIcon from "../type-icon/TypeIcon";
import { colorsLight } from "../../data/pokemonColors";

type Props = {
  data: Pokemon;
  placeID: number;
  click: () => void;
};

export default function PokeDetail(props: Props) {

  const imgs = {
    default: props.data.sprites.front_default,
    dreamworld: props.data.sprites.dream_world,
    official: props.data.sprites.official_artwork,
    home: props.data.sprites.home,
  };

  const thumbBG = {
    backgroundColor:
      colorsLight[props.data.types[0].type.name as keyof typeof colorsLight] || "#000",
  };

  function checkImg(img: string) {
    if (img) {
      return img;
    } else if (imgs.dreamworld) {
      return imgs.dreamworld;
    } else if (imgs.home) {
      return imgs.home;
    } else {
      return imgs.home;
    }
  }

  return (
    <>
      <tr className="pokeDetail" onClick={props.click} style={props.placeID % 2 === 0 ? {'backgroundColor': 'lightgray'} : {'backgroundColor': 'white'}}>
        <td className="tdImg">
          <div className="thumbnail" style={thumbBG}>
            <img src={checkImg(imgs.official)} alt="thumb" />
          </div>
        </td>
        <td>{props.data.id}</td>
        <td>{props.data.name}</td>
        <td>
          <div className="types">
            {props.data.types.map((type) => (
              <div className="type-container">
                <TypeIcon name={type.type.name} />
              </div>
            ))}
          </div>
        </td>
        <td>{props.data.hp}</td>
        <td>{props.data.atk}</td>
        <td>{props.data.def}</td>
        <td>{props.data.satk}</td>
        <td>{props.data.sdef}</td>
        <td>{props.data.spd}</td>
      </tr>
    </>
  );
}
