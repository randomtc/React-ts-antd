import { useNavigate } from 'react-router-dom'
import { Menu } from 'antd'
import { type MenuType, type MenuItem, getItem } from '../../types'
import { useAliveController } from 'react-activation'
interface Props {
    menuData: MenuType
    location: string[]
}
const LayoutMenu = (props: Props) => {
    const navigate = useNavigate()
    const { menuData, location } = props
    const [_, level1, level2] = location
    const { clear } = useAliveController()
    //侧边栏导航信息处理
    function items(obj: MenuType): MenuItem[] {
        const item = []
        for (const key in obj) {
            item.push(
                getItem(
                    obj[key].label,
                    key,
                    obj[key].icon ?? null,
                    obj[key].children && items(obj[key].children!)
                )
            )
        }
        return item
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
            items={items(menuData)}
        />
    )
}

export default LayoutMenu