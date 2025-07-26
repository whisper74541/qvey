import menuConfig from '@/shared/config/menuConfig'
import type { Menu } from '@/shared/lib/menu'
export const getSideMenuList = (): Menu[] => {
    const _menuList = menuConfig.menus

    /**
     * TODO : 여기서 권한 관리건 뭐건 간에 Menu filtering
     * 아무 의미 없는 map 함수임
     */
    const result = _menuList.map((item) => item)
    return result
}
