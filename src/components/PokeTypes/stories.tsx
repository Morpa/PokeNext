import { Story, Meta } from '@storybook/react/types-6-0'
import PokeTypes, { PokeTypesProps } from '.'

export default {
  title: 'PokeTypes',
  component: PokeTypes,
  args: {
    type: 'Normal'
  }
} as Meta

export const Default: Story<PokeTypesProps> = (args) => (
  <div style={{ width: '10rem' }}>
    {' '}
    <PokeTypes {...args} />
  </div>
)
