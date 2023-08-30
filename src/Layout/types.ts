import type { MenuProps } from 'antd'
export type MenuItem = Required<MenuProps>['items'][number]

export function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem
}

export type MenuType = {
    [k: string]: {
        label: string
        path:string
        icon?: React.ReactNode
        children?: MenuType
    }
}


