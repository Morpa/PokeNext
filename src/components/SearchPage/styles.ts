import styled, { css } from 'styled-components'

export const ErrorMessage = styled.h3`
  ${({ theme }) => css`
    padding: ${theme.spacings.large};
    text-align: center;
    font-style: italic;
    color: ${theme.colors.red};
  `}
`
