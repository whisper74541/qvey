import { TOAST_ICON } from '../lib'
import type { ToastItemProps } from '../types'
import styles from './ToastItem.module.css'

const ToastItem = (toast: ToastItemProps) => {
    const { message, type, buttonLabel, onButtonClick } = toast
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
            <button
                className={styles.closeButton}
                onClick={() => {
                    /* TODO: 제거 로직 예정 */
                }}
            >
                ×
            </button>
        </div>
    )
}

export default ToastItem
