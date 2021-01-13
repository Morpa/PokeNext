import { Grid } from 'components/Grid'
import PokeCard from 'components/PokeCard'
import Base from 'templates/Base'
import { HomeTypeProps } from 'pages/types/[id]'

const HomePageType = ({ pokemons }: HomeTypeProps) => {
  return (
    <Base>
      <Grid>
        {pokemons.map((item) => {
          const pokemonNumber = item.pokemon.url
            .replace('https://pokeapi.co/api/v2/pokemon/', '')
            .replace('/', '')

          return (
            <PokeCard
              key={item.pokemon.name}
              name={item.pokemon.name}
              imgUrl={`https://pokeres.bastionbot.org/images/pokemon/${pokemonNumber}.png`}
              layoutId={`${item.pokemon.name}-logo`}
            />
          )
        })}
      </Grid>
    </Base>
  )
}

export default HomePageType
