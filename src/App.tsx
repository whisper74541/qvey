import { Router } from './app/router'
import { ToastProvider } from './widgets/toast/model'
import { ToastContainer } from './widgets/toast/ui'

function App() {
    return (
        <ToastProvider>
            <Router />
            <ToastContainer />
        </ToastProvider>
    )
}

export default App
