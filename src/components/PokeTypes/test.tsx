import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import PokeTypes from '.'

const props = 'Normal'

describe('<PokeTypes />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<PokeTypes type={props} />)

    expect(screen.getByRole('heading', { name: /normal/i })).toBeInTheDocument()

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
        background: #FF9F1C;
        padding: 1.6rem;
        font-weight: 700;
        border-radius: 0.4rem;
        margin-bottom: 0.8rem;
      }

      <h2
        class="c0"
      >
        Normal
      </h2>
    `)
  })
})
