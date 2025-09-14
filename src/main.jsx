import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css'
import Home from './Pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Home className="dark:bg-gray-800 dark:text-white"/>
  </StrictMode>,
)
