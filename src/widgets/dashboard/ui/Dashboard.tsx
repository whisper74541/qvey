import { Outlet } from 'react-router'
import style from './Dashboard.module.css'
import { Header } from '../../header'
import { Aside } from '../../aside'

function Dashboard() {
    return (
        <div className={style.container}>
            <Aside />
            <main>
                <Header />
                <Outlet />
            </main>
        </div>
    )
}

export default Dashboard
