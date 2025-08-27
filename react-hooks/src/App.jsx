import { useState } from 'react'
import './App.css'
import UseStateExample from './components/useStateExample'
import UseEffectExample from './components/UseEffectExample'
import UseContextExample from './components/UseContextExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <UseStateExample/> */}
      {/* <UseEffectExample/> */}
      {/* <UseContextExample/> */}
    </div>
  )
}

export default App
