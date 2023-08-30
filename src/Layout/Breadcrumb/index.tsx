import { Breadcrumb } from 'antd'
import { type RouterType, routers } from '@/router'
interface Props {
    location: string[]
}
const LayoutBreadCrumb = ({ location }: Props) => {
    const breadcrumbObj: Record<string, string> = {
        add: '添加',
        edit: '编辑',
        details: '详情'
    }
    function getLabel(routerArr: RouterType[]) {
        // eslint-disable-next-line array-callback-return
        routerArr?.map((item: RouterType) => {
            if (item.label) {
                breadcrumbObj[item.path!] = item.label
                item?.children && getLabel(item?.children)
            }
        })
    }
    getLabel(routers[2].children!)

    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            {location.map((item: string) => (
                <Breadcrumb.Item key={item}>{breadcrumbObj?.[item]}</Breadcrumb.Item>
            ))}
        </Breadcrumb>
    )
}

export default LayoutBreadCrumb
