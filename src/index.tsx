import ReactDOM from 'react-dom/client';
import App from './App'
import { ConfigProvider } from 'antd'
import '@/assets/styles/reset.css'  //去除标签默认样式
import '@/assets/fonts/font.less' //自定义字体
import 'antd/dist/antd.less'  //antd样式引入
import zhCN from 'antd/es/locale/zh_CN'//antd中文
// import 'moment/locale/zh-cn'//antd日期中文
import 'dayjs/locale/zh-cn'//antd日期中文
import './test/mocks' //引入mock
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

