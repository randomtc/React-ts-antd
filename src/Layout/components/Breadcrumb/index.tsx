import { Breadcrumb } from 'antd'
import type { operationType, menuType } from '../../types';
interface Props {
    menuData: menuType
    location:string[]
}
const LayoutBreadCrumb = (props: Props) => {
    const { menuData,location } = props
    //页面刷新侧边栏不重置 以及配合显示面包屑
    const [_, level1, level2, level3] = location
    const operation: operationType = {
        add: '添加',
        edit: '编辑',
        details: '详情'
    }
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>{menuData[level1]?.label}</Breadcrumb.Item>
            <Breadcrumb.Item>{menuData[level1].children![level2]?.label}</Breadcrumb.Item>
            <Breadcrumb.Item>{operation[level3]}</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default LayoutBreadCrumb