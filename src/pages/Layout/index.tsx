import { FC, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Breadcrumb, Layout, Menu } from 'antd'
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined, } from '@ant-design/icons'
import { type MenuItem, type pathNameType, getItem } from './types';
import './index.less'

const Layout_: FC = () => {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)
  const { Header, Content, Footer, Sider } = Layout
  const [_, level1, level2, level3] = useLocation().pathname.split('/')

  const pathNameObj: pathNameType = {
    usercenter: { name: '用户中心' },
    chr1: { name: '测试1', path: `usercenter/chr1` },
    chr2: { name: '测试2', path: `usercenter/chr2` },
    /******/
    usemanage: { name: '用户管理' },
    chr3: { name: '测试3', path: `usemanage/chr3` },
    chr4: { name: '测试4', path: `usemanage/chr4` },
    /******/
    add: { name: '添加' },
    edit: { name: '编辑' },
    details: { name: '详情' }
  }

  const items: MenuItem[] = [
    getItem('用户中心', 'usercenter', <UserOutlined />, [
      getItem('测试1', 'chr1', <DesktopOutlined />),
      getItem('测试2', 'chr2', <PieChartOutlined />),
    ]),
    getItem('用户管理', 'usemanage', <FileOutlined />, [
      getItem('测试2', 'chr3', <TeamOutlined />),
      getItem('测试3', 'chr4', <DesktopOutlined />),
    ]),
  ]

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={value => setCollapsed(value)}
      >
        <div className="logo">演示系统</div>
        <Menu
          onSelect={e => navigate(pathNameObj[e.key].path!)}
          theme="dark"
          defaultOpenKeys={[level1]}
          defaultSelectedKeys={[level2]}
          mode="inline"
          items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>演示系统</Breadcrumb.Item>
            <Breadcrumb.Item>{pathNameObj[level1]?.name}</Breadcrumb.Item>
            <Breadcrumb.Item>{pathNameObj[level2]?.name}</Breadcrumb.Item>
            <Breadcrumb.Item>{pathNameObj?.[level3]?.name}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: '80vh' }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default Layout_
