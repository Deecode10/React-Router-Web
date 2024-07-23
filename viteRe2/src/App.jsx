import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setCounter] = useState(15)


  return (
    
    <>
      <h1>chai or code 2</h1>
      <h2> counter: {counter}</h2>
      <button onClick={()=>setCounter(counter++)}> ADD</button>
    </>
  )
}

export default App
