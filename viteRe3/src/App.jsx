import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from './components/Card'
import Card1 from './components/Card1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className =" bg-green-400 p-5 rounded-xl text-black"> tailwind</h1>
  <Card username="Deepak" button="click"/>
  <Card username="Yadav" button="click"/>
  <Card username="roshni" button="Click"/>
  
  
    </>
  )
}

export default App
