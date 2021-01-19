import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Footer />)

    expect(screen.getByText(/developed by/i)).toBeInTheDocument()

    expect(screen.getByText(/morpa/i)).toBeInTheDocument()

    expect(screen.getByText(/morpa/i)).toHaveStyle({ color: '#FFDE00' })

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: #FAFAFA;
        padding: 1rem;
      }

      .c0 > strong {
        margin-left: 0.8rem;
        color: #FFDE00;
      }

      <footer
        class="c0"
      >
        Developed by 
        <strong>
          Morpa
        </strong>
      </footer>
    `)
  })
})
