import { useContext } from 'react'
import { ToastContext } from '../model'

export const useToast = () => {
    const context = useContext(ToastContext)

    if (!context) throw new Error('`useToast()`는 ToastProvider로 컴포넌트를 감싸야 합니다.')
    return context
}
