import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${theme.colors.yellow};
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};

    &:hover {
      background: #b3a125;
      border: 1px solid #3b4cca;
    }
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
  `}
`

export const ImageWrappper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('/img/pokeball.png');
    background-size: cover;
    width: 35rem;
    height: 35rem;
    background-position: center;
    margin-top: ${theme.spacings.xxsmall};
  `}
`
export const Image = styled(motion.img)`
  width: 25rem;
  height: 25rem;
`
