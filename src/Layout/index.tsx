import { FC, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Layout } from 'antd'
import LayoutMenu from './components/Menu'
import LayoutBreadcrumb from './components/Breadcrumb'
import './index.scss'
import RouterBefore from '@/router/routerBefore'

const Layout_: FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const { Header, Content, Footer, Sider } = Layout
  const locationData = useLocation().pathname.split('/')

  return (
    <Layout id='Layout'>
      <Sider
        onCollapse={val => setCollapsed(val)}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo">演示系统</div>
        <LayoutMenu location={locationData} />
      </Sider>
      <Layout className="layout_side">
        <Header className="header" />
        <Content className='content'>
          <LayoutBreadcrumb location={locationData} />
          <div className='outlet'>
            <RouterBefore>
              <Outlet />
            </RouterBefore>
          </div>
        </Content>
        <Footer className='footer'>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Layout_
