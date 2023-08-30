import React, { useState } from 'react'
import { Button, Form, Input, Tabs } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import './index.less'
import { useNavigate } from 'react-router-dom'
interface ApiForm {
    username: string
    password: string
    remember: boolean
}
const Index: React.FC = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const onFinish = async (val: ApiForm) => {
        navigate('/staffmanage')
    }
    return (
        <>
            <div className="login_page">
                <div className="login_header">
                    <span>医养科技 居家养老系统</span>
                </div>

                <Tabs
                    defaultActiveKey="1"
                    centered
                    items={[
                        {
                            label: '账号密码登录',
                            key: '1',
                            children: (
                                <>
                                    <div className="box_center">
                                        <Form
                                            name="normal_login"
                                            className="login-form"
                                            initialValues={{ remember: true }}
                                            onFinish={onFinish}
                                        >
                                            <Form.Item
                                                name="username"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: '请输入用户名!'
                                                    }
                                                ]}
                                            >
                                                <Input
                                                    prefix={
                                                        <UserOutlined className="site-form-item-icon" />
                                                    }
                                                    placeholder="用户名"
                                                />
                                            </Form.Item>
                                            <Form.Item
                                                name="password"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: '请输入密码!'
                                                    }
                                                ]}
                                            >
                                                <Input
                                                    prefix={
                                                        <LockOutlined className="site-form-item-icon" />
                                                    }
                                                    type="password"
                                                    placeholder="密码"
                                                />
                                            </Form.Item>

                                            <Form.Item>
                                                <Button
                                                    type="primary"
                                                    htmlType="submit"
                                                    className="login-form-button"
                                                    size="large"
                                                    loading={loading}
                                                >
                                                    登录
                                                </Button>
                                            </Form.Item>
                                        </Form>
                                    </div>
                                </>
                            )
                        }
                    ]}
                />
            </div>
        </>
    )
}

export default Index
