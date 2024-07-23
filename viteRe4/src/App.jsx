
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 function App() {
  
const [color,setColor] = useState("black")
  return (
    <>
    
     <div className="h-screen w-screen duration-200 "style={{backgroundColor: color }} >
      <div className="fixed flex flex-wrap justify-center bottom-16 insert-x-0 ">
      <div className="flex flex-wrap justify-center gap-5 shadow-lg bg-black px-3 py-2 rounded-3xl">
        <button onClick={ ()=>setColor("red")} className="outline-none px-4" style={{backgroundColor:"red"}}>red</button>
        <button onClick={ ()=>setColor("yellow")} className="outline-none px-4" style={{backgroundColor:"yellow"}}>yello</button>
        <button onClick={ ()=>setColor("green")} className="outline-none px-4" style={{backgroundColor:"blue"}}>blue</button>
        <button onClick={ ()=>setColor("blue")} className="outline-none px-4" style={{backgroundColor:"green"}}>green</button>
        <button onClick={ ()=>setColor("white")} className="outline-none px-4" style={{backgroundColor:"white"}}>white</button>
      </div>
      </div>
     </div>
    </>
  )
}

export default App
