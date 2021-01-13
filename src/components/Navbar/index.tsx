import Link from 'next/link'

import * as S from './styles'

const Navbar = () => (
  <S.Wrapper>
    <Link href="/" passHref>
      <a>
        <S.LogoImage
          src="/img/logo.png"
          alt="PokeNext Logo"
          aria-label="PokeNext"
        />
      </a>
    </Link>
  </S.Wrapper>
)

export default Navbar
