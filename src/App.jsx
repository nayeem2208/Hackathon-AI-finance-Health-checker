import { useState } from 'react'
import './App.css'
import Header from './components/header'
import ExpenseFinder from './components/ExpenseFinder'
import Routers from './Router'

function App() {
  const [count, setCount] = useState(0)

  return (

      <div
      className="h-full min-h-screen "
         style={{
        background:
          "linear-gradient(90deg,rgba(255,255,255,1) 0%, rgba(72,196,237,1) 67%)",
      }}
    >
    <Header/>
  <Routers/>
    </div>
    
  )
}

export default App
