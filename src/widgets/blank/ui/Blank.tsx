import { Outlet } from 'react-router'
import style from './Blank.module.css'
function Blank() {
    return (
        <main className={style.container}>
            <Outlet />
        </main>
    )
}

export default Blank
