import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import api from 'services/api'

import Base from 'templates/Base'
import Loading from 'components/Loading'
import * as S from 'components/Pokemon'

import { Pokemon } from 'types/pokemon'

type PokemonPageProps = Pick<Pokemon, 'name'>

type PokemonProps = {
  pokemon: Pokemon
}

const PokemonPage = ({ pokemon }: PokemonProps) => {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <Base>
        <Loading />
      </Base>
    )
  }

  return (
    <Base>
      <S.Wrapper>
        <S.Image src={pokemon.image} layoutId={`${pokemon.name}-logo`} />

        <S.Infos
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <S.Info>Base Experience - {pokemon.base_experience}</S.Info>
          <S.Info>Weight - {pokemon.weight}</S.Info>
        </S.Infos>
      </S.Wrapper>
    </Base>
  )
}

export const getStaticPaths: GetStaticPaths<PokemonPageProps> = async () => {
  const { data } = await api.get(`/pokemons`)

  const paths = data.map((pokemon: PokemonPageProps) => {
    return { params: { pokemon: pokemon.name.toLowerCase() } }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { pokemon } = context.params!

  const { data } = await api.get(`/pokemons/${pokemon}`)

  return {
    props: {
      pokemon: data
    },
    revalidate: 60
  }
}

export default PokemonPage
