import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [count,setCount] = useState(15)

const Addvalue = () => {
  
 setCount(count=count+1)
}
const removevalue=() =>{
  setCount(count=count-1)
}
  return (
    <>
     <h1>chai or react</h1>
     <h2>Counter value:{count}</h2>
     <button
     onClick={Addvalue}> Add value: {count}</button>
     <br/>
     <br/>
     <button onClick={removevalue}>remove value:{count}</button>
     <p>{count}</p>
    </>
  )
}

export default App
