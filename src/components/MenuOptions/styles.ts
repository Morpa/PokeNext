import styled, { css, DefaultTheme } from 'styled-components'

const linkModifiers = {
  default: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `,
  active: (theme: DefaultTheme) => css`
    color: ${theme.colors.yellow};

    &:after {
      content: '';
      width: 8rem;
      height: 0.1rem;
      background: ${theme.colors.yellow};
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
    }
  `
}

type linkProps = {
  isActive?: boolean
}

export const Option = styled.a<linkProps>`
  ${({ theme, isActive }) => css`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.spacings.small};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small}
      ${theme.spacings.xxsmall} ${theme.spacings.small};

    strong {
      margin-top: ${theme.spacings.xxsmall};
      font-weight: ${theme.font.bold};
    }

    > svg {
      width: 2.4rem;
    }

    &:hover {
      color: ${theme.colors.yellow};
      cursor: pointer;
    }

    ${!isActive && linkModifiers.default(theme)};
    ${isActive && linkModifiers.active(theme)};
  `}
`
