import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'

import api from 'services/api'

import Base from 'templates/Base'
import { Pokemon } from 'types/pokemon'

import * as S from 'components/Pokemon'

type PokemonPageProps = Pick<Pokemon, 'name'>

type PokemonProps = {
  pokemon: Pokemon
}

const PokemonPage = ({ pokemon }: PokemonProps) => {
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

        {/* <S.Image
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
        </S.Infos> */}
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
