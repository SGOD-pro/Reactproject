import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Home from './components/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="p-3 w-[100% - 6rem] h-screen dark:bg-zinc-800 ml-24 flex flex-col">
        <Header />
        <Outlet/>
      </div>
    </>
  )
}

export default App
