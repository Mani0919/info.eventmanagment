import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppDownloadPage from './info'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AppDownloadPage/>
    </>
  )
}

export default App
