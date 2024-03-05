import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState("white")

return (
  
    <div className="w-full h-screen duration-200 "
    style={{backgroundColor:count}}>
<div className="fixed flex flex-wrap justify-content bottom-12 inset-x-0 px-2">
<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
  <button onClick={()=>setCount("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow"}}>yellow</button>
  <button onClick={()=>setCount("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>blue</button>
  <button  onClick={()=>setCount("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>green</button>
</div>
</div>
<h1  onClick={()=>setCount("green")} >DEEPAK</h1>

    </div>
  
)
}

export default App
