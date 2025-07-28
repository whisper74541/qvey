export type ToastType = 'success' | 'error' | 'warning' | 'info'

export interface ToastItemProps {
    id: number
    message: string
    type: ToastType
    buttonLabel?: string
    onButtonClick?: () => void
    onClose?: () => void
}

export type ToastContextType = {
    toasts: ToastItemProps[]
    addToast: (toast: Omit<ToastItemProps, 'id'>) => void
    removeToast: (id: number) => void
}
