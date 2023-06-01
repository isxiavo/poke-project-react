import React, { FC,createContext, useContext, useState, useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import { fetchPokemons } from "../services/fetchPokemons.service"
import { IPokeList } from "../interfaces/PokeListInterface"
import { Pokemon } from "../model/pokemonModel"

const PokeListContext = createContext<IPokeList>({})

export function usePokeList() {
  return useContext(PokeListContext);
}
interface CTXProps {

}

export const PokeListProvider:FC<CTXProps> = ({children}: any) => {
  
  const {data: pokemons, isLoading } = useQuery(
    ['pokemons'], 
    fetchPokemons
  )

  //const [pokemons, setPokemons] = useState<Pokemon[]>(pokemonsData!);

  const ctxValue: IPokeList = {pokemons, isLoading}

  return (
    <PokeListContext.Provider value={ctxValue}>
      {children}
    </PokeListContext.Provider>
  )
}