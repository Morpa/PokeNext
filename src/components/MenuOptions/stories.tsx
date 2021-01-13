import { Story, Meta } from '@storybook/react/types-6-0'

import MenuOptions, { MenuOptionsProps } from '.'

export default {
  title: 'MenuOptions',
  component: MenuOptions,
  args: {
    link: '/link',
    linkName: 'My link',
    activeClassName: 'active'
  },
  argTypes: {
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story<MenuOptionsProps> = (args) => (
  <MenuOptions {...args} />
)
