import { FC } from 'react'
import { useNavigate, Outlet, Link,useLocation } from 'react-router-dom'
import './index.less'
const Login: FC = () => {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);
    
    return (
        <>
            <h1>Login</h1>
            <br />
            <Link to='/usercenter'>index</Link>
            <br />
        </>

    )
}
export default Login
