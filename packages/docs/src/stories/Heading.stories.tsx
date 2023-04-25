import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@aquino-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'Custom Title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `H1`, ma podemos alterar isso com a propriedade `as` ',
      },
    },
  },
}
