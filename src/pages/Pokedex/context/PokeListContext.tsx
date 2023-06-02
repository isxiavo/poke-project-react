import React, { createContext, useContext, useMemo } from "react"
import { useQuery } from "@tanstack/react-query"
import { fetchPokemons } from "../../../services/fetchPokemons.service"
import { IPokeList } from "../../../model/pokeListInterface"

const PokeListContext = createContext<IPokeList>({})

export function usePokeList() {
  return useContext(PokeListContext);
}

export function PokeListProvider({children}: any) {
  
  const {data: pokemons, isLoading } = useQuery(
    ['pokemons'], 
    fetchPokemons
  )

  const ctxValue: IPokeList = useMemo(() => ({pokemons, isLoading}),[pokemons, isLoading])

  return (
    <PokeListContext.Provider value={ctxValue}>
      {children}
    </PokeListContext.Provider>
  )
}