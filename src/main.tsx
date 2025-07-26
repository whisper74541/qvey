import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// React Query에서 불러오기
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './css/root.css'
import './css/reset.css'
import './css/global.css'
import App from './App.tsx'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

// ② QueryClient 인스턴스 생성
const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* ③ QueryClientProvider로 App 감싸기 */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
)
