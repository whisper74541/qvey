import { createBrowserRouter, RouterProvider } from 'react-router'
import { HomePage } from '../../page/home'
import { Dashboard } from '../../widgets/dashboard'
import { Blank } from '../../widgets/blank'
import { RegisterPage } from '../../page/register'
import { NoticeNewPage } from '../../page/noticeNew'
import { NoticeListPage } from '../../page/noticeList'

const router = createBrowserRouter([
    {
        path: '/',
        Component: Dashboard,
        children: [
            { index: true, Component: HomePage },
            { path: '/notice/new', Component: NoticeNewPage },
            {path: '/notice', Component: NoticeListPage,}
        ],
    },
    {
        path: '/register',
        Component: Blank,
        children: [{ index: true, Component: RegisterPage }],
    },
])
function Router() {
    return <RouterProvider router={router} />
}
export default Router
