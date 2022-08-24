import { FC } from 'react'
import { useNavigate, Outlet, Link } from 'react-router-dom'
import './index.less'
const Login: FC = () => {
    const navigate = useNavigate()
    return (
        <>
            <Link to='/example'>example</Link>
            <br />
            <Link to='/index'>index</Link>
        </>

    )
}
export default Login
