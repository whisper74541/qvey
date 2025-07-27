export type ToastType = 'success' | 'error' | 'warning' | 'info'

export interface ToastItem {
    id: number
    message: string
    type: ToastType
}

export type ToastContextType = {
    toasts: ToastItem[]
    addToast: (toast: Omit<ToastItem, 'id'>) => void
    removeToast: (id: number) => void
}
