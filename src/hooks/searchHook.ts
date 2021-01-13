import { useEffect, useState } from 'react'
import useSWR from 'swr'

import api from 'services/api'
import Pokemon from 'types/pokemon'

type SearchProps = {
  Search?: Pokemon
  Respose?: string
  Error?: string
}

const fetcher = (_: unknown, query: string) =>
  api.get<SearchProps>(`/pokemons/${query}`).then((response) => response.data)

export const useSearch = (initialSearch: string) => {
  const [query, setQuery] = useState(initialSearch)
  const { data, error } = useSWR(query ? ['/', query] : null, fetcher)

  const pokemonsData: SearchProps | undefined = data

  useEffect(() => {
    setQuery('')
  }, [])

  return {
    pokemonsData,
    error,
    query,
    setQuery
  }
}
