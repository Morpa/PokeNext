import { GetStaticPaths, GetStaticProps } from 'next'

import api from 'services/api'

import HomePageType from 'templates/HomePageType'

type PokemonsProps = {
  url: string
  name: string
}

export type HomeTypeProps = {
  pokemons: {
    pokemon: {
      url: string
      name: string
    }
  }[]
}

const Type = ({ pokemons }: HomeTypeProps) => {
  return <HomePageType pokemons={pokemons} />
}

export default Type

export const getStaticPaths: GetStaticPaths<PokemonsProps> = async () => {
  const { data } = await api.get(`/type`)
  const pokemons = data.results

  const paths = pokemons.map((poke: PokemonsProps) => {
    return { params: { id: poke.name } }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!

  const { data } = await api.get(`/type/${id}`)

  const pokemonData = data.pokemon

  return {
    props: {
      pokemons: pokemonData
    },
    revalidate: 60
  }
}
