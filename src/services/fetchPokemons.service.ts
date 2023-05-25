import { Pokemon } from "../model/pokemon";


export const fetchPokemons = (func: () => void) => { // pedindo uma função de retorno vazio que vai alterar o estado do loading em App
  const limit = 1300;
  const offset = 0;
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  const pokemons: Pokemon[] = []

  fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList) =>

      pokemonList.map((pokemon: any) =>
        fetch(pokemon.url).then((response) => response.json())
      )
      
    )
    .then((data) => Promise.all(data))
    .then((pokemonsDetails) =>

      pokemonsDetails.map((unit) => {

        const newPokemon: Pokemon = {
          id: unit.id,
          name: unit.name,
          height: unit.height,
          weight: unit.weight,
          sprites: {
            front_default: unit.sprites.front_default,
            dream_world: unit.sprites.other.dream_world.front_default,
            official_artwork: unit.sprites.other['official-artwork'].front_default,
            home: unit.sprites.other.home.front_default
          },
          stats: unit.stats,
          types: unit.types,
          moves: unit.moves
        }

        pokemons.push(newPokemon)
        return null
      }))
      .then(func)
    .catch((error) => console.log(error))

    return pokemons;
}
