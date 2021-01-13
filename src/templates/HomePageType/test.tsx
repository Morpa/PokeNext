import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import HomePageType from '.'

const props = [
  { pokemon: { name: 'unown', url: 'https://pokeapi.co/api/v2/pokemon/201/' } }
]

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Base"></div>
    }
  }
})

describe('<HomePage />', () => {
  it('should render the correctly', () => {
    renderWithTheme(<HomePageType pokemons={props} />)

    expect(screen.getByTestId('Mock Base')).toBeInTheDocument()
  })
})
