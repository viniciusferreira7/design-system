import { Text, TextArea, TextAreaProps, Box } from '@aquino-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$3' }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta

export const Primary: StoryObj = {
  args: {
    placeholder: 'Type your user',
  },
}

export const WithPrefix: StoryObj<TextAreaProps> = {
  args: {
    prefix: 'cal.com/',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
