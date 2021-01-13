import Link from 'next/link'

import * as S from './styles'

const Page404 = () => (
  <S.Wrapper>
    <img
      src="/img/not-found.png"
      alt="Pokemon inside number 404"
      width="200"
      height="120"
    />
    <S.Description>Page not found!</S.Description>
    <S.Back
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <Link href="/" passHref>
        <a>Voltar para Home</a>
      </Link>
    </S.Back>
  </S.Wrapper>
)

export default Page404
