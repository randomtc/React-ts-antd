import { useNavigate } from 'react-router-dom'
import { Menu } from 'antd'
import { MenuItem, getItem } from '../../types'
import { useAliveController } from 'react-activation'
import { type RouterType, routers } from '@/router'
interface Props { location: string[] }
const LayoutMenu = ({ location }: Props) => {
    const navigate = useNavigate()
    const [_, level1, level2] = location

    const { clear } = useAliveController()
    //侧边栏导航信息处理

    function items(arr: RouterType[]) {
        const itemArr: MenuItem[] = []
        arr.forEach((item: RouterType) => {
            item.label && itemArr.push(
                getItem(
                    item.label,
                    item.path!,
                    item.icon ?? null,
                    item.children && items(item.children)
                )
            )
        })
        return itemArr
    }


    function onNavigate(e: any) {
        clear() //切换组件时清除所有的KeepLive缓存
        navigate(e.keyPath.reverse().join('/'))
    }


    return (
        <Menu
            onSelect={e => onNavigate(e)}
            theme="dark"
            defaultOpenKeys={[level1]}
            defaultSelectedKeys={[level2]}
            mode="inline"
            items={items(routers[2]?.children!)}

        />
    )
}

export default LayoutMenu