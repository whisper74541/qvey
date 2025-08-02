import { createBrowserRouter, RouterProvider } from 'react-router'
import { HomePage } from '../../page/home'
import { Dashboard } from '../../widgets/dashboard'
import { Blank } from '../../widgets/blank'
import { RegisterPage } from '../../page/register'
import { NoticeNewPage } from '../../page/noticeNew'
import { LoginPage } from '../../page/login'
import { BookPage } from '../../page/book'
import { DEMO_ToastPopupPage } from '@/page/DEMO'

const router = createBrowserRouter([
    {
        path: '/',
        Component: Dashboard,
        children: [
            { index: true, Component: HomePage },
            { path: '/notice/new', Component: NoticeNewPage },
            { path: '/demo/toast', Component: DEMO_ToastPopupPage },
        ],
    },
    {
        path: '/register',
        Component: Blank,
        children: [{ index: true, Component: RegisterPage }],
    },
    {
        path: '/login',
        Component: Blank,
        children: [{ index: true, Component: LoginPage }],
    },
    {
        path: '/book',
        Component: Blank, // ← Blank 레이아웃 사용
        children: [{ index: true, Component: BookPage }],
    },
])
function Router() {
    return <RouterProvider router={router} />
}
export default Router
