import { Grid } from 'components/Grid'
import PokeCard from 'components/PokeCard'
import Base from 'templates/Base'
import { HomeProps } from 'pages'

const HomePage = ({ pokemons }: HomeProps) => {
  return (
    <Base>
      <Grid>
        {pokemons.map((pokemon) => {
          const pokemonNumber = pokemon.url
            .replace('https://pokeapi.co/api/v2/pokemon/', '')
            .replace('/', '')

          return (
            <PokeCard
              key={pokemon.name}
              name={pokemon.name}
              imgUrl={`https://pokeres.bastionbot.org/images/pokemon/${pokemonNumber}.png`}
              layoutId={`${pokemon.name}-logo`}
            />
          )
        })}
      </Grid>
    </Base>
  )
}

export default HomePage
