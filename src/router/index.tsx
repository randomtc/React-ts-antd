import { useRoutes, Navigate } from 'react-router-dom'
import { DesktopOutlined, FileOutlined } from '@ant-design/icons'
import KeepAlive, { AliveScope } from 'react-activation' //KeepAlive路由缓存
import Layout from '@/Layout'
import Login from '@/pages/Login'
import Example from '@/pages/Example'
import Chr1 from '@/pages/UserCenter/Chr1'
import Chr1Operation from '@/pages/UserCenter/Chr1/operation'
import Chr2 from '@/pages/UserCenter/Chr2'
import Chr3 from '@/pages/UserManage/Chr3'
import Chr4 from '@/pages/UserManage/Chr4'
import UserEdit from '@/pages/UserEdit'
import NoPermission from '@/components/NoPermission'

export type RouterType = {
    path?: string
    index?: boolean
    element?: React.ReactNode
    children?: RouterType[]
    caseSensitive?: boolean
    pover?: boolean
    label?: string
    icon?: React.ReactNode,
}

export const routers: RouterType[] = [
    { path: '', element: <Navigate to='login' /> },
    { path: 'login', element: <Login /> },
    {
        element: <AliveScope><Layout /></AliveScope>,
        children: [
            {
                path: 'usercenter',
                label: '用户中心',
                icon: <DesktopOutlined />,
                children: [
                    {
                        path: 'chr1',
                        label: '测试1',
                        icon: <DesktopOutlined />,
                        element: <KeepAlive cacheKey="trainapply"><Chr1 /></KeepAlive>
                    },
                    { path: 'chr1/add', element: <Chr1Operation /> },
                    { path: 'chr1/edit', element: <Chr1Operation /> },
                    
                    {
                        path: 'chr2',
                        label: '测试2',
                        icon: <FileOutlined />,
                        element: <Chr2 />,
                        pover: true
                    },
                    {
                        path: 'example',
                        label: '示例',
                        element: <Example />
                    },
                    {
                        path: 'san',
                        label: '三级',
                        children: [
                            {
                                path: 'chr3',
                                label: '测试3',
                                icon: <DesktopOutlined />,
                                element: <KeepAlive cacheKey="trainapply"><Chr3 /></KeepAlive>
                            },
                          
                        ]
                    },
                ]
            },
            {
                path: 'useredit',
                label: '用户编辑',
                element: <UserEdit />
            },

            { path: 'nopermission', element: <NoPermission /> },
        ]
    },
]

export default function AppRouter() {
    return useRoutes(routers)
}
