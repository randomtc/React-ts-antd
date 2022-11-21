import ReactDOM from 'react-dom/client';
import App from './App'
import { ConfigProvider } from 'antd'
import '@/assets/styles/reset.css'  //去除标签默认样式
import '@/assets/fonts/font.less' //自定义字体
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN';
import 'antd/dist/reset.css';
import './index.scss'
dayjs.locale('zh-cn')
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  // <React.StrictMode>
  <ConfigProvider
    locale={zhCN}
    theme={{
      token: {
        colorPrimary: 'red',
        // radiusBase: 0,
      },
    }}
  >
    <App />
  </ConfigProvider>
  // </React.StrictMode>
)

//antd主题色配置(v4版本)
ConfigProvider.config({
  theme: {
    primaryColor: 'red',// 全局主色
    successColor: '#2DA68E', // 成功色
    warningColor: '#F4872F', // 警告色
    errorColor: '#E63732', // 错误色
  },
});