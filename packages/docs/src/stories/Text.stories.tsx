import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@aquino-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero aliquid veniam ullam facere est commodi iste corporis illo similique necessitatibus, minus placeat aperiam perferendis, libero fugiat labore molestias laborum. Beatae?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    as: 'h1',
  },
}
