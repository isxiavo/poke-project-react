import { Pokemon } from "../model/pokemonModel";

export function fetchPokemons(): Promise<Pokemon[]>{ // pedindo uma função de retorno vazio que vai alterar o estado do loading em App
  const limit = 1100;
  const offset = 0;
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList) =>

      pokemonList.map((pokemon: any) =>
        fetch(pokemon.url).then((response) => response.json())
      )
      
    )
    .then((data) => Promise.all(data))
    .then((pokemonsDetails) => pokemonsDetails)

      // pokemonsDetails.map((unit) => {

      //   const newPokemon: Pokemon = {
      //     id: unit.id,
      //     name: unit.name,
      //     height: unit.height,
      //     weight: unit.weight,
      //     sprites: {
      //       front_default: unit.sprites.front_default,
      //       dream_world: unit.sprites.other.dream_world.front_default,
      //       official_artwork: unit.sprites.other['official-artwork'].front_default,
      //       home: unit.sprites.other.home.front_default
      //     },
      //     hp: unit.stats[0].base_stat,
      //     atk: unit.stats[1].base_stat,
      //     def: unit.stats[2].base_stat,
      //     satk: unit.stats[3].base_stat,
      //     sdef: unit.stats[4].base_stat,
      //     spd: unit.stats[5].base_stat,
      //     types: unit.types,
      //     abilities: unit.abilities,
      //     moves: unit.moves
      //   };

      //   pokemons.push(newPokemon)
      //   return pokemonsDetails
      // }))

}
