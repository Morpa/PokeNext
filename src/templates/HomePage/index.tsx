import { Grid } from 'components/Grid'
import PokeCard from 'components/PokeCard'

import { PokemonsProps } from 'pages'

import Base from 'templates/Base'

const HomePage = ({ pokemons }: PokemonsProps) => (
  <Base>
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
