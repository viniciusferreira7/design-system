import { Text, TextInput, TextInputProps, Box } from '@aquino-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$3' }}
        >
          <Text size="sm">E-mail Address</Text>
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

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
