import { FC, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DatePicker, Space } from 'antd';
const Chr1: FC = () => {
    const navigate = useNavigate()
    useEffect(() => {
        //数据赋值
    }, [])

    return (
        <div>
            <DatePicker />
            Chr1
            <br />
            <Link to='add' state={{ type: 'add' }}>add</Link>
            <br />
            <Link to='edit' state={{ type: 'edit' }}>edit</Link>
            <br />
            <button onClick={() => navigate('add', { state: { type: 'add' } })}>
                新增
            </button>
        </div>
    )
}
export default Chr1