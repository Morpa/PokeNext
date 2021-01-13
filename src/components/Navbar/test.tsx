import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Navbar from '.'

describe('<Navbar />', () => {
  it('should render the header with search visible', () => {
    renderWithTheme(<Navbar isVisible />)

    expect(screen.getByLabelText(/pokenext/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /search/i })).toBeInTheDocument()
  })

  it('should render the header with back visible', () => {
    renderWithTheme(<Navbar />)

    expect(screen.getByLabelText(/pokenext/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /back/i })).toBeInTheDocument()
  })
})
