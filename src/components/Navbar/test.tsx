import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Navbar from '.'

describe('<Navbar />', () => {
  it('should render the navbar correctly', () => {
    renderWithTheme(<Navbar />)

    expect(screen.getByLabelText(/pokenext/i)).toBeInTheDocument()
  })
})
