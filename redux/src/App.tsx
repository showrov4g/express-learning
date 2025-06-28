import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1> Learning Redux</h1>
        <button>Increment</button>
        <div>0</div>
        <button>Discernment</button>
      </div>
    </>
  )
}

export default App
