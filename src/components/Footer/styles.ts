import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    padding: 1rem;
    border-top: 1px solid ${theme.colors.lightGrey};
    margin-top: ${theme.spacings.medium};

    > strong {
      margin-left: ${theme.spacings.xxsmall};
      color: ${theme.colors.yellow};
    }
  `}
`
