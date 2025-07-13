import { Outlet } from 'react-router'
import style from './Dashboard.module.css'

function Dashboard() {
    return (
        <div className={style.container}>
            <aside>aside..</aside>
            <main>
                <header>Header..</header>
                <Outlet />
            </main>
        </div>
    )
}

export default Dashboard
