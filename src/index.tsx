import ReactDOM from 'react-dom/client'
import App from './App'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import store from './store'
import zhCN from 'antd/lib/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import '@/assets/styles/reset.css'
import 'antd/dist/antd.less'
dayjs.locale('zh-cn')
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <Provider store={store}>
        <ConfigProvider locale={zhCN}>
            <App />
        </ConfigProvider>
    </Provider>
)
