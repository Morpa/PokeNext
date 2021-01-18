import 'react-tabs/style/react-tabs.css'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Male } from '@styled-icons/ionicons-outline/Male'
import { Female } from '@styled-icons/ionicons-outline/Female'

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

  if (router.isFallback) {
    return (
      <Base>
        <Loading />
      </Base>
    )
  }

  const pokemonGendersRate = getPokemonGenderStats(pokemon.gender_rate)
  const descriptionWithNoBreakLine = replaceString(pokemon.description)
  const heightInMeters = convertValues.decimeterToMeter(pokemon.height)
  const heightInFeet = convertValues.decimeterToFeet(pokemon.height)
  const weightInKilograms = convertValues.hectogramsToKilograms(pokemon.weight)
  const weightInPounds = convertValues.hectogramsToPounds(pokemon.weight)

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
                {/* <Tab>Base Stats</Tab>
                <Tab>Evolution</Tab> */}
              </TabList>

              <TabPanel>
                <S.About>
                  <p>{descriptionWithNoBreakLine}</p>
                  <S.Phisic>
                    <span>
                      <strong>Height - </strong>
                      {heightInMeters} m ({heightInFeet} ft)
                    </span>
                    <span>
                      <strong>Weight - </strong>
                      {weightInKilograms} kg ({weightInPounds} lbs)
                    </span>
                  </S.Phisic>
                  <S.WrapperTypes>
                    <strong>Types - </strong>
                    {pokemon.types.map((type, index) => (
                      <S.Types key={`${index}-type`}>{type.name}</S.Types>
                    ))}
                  </S.WrapperTypes>
                </S.About>

                <S.Breeding>
                  <strong>Breeding - </strong>
                  {pokemonGendersRate.map((gender) => (
                    <div key={gender.gender}>
                      {gender.gender === 'genderless' ? (
                        <span>Genderless</span>
                      ) : (
                        <>
                          {gender.gender === 'male' ? (
                            <Male size={16} style={{ color: '#6890F0' }} />
                          ) : (
                            <Female size={16} style={{ color: '#EE99AC' }} />
                          )}
                          {gender.rate}%
                        </>
                      )}
                    </div>
                  ))}
                </S.Breeding>
                <S.Training>
                  <strong>Base EXP - </strong>
                  <span>{pokemon.base_experience}</span>
                </S.Training>
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
