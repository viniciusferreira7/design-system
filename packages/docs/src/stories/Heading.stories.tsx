import { Heading, HeadingProps } from '@ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'Title',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta

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
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com propriedade `as`',
      },
    },
  },
}
