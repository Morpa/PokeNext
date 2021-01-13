import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.xxlarge};
  `}
`
export const Description = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    padding: ${theme.spacings.large};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`
export const Back = styled(motion.div)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    > a {
      text-decoration: none;
      color: ${theme.colors.white};
    }
  `}
`
