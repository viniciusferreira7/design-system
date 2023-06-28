import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastViewport = styled(Toast.Viewport, {
  // '--viewport-padding': '25px',
  position: 'fixed',
  bottom: 0,
  right: 0,
})

export const ToastRoot = styled(Toast.Root, {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  width: '22.5rem',
  padding: '0.75rem 1.25rem',
  borderRadius: '$sm',
  backgroundColor: '$gray800',
  fontFamily: '$default',
})

export const ToastTitle = styled(Toast.Title, {
  fontSize: '$xl',
  color: '$white',
  fontWeight: '$bold',
  marginBottom: '$1',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  fontSize: '$xl',
  color: '$gray200',
  cursor: 'pointer',
})

export const ToastDescription = styled(Toast.Description, {
  fontSize: '$sm',
  color: '$gray200',
})
