import HomePage from 'templates/HomePage'

import api from 'services/api'

import { Pokemon } from 'types/pokemon'

export type PokemonsProps = {
  pokemons: Pokemon[]
}

export default function Home({ pokemons }: PokemonsProps) {
  return <HomePage pokemons={pokemons} />
}

export async function getStaticProps() {
  const { data } = await api.get('/pokemons')

  const pokemons = data

  return {
    revalidate: 60,
    props: {
      pokemons
    }
  }
}
