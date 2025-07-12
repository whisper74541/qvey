import { Outlet } from "react-router"
import style from "./Dashboard.module.css"

function Dashboard() {
    return (
        <div className={style.container}>
            <header>
                header..
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default Dashboard