import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Page404 from '.'

describe('<Page404 />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Page404 />)

    expect(
      screen.getByRole('img', { name: /Pokemon inside number 404/i })
    ).toHaveAttribute('src', '/img/not-found.png')

    expect(
      screen.getByRole('link', { name: /Voltar para Home/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /page not found/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        padding: 5.6rem;
      }

      .c1 {
        color: #FAFAFA;
        padding: 4.0rem;
      }

      .c2 {
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
      }

      .c2 > a {
        -webkit-text-decoration: none;
        text-decoration: none;
        color: #FAFAFA;
      }

      @media (max-width:768px) {
        .c1 {
          font-size: 1.8rem;
        }
      }

      <main
        class="c0"
      >
        <img
          alt="Pokemon inside number 404"
          height="120"
          src="/img/not-found.png"
          width="200"
        />
        <h1
          class="c1"
        >
          Page not found!
        </h1>
        <div
          class="c2"
          style="opacity: 0;"
        >
          <a
            href="/"
          >
            Voltar para Home
          </a>
        </div>
      </main>
    `)
  })
})
