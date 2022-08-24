import { useRoutes, Navigate } from 'react-router-dom'
import Login from '@/pages/Login'
import Example from '@/pages/Example'
import Index from '@/pages/Index'
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
        { path: 'index', element: <Index /> },
        { path: 'example', element: <Example /> },
    ]
    return useRoutes(routers)
}
