import { useRoutes, Navigate } from 'react-router-dom'
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
}

export const routers: RouterType[] = [
    { path: '', element: <Navigate to='login' /> },
    { path: 'login', element: <Login /> },
    {
        element: <AliveScope><Layout /></AliveScope>, children: [
            {
                path: 'usercenter', children: [
                    { path: 'chr1', element: <KeepAlive cacheKey="trainapply"><Chr1 /></KeepAlive> },
                    { path: 'chr1/add', element: <Chr1Operation /> },
                    { path: 'chr1/edit', element: <Chr1Operation /> },
                    { path: 'chr2', element: <Chr2 />, pover: true },
                    { path: 'example', element: <Example /> },
                ]
            },
            {
                path: 'usemanage', children: [
                    { path: 'chr3', element: <Chr3 /> },
                    { path: 'chr4', element: <Chr4 /> },
                ]
            },

            { path: 'useredit', element: <UserEdit /> },

            { path: 'nopermission', element: <NoPermission /> },
        ]
    },
]

export default function AppRouter() {
    return useRoutes(routers)
}
