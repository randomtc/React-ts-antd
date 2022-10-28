import React, { FC } from 'react'

const NoPermission: FC = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '40px'
        }}>
            您没有此页面查看权限
        </div>
    )
}

export default NoPermission