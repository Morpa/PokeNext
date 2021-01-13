import { useState } from 'react'
import Link from 'next/link'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill'
import { Close as CloseIcon } from '@styled-icons/material-outlined'

import MenuOptions from 'components/MenuOptions'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <Link href="/" passHref>
        <a>
          <S.LogoImage
            src="/img/logo.png"
            alt="PokeNext Logo"
            aria-label="PokeNext"
          />
        </a>
      </Link>

      <S.LinksWrapper>
        <MenuOptions link="/types/normal" linkName="Normal" />
        <MenuOptions link="/types/water" linkName="Water" />
        <MenuOptions link="/types/fire" linkName="Fire" />
        <MenuOptions link="/types/dark" linkName="Dark" />
        <MenuOptions link="/types/flying" linkName="Flying" />
        <MenuOptions link="/types/ghost" linkName="Ghost" />
        <MenuOptions link="/types/electric" linkName="Electric" />
      </S.LinksWrapper>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <MenuOptions link="/types/normal" linkName="Normal" />
          <MenuOptions link="/types/water" linkName="Water" />
          <MenuOptions link="/types/fire" linkName="Fire" />
          <MenuOptions link="/types/dark" linkName="Dark" />
          <MenuOptions link="/types/flying" linkName="Flying" />
          <MenuOptions link="/types/ghost" linkName="Ghost" />
          <MenuOptions link="/types/electric" linkName="Electric" />
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Navbar
