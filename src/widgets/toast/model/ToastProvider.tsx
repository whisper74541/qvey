import { useState, type PropsWithChildren } from 'react'
import type { ToastItem } from '../types'
import { ToastContext } from './ToastContext'

export const ToastProvider = ({ children }: PropsWithChildren) => {
    const [toasts, setToasts] = useState<ToastItem[]>([])

    const addToast = (toast: Omit<ToastItem, 'id'>) => {
        const id = Date.now()
        const newToast = {
            ...toast,
            id,
        }

        setToasts((prev) => [...prev, newToast])
        setTimeout(() => removeToast(id), 3000)
    }

    const removeToast = (id: number) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }

    return <ToastContext value={{ toasts, addToast, removeToast }}>{children}</ToastContext>
}
