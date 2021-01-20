import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: ${theme.grid.gutter};

    `}
  `}
`

export const TabWrapper = styled.div`
  ${({ theme }) => css`
    .react-tabs {
      min-height: 15rem;
      margin-top: ${theme.spacings.large};
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
  align-items: center;
  justify-content: center;
`

export const Name = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    color: ${theme.colors.yellow};

    ${media.lessThan('medium')`
        font-size: 4rem;
    `}
  `}
`
export const Type = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.yellow};

    ${media.lessThan('medium')`
        font-size: 1.5rem;
    `}
  `}
`

export const WrapperTypes = styled.span`
  display: flex;
  align-items: baseline;
`
export const Types = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.yellow};
    color: ${theme.colors.dark};
    border-radius: ${theme.border.radius};
    margin-left: 1rem;
    margin-top: 1rem;
    padding: 0 ${theme.spacings.xxsmall};
    font-size: 1.5rem;
    margin-top: ${theme.spacings.small};
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
    align-items: baseline;
    margin-top: ${theme.spacings.small};

    span :last-child {
      ${media.greaterThan('medium')`
        margin-left: 1.8rem;
      `}
      margin-top: ${theme.spacings.small};
    }

    ${media.lessThan('medium')`
      align-items: flex-start;
      flex-direction: column;
    `}
  `}
`

export const Breeding = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: baseline;
    margin-top: ${theme.spacings.small};

    div {
      margin-left: 1rem;
    }

    svg {
      margin-right: 0.3rem;
    }
  `}
`

export const Training = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: baseline;
    margin-top: ${theme.spacings.small};

    span {
      margin-left: 1rem;
    }
  `}
`
