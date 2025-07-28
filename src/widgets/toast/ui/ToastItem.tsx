import { TOAST_ICON } from '../lib'
import type { ToastItemProps } from '../types'
import styles from './ToastItem.module.css'

const ToastItem = (toast: ToastItemProps) => {
    const { message, type, buttonLabel, onButtonClick, onClose } = toast
    const Icon = TOAST_ICON[type]
    const typeClass = styles[type] ?? ''

    return (
        <div className={`${styles.toast} ${typeClass}`} role="alert">
            <div className={styles.content}>
                <span className={styles.icon}>{Icon}</span>
                <span className={styles.message}>{message}</span>
            </div>

            {buttonLabel && (
                <button className={styles.navButton} onClick={onButtonClick}>
                    {buttonLabel}
                </button>
            )}
            <button className={styles.closeButton} onClick={onClose}>
                ×
            </button>
        </div>
    )
}

export default ToastItem
