import { type Menu } from '@/shared/lib/menu'
import { useState } from 'react'
import { getSideMenuList } from '../lib'
import { Link } from 'react-router'
import style from './SideMenu.module.css'
function SideMenu() {
    const [menus, setMenus] = useState<Menu[]>(getSideMenuList)
    return (
        <nav className={style.container}>
            <ul>
                {menus.map(({ name, path }, index) => (
                    <li key={index}>
                        {/* <li key={index} className={name === '자유게시판' ? style.on : ''}> CSS 예시*/}
                        <div className={style.wrap}>
                            <Link to={path}>
                                <p>{name}</p>
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default SideMenu
