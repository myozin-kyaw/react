import { useState } from 'react'
import './App.css'
import UseStateExample from './components/useStateExample'
import UseEffectExample from './components/UseEffectExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <UseStateExample/> */}
      <UseEffectExample/>
    </div>
  )
}

export default App
