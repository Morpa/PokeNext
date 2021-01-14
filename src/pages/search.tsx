import { GetServerSideProps } from 'next'
import { motion } from 'framer-motion'
import { Search as SearchIcon } from '@styled-icons/material-outlined'

import Base from 'templates/Base'
import TextField from 'components/TextField'
import PokeCard from 'components/PokeCard'
import { Grid } from 'components/Grid'

import * as S from 'components/SearchPage/styles'

import { useSearch } from 'hooks/searchHook'

type SearchPageProps = {
  initialSearch: string
}

const Search = ({ initialSearch }: SearchPageProps) => {
  const { pokemonsData, error, query, setQuery } = useSearch(initialSearch)

  return (
    <Base>
      <motion.div
        initial={{ transform: 'translateY(100%)' }}
        animate={{ transform: 'translateY(0px)' }}
        exit={{ transform: 'translateY(100%)' }}
      >
        <TextField
          name="search"
          placeholder="Procurar pokemons..."
          initialValue=""
          icon={<SearchIcon />}
          value={query}
          onInput={(value: string) => {
            setQuery(value)
          }}
        />

        {error && (
          <S.ErrorMessage>
            Ocorreu um erro, por favor tente novamente
          </S.ErrorMessage>
        )}

        {pokemonsData && (
          <Grid>
            <PokeCard
              name={pokemonsData.name}
              imgUrl={pokemonsData.image}
              layoutId={`${pokemonsData.name}-logo`}
            />
          </Grid>
        )}
      </motion.div>
    </Base>
  )
}

export const getServerSideProps: GetServerSideProps<SearchPageProps> = async (
  context
) => {
  const initialSearch = (context.query.query as string) || ''

  return {
    props: { initialSearch }
  }
}

export default Search
