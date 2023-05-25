import React from "react";
import "./PokeDetail.css";
import { Pokemon } from "../../model/pokemon";

type Props = {
  data: Pokemon;
};

export default function PokeDetail(props: Props) {
  const imgs = {
    default: props.data.sprites.front_default,
    dreamworld: props.data.sprites.dream_world,
    official: props.data.sprites.official_artwork,
    home: props.data.sprites.home,

    types: {
      normal:
        "https://archives.bulbagarden.net/media/upload/thumb/9/95/Normal_icon_SwSh.png/64px-Normal_icon_SwSh.png",
      fire: "https://archives.bulbagarden.net/media/upload/thumb/a/ab/Fire_icon_SwSh.png/64px-Fire_icon_SwSh.png",
      water:
        "https://archives.bulbagarden.net/media/upload/thumb/8/80/Water_icon_SwSh.png/64px-Water_icon_SwSh.png",
      grass:
        "https://archives.bulbagarden.net/media/upload/thumb/a/a8/Grass_icon_SwSh.png/64px-Grass_icon_SwSh.png",
      electric:
        "https://archives.bulbagarden.net/media/upload/thumb/7/7b/Electric_icon_SwSh.png/64px-Electric_icon_SwSh.png",
      ice: "https://archives.bulbagarden.net/media/upload/thumb/1/15/Ice_icon_SwSh.png/64px-Ice_icon_SwSh.png",
      fighting:
        "https://archives.bulbagarden.net/media/upload/thumb/3/3b/Fighting_icon_SwSh.png/64px-Fighting_icon_SwSh.png",
      poison:
        "https://archives.bulbagarden.net/media/upload/thumb/8/8d/Poison_icon_SwSh.png/64px-Poison_icon_SwSh.png",
      ground:
        "https://archives.bulbagarden.net/media/upload/thumb/2/27/Ground_icon_SwSh.png/64px-Ground_icon_SwSh.png",
      flying:
        "https://archives.bulbagarden.net/media/upload/thumb/b/b5/Flying_icon_SwSh.png/64px-Flying_icon_SwSh.png",
      psychic:
        "https://archives.bulbagarden.net/media/upload/thumb/7/73/Psychic_icon_SwSh.png/64px-Psychic_icon_SwSh.png",
      bug: "https://archives.bulbagarden.net/media/upload/thumb/9/9c/Bug_icon_SwSh.png/64px-Bug_icon_SwSh.png",
      rock: "https://archives.bulbagarden.net/media/upload/thumb/1/11/Rock_icon_SwSh.png/64px-Rock_icon_SwSh.png",
      ghost:
        "https://archives.bulbagarden.net/media/upload/thumb/0/01/Ghost_icon_SwSh.png/64px-Ghost_icon_SwSh.png",
      dark: "https://archives.bulbagarden.net/media/upload/thumb/d/d5/Dark_icon_SwSh.png/64px-Dark_icon_SwSh.png",
      dragon:
        "https://archives.bulbagarden.net/media/upload/thumb/7/70/Dragon_icon_SwSh.png/64px-Dragon_icon_SwSh.png",
      steel:
        "https://archives.bulbagarden.net/media/upload/thumb/0/09/Steel_icon_SwSh.png/64px-Steel_icon_SwSh.png",
      fairy:
        "https://archives.bulbagarden.net/media/upload/thumb/c/c6/Fairy_icon_SwSh.png/64px-Fairy_icon_SwSh.png",
    },
  };

  // const colors = {
  //   normal:'rgb(168, 168, 120, 0.75)',
  //   fire: 'rgb(240, 128, 48, 0.75)',
  //   water: 'rgb(104, 144, 240, 0.75)',
  //   grass: 'rgb(120, 200, 80, 0.75)',
  //   electric: 'rgb(237, 199, 54, 0.75)',
  //   ice: 'rgb(152, 216, 216, 0.75)',
  //   fighting: 'rgb(192, 48, 40, 0.75)',
  //   poison: 'rgb(160, 64, 160, 0.75)',
  //   ground: 'rgb(215, 185, 105, 0.75)',
  //   flying: 'rgb(168, 144, 240, 0.75)',
  //   psychic: 'rgb(248, 88, 136, 0.75)',
  //   bug: 'rgb(168, 184, 32, 0.75)',
  //   rock: 'rgb(181, 158, 59, 0.75)',
  //   ghost: 'rgb(112, 88, 152, 0.75)',
  //   dark: 'rgb(112, 88, 72, 0.75)',
  //   dragon: 'rgb(112, 56, 248, 0.75)',
  //   steel: 'rgb(184, 184, 208, 0.75)',
  //   fairy: 'rgb(223, 173, 177, 0.75)'
  // }

  // const style = {
  //   backgroundColor: colors[props.data.types[0].type.name as keyof typeof colors]|| "#000",
  // };

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
    <tr className="pokeDetail">
      <td className="tdImg">
        <div className="thumbnail">
          <img src={checkImg(imgs.official)} alt="thumb" />
        </div>
      </td>
      <td>{props.data.id}</td>
      <td>{props.data.name}</td>
      <td className="types">
        {props.data.types.map((type) => (
          <div className="type-icon">
            <img
              src={imgs.types[type.type.name as keyof typeof imgs.types]}
              alt="type"
            ></img>
          </div>
        ))}
      </td>
      <td>{props.data.stats[0].base_stat}</td>
      <td>{props.data.stats[1].base_stat}</td>
      <td>{props.data.stats[2].base_stat}</td>
      <td>{props.data.stats[3].base_stat}</td>
      <td>{props.data.stats[4].base_stat}</td>
      <td>{props.data.stats[5].base_stat}</td>
    </tr>
  );
}
