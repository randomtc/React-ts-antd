import { FC, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Breadcrumb, Layout, Menu } from 'antd'
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined, } from '@ant-design/icons'
import { type MenuItem, type pathNameType, getItem } from './types'
import './index.less'

const Layout_: FC = () => {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)
  const { Header, Content, Footer, Sider } = Layout
  const [_, level1, level2, level3] = useLocation().pathname.split('/')

  //面包屑信息
  const pathNameObj: pathNameType = {
    usercenter: { label: '用户中心', key: 'usercenter' },
    chr1: { label: '测试1', key: 'chr1', path: `usercenter/chr1` },
    chr2: { label: '测试2', key: 'chr2', path: `usercenter/chr2` },
    example: { label: '示例', key: 'example', path: `usercenter/example` },
    /******/
    usemanage: { label: '用户管理', key: 'usemanage' },
    chr3: { label: '测试3', key: 'chr3', path: `usemanage/chr3` },
    chr4: { label: '测试4', key: 'chr4', path: `usemanage/chr4` },
    /******/
    add: { label: '添加' },
    edit: { label: '编辑' },
    details: { label: '详情' }
  }
 
  const items: MenuItem[] = [
    getItem(label('usercenter'), key('usercenter'), <UserOutlined />, [
      getItem(label('chr1'), key('chr1'), <DesktopOutlined />),
      getItem(label('chr2'), key('chr2'), <PieChartOutlined />),
      getItem(label('example'), key('example'), <PieChartOutlined />),
    ]),
    getItem(label('usemanage'), key('usemanage'), <FileOutlined />, [
      getItem(label('chr3'), key('chr3'), <TeamOutlined />),
      getItem(label('chr4'), key('chr4'), <DesktopOutlined />),
    ]),
  ]
  
  function key(k: string): string {
    return Object.values(pathNameObj).filter(itm => itm.key === k)[0].key!
  }
  function label(k: string): string {
    return Object.values(pathNameObj).filter(itm => itm.key === k)[0].label!
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
            <Breadcrumb.Item>{pathNameObj[level1]?.label}</Breadcrumb.Item>
            <Breadcrumb.Item>{pathNameObj[level2]?.label}</Breadcrumb.Item>
            <Breadcrumb.Item>{pathNameObj?.[level3]?.label}</Breadcrumb.Item>
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
