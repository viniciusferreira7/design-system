import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipContainer = styled(Tooltip.Root, {})
export const TooltipPortal = styled(Tooltip.Portal, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {
  all: 'unset',
  cursor: 'pointer',
})

export const TooltipContent = styled(Tooltip.Content, {
  width: '100%',
  maxWidth: '11.688rem',
  color: '$gray100',
  backgroundColor: '$gray900',
  padding: '$4 $3',
  textAlign: 'center',
  borderRadius: '$xs',
  fontFamily: '$default',
})
