import type { ToastType } from '@/widgets/toast/types'

export class ToastError extends Error {
    toastType: ToastType

    constructor(message: string, toastType: ToastType) {
        super(message)
        this.toastType = toastType
        this.name = 'ToastError'
    }
}
