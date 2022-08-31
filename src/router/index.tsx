import { useRoutes, Navigate } from 'react-router-dom'
import Login from '@/pages/Login'
import Example from '@/pages/Example'
import Layout from '@/Layout'
import Chr1 from '@/pages/UserCenter/Chr1'
import Chr2 from '@/pages/UserCenter/Chr2'
import Chr3 from '@/pages/UserManage/Chr3'
import Chr4 from '@/pages/UserManage/Chr4'

type routerType = {
    path?: string
    index?: boolean
    element?: React.ReactNode
    children?: routerType[]
    caseSensitive?: boolean
}
export default function AppRouter() {
    const routers: routerType[] = [
        { path: '', element: <Navigate to='login' /> },
        { path: 'login', element: <Login /> },
        { path: 'example', element: <Example /> },
        {
            path: '', element: <Layout />, children: [
                {
                    path: 'usercenter/', children: [
                        { path: 'chr1', element: <Chr1 /> },
                        { path: 'chr2', element: <Chr2 /> },
                        { path: 'example', element: <Example /> },
                    ]
                },
                {
                    path: 'usemanage/', children: [
                        { path: 'chr3', element: <Chr3 /> },
                        { path: 'chr4', element: <Chr4 /> },
                    ]
                },

            ]
        },
    ]
    return useRoutes(routers)
}
