import { Meta, StoryObj } from '@storybook/react'
import { Box, Toast, ToastProps } from '@aquino-ui/react'

export default {
  title: 'Data Display/Toast',
  component: Toast,
  decorators: [
    (Story) => {
      return <Box css={{ color: '$white' }}>{Story()}</Box>
    },
  ],
} as Meta

export const Primary: StoryObj<ToastProps> = {
  args: {
    buttonText: 'Agendar',
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
}
