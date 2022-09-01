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

export type pathNameType = {
    [k: string]: {
        label: string
        path?: string
        icon?: React.ReactNode
        children?: pathNameType
    }
}

export interface operationType {
    [k: string]: string
}

//侧边栏导航信息处理
export function items(obj: pathNameType): MenuItem[] {
    const item = []
    for (const key in obj) {
        item.push(
            getItem(
                obj[key].label,
                key,
                obj[key].icon ?? null,
                obj[key].children ? items(obj[key].children!) : null!
            )
        )
    }
    return item
}