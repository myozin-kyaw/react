import { useState } from 'react'
import './App.css'
import UseStateExample from './components/useStateExample'
import UseEffectExample from './components/UseEffectExample'
import UseContextExample from './components/UseContextExample'
import UseReducerExample from './components/UseReducerExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <UseStateExample/> */}
      {/* <UseEffectExample/> */}
      {/* <UseContextExample/> */}
      {/* <UseReducerExample/> */}
    </div>
  )
}

export default App
