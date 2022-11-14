
import { FC } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const Login: FC = () => {


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
