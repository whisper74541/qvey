import menuConfig from '@/shared/config/menuConfig'

export interface Menu {
    name: string
    path: string
}

export const getMenus = (): Menu[] => menuConfig.menus
