import AppRouter from './router'
import { HashRouter } from 'react-router-dom'
import './app.less'
function App() {
  return (
    <HashRouter>
      <AppRouter />
    </HashRouter>
  )
}

export default App
