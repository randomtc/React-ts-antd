import { FC } from 'react'
import { Alert, message } from 'antd';
const Chr3: FC = () => {
    return (
        <div>
            <>
                <Alert message="Success Text" type="success" />
                <Alert message="Info Text" type="info" />
                <Alert message="Warning Text" type="warning" />
                <Alert message="Error Text" type="error" />
            </>
            <div onClick={() => {
                message.success('wwww')
                message.error('sss')
                message.warning('sssssss')
            }}>2</div>
        </div >
    )
}

export default Chr3