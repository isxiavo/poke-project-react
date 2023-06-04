import React, { FC, useState } from "react";
import "./PokeDetail.css";
import { Pokemon } from "../../../../../model/pokemonType";
import TypeIcon from "../../../../../components/type-icon/TypeIcon";
import { PokeCard } from "../../../../../components/poke-card/poke-card";
import { colorsLight } from "../../../../../data/pokemonColors";

type PokeDetailProps = {
  poke: Pokemon;
  placeID: number;
};

export const PokeDetail: FC<PokeDetailProps> = (props) => {

  const imgs = {
    default : props.poke.sprites.front_default,
    dreamworld : props.poke.sprites.other.dream_world.front_default,
    official: props.poke.sprites.other["official-artwork"].front_default,
    home : props.poke.sprites.other.home.front_default
  };

  const thumbBG = {
    backgroundColor:
      colorsLight[props.poke.types[0].type.name as keyof typeof colorsLight] || "#000",
  };

  const [pokeCard, setPokeCard] = useState(false);

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

  const changePokeCardState = () => {
    setPokeCard(old => !old);
    console.log(pokeCard);
  }

  return (
    <>
      <tr className="pokeDetail" onClick={()=>changePokeCardState()} style={props.placeID % 2 === 0 ? {'backgroundColor': 'lightgray'} : {'backgroundColor': 'white'}}>
        <td className="tdImg">
          <div className="thumbnail" style={thumbBG}>
            <img src={checkImg(imgs.official)} alt="thumb" />
          </div>
        </td>
        <td>{props.poke.id}</td>
        <td>{props.poke.name}</td>
        <td>
          <div className="types">
            {props.poke.types.map((type) => (
              <div className="type-container">
                <TypeIcon name={type.type.name} />
              </div>
            ))}
          </div>
        </td>
        <td>{props.poke.stats[0].base_stat}</td>
        <td>{props.poke.stats[1].base_stat}</td>
        <td>{props.poke.stats[2].base_stat}</td>
        <td>{props.poke.stats[3].base_stat}</td>
        <td>{props.poke.stats[4].base_stat}</td>
        <td>{props.poke.stats[5].base_stat}</td>
      </tr>
      {pokeCard && (
        <PokeCard
          pokemon={props.poke}
          click={() => changePokeCardState}
        ></PokeCard>
      )}
    </>
  );
}
