import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    padding: ${theme.spacings.small} 0;
    z-index: ${theme.layers.base};

    margin: 0 ${theme.spacings.xsmall};
  `}
`

export const LogoImage = styled.img`
  height: 6rem;
  width: 20rem;
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};

    a {
      color: inherit;
      text-decoration: none;

      > svg {
        display: block;
        width: 3rem;
      }
    }

    ${media.lessThan('medium')`
      position: absolute;
      left: 90%;
      transform: translateX(-50%);
  `}
  `}
`
