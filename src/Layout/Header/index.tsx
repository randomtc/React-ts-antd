import { Avatar, Dropdown, Space } from 'antd'
import type { MenuProps } from 'antd'
import { UserOutlined, DownOutlined, LogoutOutlined, ToolOutlined } from '@ant-design/icons'
const LayoutHeader = () => {
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <div onClick={() => 1}>
                    <ToolOutlined />
                    <span style={{ marginLeft: 10 }}>修改密码</span>
                </div>
            )
        },
        {
            key: '2',
            label: (
                <div onClick={() => 1}>
                    <LogoutOutlined />
                    <span style={{ marginLeft: 10 }}>退出登录</span>
                </div>
            )
        }
    ]
    return (
        <div style={{ textAlign: 'right' }}>
            <Dropdown menu={{ items }}>
                <Space>
                    <Avatar size={32} icon={<UserOutlined />} />
                    Hover me
                    <DownOutlined style={{ marginRight: '2vw' }} />
                </Space>
            </Dropdown>
        </div>
    )
}

export default LayoutHeader
