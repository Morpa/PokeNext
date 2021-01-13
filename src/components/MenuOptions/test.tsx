import { screen } from '@testing-library/react'

import MenuOptions from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

const props = {
  link: '/link',
  linkName: 'My link'
}

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ asPath: '/link' }))
}))

describe('<MenuOptions />', () => {
  it('should render options correctly', () => {
    const { container } = renderWithTheme(<MenuOptions {...props} />)

    expect(screen.getByText(/my link/i)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /my link/i })).toHaveAttribute(
      'href',
      '/link'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render  when  is active', () => {
    renderWithTheme(<MenuOptions {...props} activeLink="/link" />)

    expect(screen.getByRole('link', { name: /my link/i })).toHaveStyle({
      color: theme.colors.yellow
    })
  })
})
