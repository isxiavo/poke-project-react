import React from "react";
import "./PokeDetail.css";
import { Pokemon } from "../../model/pokemon";
import TypeIcon from "../type-icon/TypeIcon";

type Props = {
  data: Pokemon;
  click: any;
};

export default function PokeDetail(props: Props) {
  const imgs = {
    default: props.data.sprites.front_default,
    dreamworld: props.data.sprites.dream_world,
    official: props.data.sprites.official_artwork,
    home: props.data.sprites.home,
  };

  const colors = {
    normal: `rgb(174,180,186)`,
    fire: `rgb(241,185,145)`,
    water: `rgb(173,193,241)`,
    grass: `rgb(181,221,161)`,
    electric: `rgb(240,221,148)`,
    ice: `rgb(197,229,229)`,
    fighting: `rgb(217,145,141)`,
    poison: `rgb(201,153,201)`,
    ground: `rgb(207,155,128)`,
    flying: `rgb(144,169,222)`,
    psychic: `rgb(245,165,189)`,
    bug: `rgb(205,213,137)`,
    rock: `rgb(212,200,151)`,
    ghost: `rgb(177,169,188)`,
    dark: `rgb(135,130,144)`,
    dragon: `rgb(177,149,245)`,
    steel: `rgb(166,193,202)`,
    fairy: `rgb(233,208,210)`,
  };

  const style = {
    backgroundColor:
      colors[props.data.types[0].type.name as keyof typeof colors] || "#000",
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
      <tr className="pokeDetail" onClick={props.click}>
        <td className="tdImg">
          <div className="thumbnail" style={style}>
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
