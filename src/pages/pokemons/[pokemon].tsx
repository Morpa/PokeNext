import { useMemo } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

import api from 'services/api'

import Base from 'templates/Base'
import Loading from 'components/Loading'
import * as S from 'components/Pokemon'

import { Pokemon } from 'types/pokemon'

import { convertValues, getPokemonGenderStats, replaceString } from 'utils'

type PokemonPageProps = Pick<Pokemon, 'name'>

type PokemonProps = {
  pokemon: Pokemon
}

const PokemonPage = ({ pokemon }: PokemonProps) => {
  const router = useRouter()

  const pokemonFormatted = useMemo(() => {
    return {
      ...pokemon,
      descriptionWithNoBreakLine: replaceString(pokemon.description),
      heightInMeters: convertValues.decimeterToMeter(pokemon.height),
      heightInFeet: convertValues.decimeterToFeet(pokemon.height),
      weightInKilograms: convertValues.hectogramsToKilograms(pokemon.weight),
      weightInPounds: convertValues.hectogramsToPounds(pokemon.weight)
    }
  }, [pokemon])

  const pokemonGendersRate = getPokemonGenderStats(pokemon.gender_rate)

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
        <S.WrapperImage
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <S.Name>{pokemon.name}</S.Name>
          <S.Type>{pokemon.genera}</S.Type>

          <S.Image src={pokemon.image} layoutId={`${pokemon.name}-logo`} />
        </S.WrapperImage>

        <S.Infos
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <S.TabWrapper>
            <Tabs>
              <TabList>
                <Tab>About</Tab>
                <Tab>Base Stats</Tab>
                <Tab>Evolution</Tab>
              </TabList>

              <TabPanel>
                <S.About>
                  <p>{pokemonFormatted.description}</p>
                  <S.Phisic>
                    <span>
                      <strong>Height</strong> -{' '}
                      {pokemonFormatted.heightInMeters} m (
                      {pokemonFormatted.heightInFeet} ft)
                    </span>
                    <span>
                      <strong>Weight</strong> -{' '}
                      {pokemonFormatted.weightInKilograms} kg (
                      {pokemonFormatted.weightInPounds} lbs)
                    </span>
                  </S.Phisic>
                  <S.WrapperTypes>
                    <strong>Type</strong>
                    {pokemon.types.map((type, index) => (
                      <S.Types key={`${index}-type`}>{type.name}</S.Types>
                    ))}
                  </S.WrapperTypes>
                </S.About>
              </TabPanel>
            </Tabs>
          </S.TabWrapper>
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
