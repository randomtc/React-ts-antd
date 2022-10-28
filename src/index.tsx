import ReactDOM from 'react-dom/client';
import App from './App'
import { ConfigProvider } from 'antd'
import '@/assets/styles/reset.css'  //去除标签默认样式
import '@/assets/fonts/font.less' //自定义字体
import 'antd/dist/antd.variable.min.css'
import zhCN from 'antd/es/locale/zh_CN'//antd中文
import 'dayjs/locale/zh-cn'//antd日期中文
import './test/mocks' //引入mock
import './index.scss'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  // <React.StrictMode>
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
  // </React.StrictMode>
)

//antd主题色配置
ConfigProvider.config({
  theme: {
    primaryColor: '#2C68FF',// 全局主色
    successColor: '#2DA68E', // 成功色
    warningColor: '#F4872F', // 警告色
    errorColor: '#E63732', // 错误色
  },
});