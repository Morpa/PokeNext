import { Story, Meta } from '@storybook/react/types-6-0'
import PokeCard, { PokeCardProps } from '.'

export default {
  title: 'PokeCard',
  component: PokeCard,
  args: {
    name: 'bulbasaur',
    imgUrl: 'https://pokeres.bastionbot.org/images/pokemon/1.png',
    layoutId: 'bulbasaur-logo'
  }
} as Meta

export const Default: Story<PokeCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <PokeCard {...args} />
  </div>
)
