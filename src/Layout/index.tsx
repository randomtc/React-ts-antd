import { FC, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Layout } from 'antd'
import LayoutMenu from './Menu'
import LayoutHeader from './Header'
import LayoutBreadcrumb from './Breadcrumb'
import './index.less'
import RouterBefore from '@/router/routerBefore'

const Layout_: FC = () => {
    const { Header, Content, Sider } = Layout
    const locationData = useLocation().pathname.split('/')

    return (
        <Layout id="Layout">
            <Sider breakpoint="lg" collapsedWidth="0">
                <div className="logo">居家养老系统</div>
                <LayoutMenu location={locationData} />
            </Sider>
            <Layout className="layout_side">
                <Header className="header">
                    <LayoutHeader />
                </Header>
                <Content className="content">
                    <LayoutBreadcrumb location={locationData} />
                    <div className="outlet">
                        <RouterBefore>
                            <Outlet />
                        </RouterBefore>
                    </div>
                </Content>
                {/* <Footer className="footer">Ant Design ©2018 Created by Ant UED</Footer> */}
            </Layout>
        </Layout>
    )
}

export default Layout_
