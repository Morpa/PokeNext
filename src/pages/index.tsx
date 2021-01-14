import { GetServerSideProps } from 'next'

import HomePage from 'templates/HomePage'

import api from 'services/api'

import { Pokemon } from 'types/pokemon'

export type PokemonsProps = {
  pokemons: Pokemon[]
}

export default function Home({ pokemons }: PokemonsProps) {
  return <HomePage pokemons={pokemons} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get('/pokemons', { params: { limit: 36 } })

  const pokemons = data

  return {
    props: {
      pokemons
    }
  }
}
