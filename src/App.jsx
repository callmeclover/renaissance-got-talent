import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-container'>
      <div className='background'>
        <h1>Galileo Galilei</h1>
        <h2>for Renaissance Got Talent</h2>
        <p>The quick brown fox ran over the lazy dogs</p>
      </div>
    </div>
  )
}

export default App
