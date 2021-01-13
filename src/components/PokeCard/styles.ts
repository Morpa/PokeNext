import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { lighten } from 'polished'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${theme.colors.red};
    padding: ${theme.spacings.medium};
    border-radius: ${theme.border.radius};

    &:hover {
      background: ${lighten(0.2, theme.colors.red)};
    }
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    text-transform: capitalize;
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
    background-position: center center;
    margin-top: ${theme.spacings.small};
  `}
`
export const Image = styled(motion.img)`
  width: 25rem;
  height: 25rem;
`
