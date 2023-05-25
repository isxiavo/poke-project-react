import React from "react";
import "./PokeDetail.css";
import { Pokemon } from "../../model/pokemon";

type Props = {
  data: Pokemon;
}

export default function PokeDetail(props: Props) {

  const imgs = {
    default : props.data.sprites.front_default,
    dreamworld : props.data.sprites.dream_world,
    official: props.data.sprites.official_artwork,
    home : props.data.sprites.home
  };

  const colors = {
    normal:'rgb(168, 168, 120, 0.75)',
    fire: 'rgb(240, 128, 48, 0.75)',
    water: 'rgb(104, 144, 240, 0.75)',
    grass: 'rgb(120, 200, 80, 0.75)',
    electric: 'rgb(237, 199, 54, 0.75)',
    ice: 'rgb(152, 216, 216, 0.75)',
    fighting: 'rgb(192, 48, 40, 0.75)',
    poison: 'rgb(160, 64, 160, 0.75)',
    ground: 'rgb(215, 185, 105, 0.75)',
    flying: 'rgb(168, 144, 240, 0.75)',
    psychic: 'rgb(248, 88, 136, 0.75)',
    bug: 'rgb(168, 184, 32, 0.75)',
    rock: 'rgb(181, 158, 59, 0.75)',
    ghost: 'rgb(112, 88, 152, 0.75)',
    dark: 'rgb(112, 88, 72, 0.75)',
    dragon: 'rgb(112, 56, 248, 0.75)',
    steel: 'rgb(184, 184, 208, 0.75)',
    fairy: 'rgb(223, 173, 177, 0.75)'
  }

  const style = {
    backgroundColor: colors[props.data.types[0].type.name as keyof typeof colors]|| "#000",
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
    <tr className="pokeDetail" style={style}>
      <td className="tdImg">
        <div className="thumbnail">
          <img src={checkImg(imgs.official)} alt="thumb"/>
        </div>
      </td>
      <td>{props.data.id}</td>
      <td>{props.data.name}</td>
      <td>{props.data.height}</td>
      <td>{props.data.weight}</td>
    </tr>
  );
}
