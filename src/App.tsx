import AppRouter from './router'
import { HashRouter } from 'react-router-dom'
import './app.scss'
function App() {
  return (
    <HashRouter>
      <AppRouter />
    </HashRouter>
  )
}

export default App
