import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { Container } from 'components/Container'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  const [isVisible, setIsVisible] = useState(true)
  const router = useRouter()

  const route = router ? router.pathname : ''

  useEffect(() => {
    if (['/pokemons/[pokemon]', '/search'].includes(route)) {
      setIsVisible(false)
    }
  }, [route, isVisible])

  return (
    <Container>
      <S.Wrapper>
        <Navbar isVisible={isVisible} />
        <S.Content>{children}</S.Content>
        <Footer />
      </S.Wrapper>
    </Container>
  )
}

export default Base
