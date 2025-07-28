import { useToast } from '../hooks'
import styles from './ToastContainer.module.css'
import ToastItem from './ToastItem'

const ToastContainer = () => {
    const { toasts, removeToast } = useToast()

    return (
        <div className={styles.container}>
            {toasts.map((toast) => (
                <ToastItem
                    key={toast.id}
                    {...toast}
                    onClose={() => {
                        removeToast(toast.id)
                    }}
                />
            ))}
        </div>
    )
}

export default ToastContainer
