import { Breadcrumb } from 'antd'
import type { MenuType } from '../../types';
interface Props {
    menuData: MenuType
    location: string[]
}
const LayoutBreadCrumb = (props: Props) => {
    const { menuData, location } = props
    //页面刷新侧边栏不重置 以及配合显示面包屑
    const [_, level1, level2, level3] = location
    const operation: Record<string, '添加' | '编辑' | '详情'> = {
        add: '添加',
        edit: '编辑',
        details: '详情'
    }
    function renderBreadcrumb() {
        if (location.length === 2) {
            return (
                <>
                    <Breadcrumb.Item>{menuData[level1]?.label}</Breadcrumb.Item>
                    <Breadcrumb.Item>{operation[level2]}</Breadcrumb.Item>
                </>
            )
        } else if (location.length === 3) {
            return (
                <>
                    <Breadcrumb.Item>{menuData[level1]?.label}</Breadcrumb.Item>
                    <Breadcrumb.Item>{menuData[level1].children![level2]?.label}</Breadcrumb.Item>
                    <Breadcrumb.Item>{operation[level3]}</Breadcrumb.Item>
                </>
            )
        }
    }
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            {renderBreadcrumb()}
        </Breadcrumb>
    )
}

export default LayoutBreadCrumb