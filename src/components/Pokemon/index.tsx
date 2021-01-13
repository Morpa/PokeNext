import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: 35rem;
  padding: 5rem;

  ${media.lessThan('medium')`
  flex-direction:column;
  `};
`

export const Image = styled(motion.img)`
  align-self: auto;
  width: 40rem;
  height: 40rem;

  ${media.lessThan('medium')`
    width: 20rem;
    height: 20rem;
  `};
`

export const Infos = styled(motion.div)`
  display: flex;
  flex-direction: column;
`
export const Info = styled.h3`
  ${({ theme }) => css`
    margin-bottom: 1rem;
    color: ${theme.colors.white};
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
