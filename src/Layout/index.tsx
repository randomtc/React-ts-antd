import { FC, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Layout } from 'antd'
import { DesktopOutlined, FileOutlined, TeamOutlined } from '@ant-design/icons'
import { type menuType } from './types'
import LayoutMenu from './components/Menu'
import LayoutBreadCrumb from './components/Breadcrumb'
import './index.less'
const Layout_: FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const { Header, Content, Footer, Sider } = Layout
  const locationData = useLocation().pathname.split('/')
  //导航栏信息
  const menuData: menuType = {
    usercenter: {
      label: '用户中心',
      children: {
        chr1: { label: '测试1', icon: <DesktopOutlined /> },
        chr2: { label: '测试2', icon: <FileOutlined /> },
        example: { label: '示例', icon: <TeamOutlined /> },
      }
    },
    usemanage: {
      label: '用户管理',
      children: {
        chr3: { label: '测试3' },
        chr4: { label: '测试4' },
      }
    },
  }
  return (
    <Layout id='Layout' style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed}     >
        <div className="logo">演示系统</div>
        <LayoutMenu menuData={menuData} location={locationData} />
      </Sider>
      <Layout className="site_layout">
        <Header className="header" />
        <Content className='content'>
          <LayoutBreadCrumb menuData={menuData} location={locationData} />
          <div className='outlet'>
            <Outlet />
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
