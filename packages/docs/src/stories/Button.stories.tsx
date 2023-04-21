import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@aquino-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Enviar',
    size: 'big',
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Enviar',
    size: 'big',
  },
}
