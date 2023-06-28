import { Meta, StoryObj } from '@storybook/react'
import { Box, Tooltip, TooltipProps } from '@aquino-ui/react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  decorators: [
    (Story) => {
      return <Box css={{ color: '$white' }}>{Story()}</Box>
    },
  ],
} as Meta

export const Primary: StoryObj<TooltipProps> = {
  args: {
    children: 'Tooltip',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
  },
}
