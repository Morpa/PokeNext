import { useRouter } from 'next/router'
import Link from 'next/link'

import * as S from './styles'

export type MenuOptionsProps = {
  link: string
  linkName: string
  activeLink?: string
}

const MenuOptions = ({ link, linkName }: MenuOptionsProps) => {
  const router = useRouter()

  return (
    <Link href={link} passHref prefetch={false}>
      <S.Option isActive={link === router.asPath}>
        <strong>{linkName}</strong>
      </S.Option>
    </Link>
  )
}

export default MenuOptions
