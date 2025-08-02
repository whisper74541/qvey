import { useToast } from '@/widgets/toast/hooks'
import { useCallback, useEffect } from 'react'

function DEMO_ToastPopupPage() {
    const { addToast, toasts } = useToast()

    useEffect(() => {
        console.log(toasts)
    }, [])

    const handleInfoToast = useCallback(() => addToast({ message: 'Message', type: 'info' }), [])
    const handleErrorToast = useCallback(() => addToast({ message: 'Message', type: 'error' }), [])
    const handleWarnToast = useCallback(() => addToast({ message: 'Message', type: 'warning' }), [])
    const handleSuccessToast = useCallback(() => addToast({ message: 'Message', type: 'success' }), [])
    return (
        <div>
            <h1>Toast Popup DEMO Page</h1>
            <hr />
            <h2>활성화 된 Toalst</h2>
            <span>List : </span>
            {toasts.map((toast) => (
                <span>{toast.message}</span>
            ))}
            <hr />
            <h2>info Taost</h2>
            <button onClick={handleInfoToast}>Info toast Open</button>
            <hr />
            <h2>success Taost</h2>
            <button onClick={handleSuccessToast}>success toast Open</button>
            <hr />
            <h2>error Taost</h2>
            <button onClick={handleErrorToast}>error toast Open</button>
            <hr />
            <h2>warning Taost</h2>
            <button onClick={handleWarnToast}>warn toast Open</button>
        </div>
    )
}
export default DEMO_ToastPopupPage
