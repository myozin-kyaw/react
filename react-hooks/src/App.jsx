import { useState } from 'react'
import './App.css'
import UseStateExample from './components/useStateExample'
import UseEffectExample from './components/UseEffectExample'
import UseContextExample from './components/UseContextExample'
import UseReducerExample from './components/UseReducerExample'
import UseRefExample from './components/UseRefExample'
import UseImperativeHandleExample from './components/UseImperativeHandleExample'
import UseLayoutEffectExample from './components/UseLayoutEffectExample'
import UseInsertionEffectExample from './components/UseInsertionEffectExample'
import UseIdExample from './components/UseIdExample'
import UseTransitionExample from './components/UseTransitionExample'
import UseDeferredValueExample from './components/UseDeferredValueExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <UseStateExample/> */}
      {/* <UseEffectExample/> */}
      {/* <UseContextExample/> */}
      {/* <UseReducerExample/> */}
      {/* <UseRefExample/> */}
      {/* <UseImperativeHandleExample/> */}
      {/* <UseLayoutEffectExample/> */}
      {/* <UseInsertionEffectExample/> */}
      {/* <UseIdExample/> */}
      {/* <UseTransitionExample/> */}
      <UseDeferredValueExample/>
    </div>
  )
}

export default App
