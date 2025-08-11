import { SideMenu } from '@/features/menu'
import style from './Aside.module.css'
function Aside() {
    return (
        <aside className={style.container}>
            <div className={style.logo}>Logo</div>
            <SideMenu />
        </aside>
    )
}
export default Aside
