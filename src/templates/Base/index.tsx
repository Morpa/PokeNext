import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { Container } from 'components/Container'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

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
      <Navbar isVisible={isVisible} />
      {children}
      <Footer />
    </Container>
  )
}

export default Base
