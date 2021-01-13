type Ability = {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean
  slot: number
}

type Form = {
  name: string
  url: string
}

type GameIndice = {
  game_index: number
  version: {
    name: string
    url: string
  }
}

type Move = {
  move: {
    name: string
    url: string
  }
}

type Stat = {
  base_stat: number
  effort: number
  stat: {
    name:
      | 'hp'
      | 'attack'
      | 'defense'
      | 'special-attack'
      | 'special-defense'
      | 'speed'
    url: string
  }
}

type Type = {
  slot: number
  type: {
    name: string
    url: string
  }
}

export type Pokemon = {
  image: string
  abilities: Ability[]
  base_experience: number
  forms: Form[]
  game_indices: GameIndice[]
  height: number
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: Move[]
  name: string
  order: number
  species: {
    name: string
    url: string
  }
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
  stats: Stat[]
  types: Type[]
  weight: number
}

export default Pokemon
