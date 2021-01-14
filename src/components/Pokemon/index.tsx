import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-width: 35rem;
    padding: 5rem;
    color: ${theme.colors.white};

    ${media.lessThan('medium')`
        flex-direction:column;
        margin-bottom: 15rem;
    `};
  `}
`
export const TabWrapper = styled.div`
  ${({ theme }) => css`
    .react-tabs {
      margin-top: -25rem;
      margin-left: 3rem;
      height: 20rem;
      width: -22rem;

      ${media.lessThan('medium')`
        margin-top: 1rem;
      `};
    }

    .react-tabs__tab {
      color: ${theme.colors.yellow};
    }

    .react-tabs__tab--selected {
      background: ${theme.colors.yellow};
      border-color: ${theme.colors.dark};
      color: ${theme.colors.dark};
      border-radius: 5px 5px 0 0;
    }

    .react-tabs__tab-panel {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
  `}
`
export const WrapperImage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const Name = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    color: ${theme.colors.yellow};

    ${media.lessThan('medium')`
        font-size: 4.5rem;
    `}
  `}
`
export const Type = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.yellow};

    ${media.lessThan('medium')`
        font-size: 2.5rem;
    `}
  `}
`

export const WrapperTypes = styled.span`
  display: flex;
  align-items: center;
`
export const Types = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    background: ${theme.colors.yellow};
    color: ${theme.colors.dark};
    border-radius: ${theme.border.radius};
    margin-left: 1rem;
    margin-top: 1rem;
    padding: ${theme.spacings.xxsmall};

    ${media.lessThan('medium')`
        font-size: 2.5rem;
    `}
  `}
`

export const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p > {
    text-align: justify;
  }
`

export const Phisic = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-top: ${theme.spacings.small};

    span :last-child {
      ${media.greaterThan('medium')`
      margin-left: 1.8rem;
      `}
    }

    ${media.lessThan('medium')`
      align-items: flex-start;
      flex-direction: column;
    `}
  `}
`
