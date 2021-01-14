import { render, screen } from '@testing-library/react'

import Loading from '.'

describe('<Loading />', () => {
  it('should render the heading', () => {
    const { container } = render(<Loading />)

    expect(screen.getByLabelText(/Loading/i).parentElement).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
