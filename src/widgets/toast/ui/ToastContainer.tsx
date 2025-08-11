import { useToast } from '../hooks'
import type { ToastContainerProps } from '../types'
import styles from './ToastContainer.module.css'
import ToastItem from './ToastItem'

const ToastContainer = ({
    position = 'bottom-right',
    size = 'medium',
    animation = 'fade-in-up',
}: ToastContainerProps) => {
    const { toasts, removeToast } = useToast()

    return (
        <div className={`${styles.container} ${styles[position]}`}>
            {toasts.map((toast) => (
                <ToastItem
                    key={toast.id}
                    {...toast}
                    size={size}
                    animation={animation}
                    onClose={() => {
                        removeToast(toast.id)
                    }}
                />
            ))}
        </div>
    )
}

export default ToastContainer
