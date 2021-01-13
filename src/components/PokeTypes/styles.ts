import styled, { css } from 'styled-components'

export const Wrapper = styled.h2`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.yellow};
    padding: ${theme.spacings.xsmall};
    font-weight: ${theme.font.bold};
    border-radius: ${theme.border.radius};
    margin-bottom: ${theme.spacings.xxsmall}; ;
  `}
`
