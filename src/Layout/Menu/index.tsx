import { useNavigate } from 'react-router-dom'
import { Menu } from 'antd'
import { MenuItem, getItem } from '../types'
import { type RouterType } from '@/router'
import { createFromIconfontCN } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { useEffect, useState } from 'react'
interface Props {
    location: string[]
}
const LayoutMenu = ({ location }: Props) => {
    const [level, setLevel] = useState<any>()
    const [openKeysArr, setOpenKeys] = useState<any>()
    useEffect(() => {
        let level1 = '',
            level2 = ''
        if (location.length === 3) {
            level1 = location[1]
            level2 = location[2]
        } else {
            level1 = location[0]
            level2 = location[1]
        }
        setOpenKeys([level1, ...(openKeysArr ?? [])]) //路由跳转选择menu并高亮
        setLevel({ level1, level2 })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    const menuList = useSelector<RootState, any>(state => state.login.menuList)
    const navigate = useNavigate()
    const IconFont = createFromIconfontCN({
        scriptUrl: ['//at.alicdn.com/t/c/font_3877384_rpsmlo5lyt8.js']
    })

    // const { clear } = useAliveController()
    //侧边栏导航信息处理
    function items(arr: RouterType[]) {
        const itemArr: MenuItem[] = []
        arr.forEach((item: RouterType) => {
            item.label &&
                itemArr.push(
                    getItem(
                        item.label,
                        item.path!,
                        <IconFont type={item?.icon!} /> ?? null,
                        item.children && items(item.children)
                    )
                )
        })
        return itemArr
    }
    function onNavigate(e: any) {
        // clear() //切换组件时清除所有的KeepLive缓存
        navigate(e.keyPath.reverse().join('/'))
    }

    return (
        <>
            {level && (
                <Menu
                    onSelect={e => onNavigate(e)}
                    theme="dark"
                    selectedKeys={[level?.level1, level?.level2]}
                    openKeys={openKeysArr}
                    onOpenChange={openKeys => setOpenKeys(openKeys)}
                    defaultOpenKeys={[level?.level1]}
                    defaultSelectedKeys={[level?.level2]}
                    mode="inline"
                    items={items(menuList)}
                />
            )}
        </>
    )
}

export default LayoutMenu
