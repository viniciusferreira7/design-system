import * as TooltipRadix from '@radix-ui/react-tooltip'
import { TooltipContent, TooltipTrigger } from './styles'
import { ReactNode } from 'react'

export interface TooltipProps {
  children: ReactNode
  description: ReactNode
}

export function Tooltip({ children, description }: TooltipProps) {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipRadix.Portal>
          <TooltipContent>{description}</TooltipContent>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}
