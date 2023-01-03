import AppRouter from './router'
import { HashRouter } from 'react-router-dom'
import React from 'react'
function App() {
  return (
    <HashRouter>
      <AppRouter />
    </HashRouter>
  )
}

export default App
