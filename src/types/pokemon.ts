type Type = {
  name: string
  url: string
}

type Stat = {
  base_stat: number
  name: string
  url: string
}

type Ability = {
  name: string
  url: string
}

type EggGroup = {
  name: string
  url: string
}

export type Pokemon = {
  id: number
  name: string
  description: string
  image: string
  genera: string
  pokedex_number: string
  base_experience: number
  types: Type[]
  stats: Stat[]
  height: number
  weight: number
  abilites: Ability[]
  gender_rate: number
  egg_groups: EggGroup[]
}
