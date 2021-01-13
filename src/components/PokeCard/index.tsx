import Link from 'next/link'

import * as S from './styles'

export type PokeCardProps = {
  name: string
  imgUrl: string
  layoutId: string
}

const PokeCard = ({ name, imgUrl, layoutId }: PokeCardProps) => {
  const lowerName = name.toLowerCase()

  return (
    <S.Wrapper>
      <S.Title>{name}</S.Title>
      <Link href={`/pokemons/${lowerName}`} passHref>
        <a>
          <S.ImageWrappper>
            <S.Image
              src={imgUrl}
              alt={`Image of the pokemon ${name}`}
              layoutId={layoutId}
            />
          </S.ImageWrappper>
        </a>
      </Link>
    </S.Wrapper>
  )
}

export default PokeCard
