import { Search } from '@styled-icons/material-outlined'

import { Grid } from 'components/Grid'
import PokeCard from 'components/PokeCard'
import TextField from 'components/TextField'

import { PokemonsProps } from 'pages'

import Base from 'templates/Base'

const HomePage = ({ pokemons }: PokemonsProps) => (
  <Base>
    <TextField
      name="search"
      placeholder="Search pokemons..."
      initialValue=""
      icon={<Search />}
    />
    <Grid>
      {pokemons.map((pokemon) => {
        return (
          <PokeCard
            key={pokemon.name}
            name={pokemon.name}
            imgUrl={pokemon.image}
            layoutId={`${pokemon.name}-logo`}
          />
        )
      })}
    </Grid>
  </Base>
)

export default HomePage
