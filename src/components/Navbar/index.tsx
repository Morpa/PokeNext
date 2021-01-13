import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  SearchAlt as SearchIcon,
  ArrowBack as BackIcon
} from '@styled-icons/boxicons-regular'

import * as S from './styles'

export type NavbarProps = {
  isVisible?: boolean
}

const Navbar = ({ isVisible }: NavbarProps) => {
  const router = useRouter()

  return (
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

      {isVisible && (
        <S.IconWrapper>
          <Link href="/search">
            <a aria-label="search">
              <SearchIcon />
            </a>
          </Link>
        </S.IconWrapper>
      )}

      {!isVisible && (
        <S.IconWrapper onClick={() => router.back()}>
          <Link href="/">
            <a aria-label="back">
              <BackIcon />
            </a>
          </Link>
        </S.IconWrapper>
      )}
    </S.Wrapper>
  )
}

export default Navbar
