import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App'
import { ConfigProvider } from 'antd'
import zh_CN from 'antd/es/locale/zh_CN' //antd组件中文
import '@/assets/styles/reset.css'  //去除标签默认样式
import '@/assets/fonts/font.less' //自定义字体
import 'antd/dist/antd.less'  //antd样式引入
import 'moment/locale/zh-cn'  //antd日期中文
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <ConfigProvider locale={zh_CN}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
)

