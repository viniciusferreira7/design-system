import { Button, ButtonProps } from '@ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
    disabled: false,
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
    disabled: false,
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
    disabled: false,
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    sizes: 'sm',
  },
}

export const Medium: StoryObj<ButtonProps> = {
  args: {
    sizes: 'md',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo <ArrowRight weight="bold" />
      </>
    ),
  },
}
