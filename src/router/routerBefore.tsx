import { Navigate } from 'react-router-dom'
export default function RouterBefore({ children }: any) {
    const token = true
    //登录鉴权
    if (token) {
        return <>{children}</>
    } else {
        return <Navigate to={'/401'} replace />
    }
}
