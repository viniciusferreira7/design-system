import * as ToastRadix from '@radix-ui/react-toast'
import { Button } from '../Button'
import { ReactNode, useEffect, useRef, useState } from 'react'
import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'
import { X } from 'phosphor-react'

export interface ToastProps {
  buttonText: ReactNode
  title: ReactNode
  description: ReactNode
}

export function Toast({ buttonText, title, description }: ToastProps) {
  const [open, setOpen] = useState(false)
  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  function handleOpenToast() {
    setOpen(false)
    window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      setOpen(true)
    }, 100)
  }

  return (
    <ToastRadix.Provider>
      <Button onClick={handleOpenToast}>{buttonText}</Button>
      <ToastRoot open={open} onOpenChange={setOpen}>
        <ToastTitle>{title}</ToastTitle>
        <ToastClose>
          <X />
        </ToastClose>
        <ToastDescription>{description}</ToastDescription>
      </ToastRoot>
      <ToastViewport />
    </ToastRadix.Provider>
  )
}

Toast.displayName = 'Toast'
