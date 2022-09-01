import { FC, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Breadcrumb, Layout, Menu } from 'antd'
import { DesktopOutlined, FileOutlined, TeamOutlined } from '@ant-design/icons'
import { type pathNameType, type operationType, items } from './types'
import './index.less'
const Layout_: FC = () => {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)
  const { Header, Content, Footer, Sider } = Layout
  //页面刷新侧边栏不重置 以及配合显示面包屑
  const [_, level1, level2, level3] = useLocation().pathname.split('/')
  //导航栏信息
  const pathNameObj: pathNameType = {
    usercenter: {
      label: '用户中心',
      children: {
        chr1: { label: '测试1', path: `usercenter/chr1`, icon: <DesktopOutlined /> },
        chr2: { label: '测试2', path: `usercenter/chr2`, icon: <FileOutlined />  },
        example: { label: '示例', path: `usercenter/example`, icon: <TeamOutlined />  },
      }
    },
    usemanage: {
      label: '用户管理',
      children: {
        chr3: { label: '测试3', path: `usemanage/chr3` },
        chr4: { label: '测试4', path: `usemanage/chr4` },
      }
    },
  }
  const operation: operationType = {
    add: '添加',
    edit: '编辑',
    details: '详情'
  }
  
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={value => setCollapsed(value)}
      >
        <div className="logo">演示系统</div>
        <Menu
          onSelect={e => navigate(pathNameObj[e.keyPath.at(-1)!].children![e.key].path!)}
          theme="dark"
          defaultOpenKeys={[level1]}
          defaultSelectedKeys={[level2]}
          mode="inline"
          items={items(pathNameObj)}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>演示系统</Breadcrumb.Item>
            <Breadcrumb.Item>{pathNameObj[level1].label}</Breadcrumb.Item>
            <Breadcrumb.Item>{pathNameObj[level1].children![level2].label}</Breadcrumb.Item>
            <Breadcrumb.Item>{operation[level3]}</Breadcrumb.Item>
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
