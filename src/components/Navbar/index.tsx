import Link from 'next/link'
import { useRouter } from 'next/router'
import { MotionProps } from 'framer-motion'
import {
  SearchAlt as SearchIcon,
  ArrowBack as BackIcon
} from '@styled-icons/boxicons-regular'

import * as S from './styles'

export type NavbarProps = {
  isVisible?: boolean
}

const animationSpring: MotionProps = {
  whileHover: { y: -4 },
  whileTap: {
    y: 0
  },
  transition: {
    type: 'spring',
    stiffness: 250,
    damping: 14
  }
}

const animationSpringLeft: MotionProps = {
  whileHover: { x: -4 },
  whileTap: {
    x: 0
  },
  transition: {
    type: 'spring',
    stiffness: 250,
    damping: 14
  }
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
        <S.IconWrapper {...animationSpring}>
          <Link href="/search">
            <a aria-label="search">
              <SearchIcon />
              <span>Procurar pokemons</span>
            </a>
          </Link>
        </S.IconWrapper>
      )}

      {!isVisible && (
        <S.IconWrapper onClick={() => router.back()} {...animationSpringLeft}>
          <Link href="/">
            <a aria-label="back">
              <BackIcon />
              <span>Voltar</span>
            </a>
          </Link>
        </S.IconWrapper>
      )}
    </S.Wrapper>
  )
}

export default Navbar
