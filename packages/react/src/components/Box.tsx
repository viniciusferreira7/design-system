import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  border: '1px solid $gray600',
  backgroundColor: '$gray800',
})

export interface BoxProps extends ComponentProps<typeof Box> {}

Box.displayName = 'Box'
