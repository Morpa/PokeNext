import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'

import api from 'services/api'

import Base from 'templates/Base'
import PokeTypes from 'components/PokeTypes'
import * as S from 'components/Pokemon'

type PokemonsProps = {
  url: string
  name: string
}

type PokemonProps = {
  pokemon: {
    id: number
    name: string
    base_experience: number
    weight: number
    types: {
      type: { name: string }
    }[]
  }
}

const Pokemon = ({ pokemon }: PokemonProps) => {
  return (
    <Base>
      <S.Wrapper>
        <S.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          layoutId={`${pokemon.name}-logo`}
        />
        <S.Infos
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <S.Info>Base Experience - {pokemon.base_experience}</S.Info>
          <S.Info>Weight - {pokemon.weight}</S.Info>
          <S.Info>Types -</S.Info>

          {pokemon.types.map((item) => (
            <PokeTypes type={item.type.name} key={item.type.name}></PokeTypes>
          ))}
        </S.Infos>
      </S.Wrapper>

      <div>
        <S.Back
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Link href="/" passHref>
            <a>Voltar para a Home</a>
          </Link>
        </S.Back>
      </div>
    </Base>
  )
}

export const getStaticPaths: GetStaticPaths<PokemonsProps> = async () => {
  const { data } = await api.get(`/pokemon/?limit=1118`)
  const pokemons = data.results

  const paths = pokemons.map((poke: PokemonsProps) => {
    return { params: { pokemon: poke.name } }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { pokemon } = context.params!

  const { data } = await api.get(`/pokemon/${pokemon}`)

  const pokemonData = data

  return {
    props: {
      pokemon: pokemonData
    },
    revalidate: 60
  }
}

export default Pokemon
