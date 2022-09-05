import { useNavigate } from 'react-router-dom'
import { Menu } from 'antd'
import { type menuType, type MenuItem, getItem } from '../../types'
interface Props {
    menuData: menuType
    location: string[]
}
const LayoutMenu = (props: Props) => {
    const navigate = useNavigate()
    const { menuData, location } = props
    const [_, level1, level2] = location
    
    //侧边栏导航信息处理
    function items(obj: menuType): MenuItem[] {
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
    return (
        <Menu
            onSelect={e => navigate(e.keyPath.reverse().join('/'))}
            theme="dark"
            defaultOpenKeys={[level1]}
            defaultSelectedKeys={[level2]}
            mode="inline"
            items={items(menuData)}
        />
    )
}

export default LayoutMenu