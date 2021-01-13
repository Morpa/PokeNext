import * as S from './styles'

export type PokeTypesProps = {
  type: string
}

const PokeTypes = ({ type }: PokeTypesProps) => <S.Wrapper>{type}</S.Wrapper>

export default PokeTypes
