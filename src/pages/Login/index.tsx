import { FC } from 'react'
import { useNavigate, Outlet, Link, useLocation } from 'react-router-dom'
import './index.scss'
const Login: FC = () => {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <>
            <h1>Login</h1>
            <br />
            <Link to='/usercenter'>index</Link>
            <br />
            <Link to='/usercenter/chr1'>index</Link>
        </>

    )
}
export default Login
