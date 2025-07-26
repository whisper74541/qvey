import { type Menu } from '@/shared/lib/menu'
import { useState } from 'react'
import { getSideMenuList } from '../lib'
import { Link } from 'react-router'

function SideMenu() {
    const [menus, setMenus] = useState<Menu[]>(getSideMenuList)
    return (
        <div>
            <ul>
                {menus.map(({ name, path }, index) => (
                    <li key={index}>
                        <Link to={path}>
                            <p>{name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default SideMenu
