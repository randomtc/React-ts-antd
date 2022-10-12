import AppRouter from './router'
import { HashRouter } from 'react-router-dom'
function App() {
  return (
    <HashRouter>
      <AppRouter />
    </HashRouter>
  )
}

export default App
