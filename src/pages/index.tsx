import { GetServerSideProps } from 'next'

import HomePage from 'templates/HomePage'

import api from 'services/api'

type PokemonProps = {
  name: string
  url: string
}

export type HomeProps = {
  pokemons: PokemonProps[]
}

export default function Home({ pokemons }: HomeProps) {
  return <HomePage pokemons={pokemons} />
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const { data } = await api.get('/pokemon?limit=18')
  const pokemons = data.results

  return {
    props: {
      pokemons
    }
  }
}
