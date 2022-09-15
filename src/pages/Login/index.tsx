import { FC } from 'react'
import { useNavigate, Outlet, Link } from 'react-router-dom'
import './index.less'
const Login: FC = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1>Login</h1>
            <Link to='/example'>example</Link>
            <br />
            <Link to='/usercenter'>index</Link>
            <br />
        </>

    )
}
export default Login
