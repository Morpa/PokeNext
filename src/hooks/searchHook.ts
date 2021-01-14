import { useEffect, useState } from 'react'
import useSWR from 'swr'

import useDebounce from 'hooks/debounce'

import api from 'services/api'

import Pokemon from 'types/pokemon'

type SearchProps = {
  Search?: Pokemon
  Respose?: string
  Error?: string
} & Pick<Pokemon, 'name' | 'image'>

const fetcher = (_: unknown, query: string) =>
  api.get<SearchProps>(`/pokemons/${query}`).then((response) => response.data)

export const useSearch = (initialSearch: string) => {
  const [query, setQuery] = useState(initialSearch)
  const debouncedSearchTerm = useDebounce(query, 500).toLowerCase()
  const { data, error } = useSWR(
    debouncedSearchTerm ? ['/', debouncedSearchTerm] : null,
    fetcher
  )

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
