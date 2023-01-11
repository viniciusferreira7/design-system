import { colors } from '@ignite-ui/tokens'
import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$code',
  width: '$6',
})

export function App() {
  return <Button style={{ color: colors.ignite300 }}>Hello world</Button>
}
