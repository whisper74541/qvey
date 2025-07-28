import { Outlet } from 'react-router'
import style from './Dashboard.module.css'
import { Header } from '../../header'
import { Aside } from '../../aside'
import { RegisterPage } from '../../../page/register'
import { NoticeNewPage } from '../../../page/noticeNew'
import { NoticeListPage } from '../../../page/noticeList'

function Dashboard() {
    return (
        <div className={style.container}>
            <Aside />
            <main>
                <Header />
                {/* <RegisterPage /> */}
                {/* <NoticeNewPage /> */}
                <NoticeListPage />
            </main>
        </div>
    )
}

export default Dashboard
