import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import PokeCard from '.'

const props = {
  name: 'bulbasaur',
  imgUrl: 'https://pokeres.bastionbot.org/images/pokemon/1.png',
  layoutId: 'bulbasaur-logo'
}

describe('<PokeCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<PokeCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /bulbasaur/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /Image of the pokemon bulbasaur/i })
    ).toHaveAttribute('src', props.imgUrl)
  })
})
