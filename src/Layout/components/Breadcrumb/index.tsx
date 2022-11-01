import { Breadcrumb } from 'antd'
import { routers } from '@/router'
interface Props { location: string[] }
const LayoutBreadCrumb = ({ location }: Props) => {
    //页面刷新侧边栏不重置 以及配合显示面包屑
    const [_, level1, level2, level3] = location
    
    const breadcrumbObj: Record<string, string> = {
        add: '添加',
        edit: '编辑',
        details: '详情'
    }
    function getLabel(routerArr: any) {
        routerArr?.map((item: any) => {
            if (item.label) {
                breadcrumbObj[item.path] = item.label
                item?.children && getLabel(item?.children)
            }
        })
    }
    getLabel(routers[2].children)

    function renderBreadcrumb() {
        if ([2, 3].includes(location.length)) {
            return (
                <>
                    <Breadcrumb.Item>{breadcrumbObj?.[level1]}</Breadcrumb.Item>
                    <Breadcrumb.Item>{breadcrumbObj?.[level2]}</Breadcrumb.Item>
                </>
            )
        } else if (location.length === 4) {
            return (
                <>
                    <Breadcrumb.Item>{breadcrumbObj?.[level1]}</Breadcrumb.Item>
                    <Breadcrumb.Item>{breadcrumbObj?.[level2]}</Breadcrumb.Item>
                    <Breadcrumb.Item>{breadcrumbObj?.[level3]}</Breadcrumb.Item>
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