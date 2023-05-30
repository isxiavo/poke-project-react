import React, { createContext, useState, useEffect, useContext } from "react"
import { Pokemon } from "../model/pokemon"
import { fetchPokemons } from "../services/fetchPokemons.service"
import { IPokeList } from "../interfaces/PokeListInterface"

const PokeListContext = createContext<IPokeList>({})

export function usePokeList() {
  return useContext(PokeListContext);
}

export function PokeListProvider ({children}: any) {

  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [listReady, setListReady] = useState(false);
  const ctxValue: IPokeList = {pokemons, setPokemons}

  function isListRead() {
    setListReady((old) => old = !old)
  }

  useEffect(() =>{
    setPokemons(() => fetchPokemons(isListRead))
  },[])

  return (
    <PokeListContext.Provider value={ctxValue}>
      {children}
    </PokeListContext.Provider>
  )
}