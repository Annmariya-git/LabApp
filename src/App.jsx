import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddLab from './components/AddLab'
import ViewLab from './components/ViewLab'
import NavLab from './components/NavLab'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddLab />}/>
        <Route path='/View' element={<ViewLab />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
