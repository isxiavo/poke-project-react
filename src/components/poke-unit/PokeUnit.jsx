import "./PokeUnit.css";
import TypeTag from "../type-tag/TypeTag";

export default function PokeUnit(props) {

  const data = props.data

  const imgs = {
    default : data.sprites.front_default,
    dreamworld : data.sprites.other.dream_world.front_default,
    official: data.sprites.other['official-artwork'].front_default,
    home : data.sprites.other.home.front_default
  }

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
    backgroundColor: colors[data.types[0].type.name]|| "#000",
  };

  function checkImg(img) {
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
    <li className="Unit" style={style}>
      <div className="Text">
        <span className="Name">{data.name}</span>
        <span className="Number">#{data.id}</span>
      </div>
      <div className="Details">
        <div>
          <ol className="TypeList">
            {data.types.map((type) => (
              <li>
                <TypeTag key={data.id} type={type.type.name}/>
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
