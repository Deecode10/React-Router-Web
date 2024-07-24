import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed,setNumberAllowed]= useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setpassword] = useState("")


  //useRef hook


  const passwordRef=useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass =""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str +="!@#$%^&*()_+"

for(let i=1;i<=length;i++){
  let char =Math.floor(Math.random()*str.length+1)
  pass +=str.charAt(char)
}
setpassword(pass)


  },[length,numberAllowed,charAllowed,setpassword])
  const copyPasswordToclipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,9);
    window.navigator.clipboard.writeText(password)
  },[password])
  

useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])


  

  return (
  <>
<div className=" shadow-md  rounded-lg px-4 py-3 my-8  text-orange-500 bg-gray-800"><h1 className ="text-white text-center my-3">password generator</h1>
<div className="flex shadow rounded-lg overflow-hidden mb-4">
  <input type="text"
  value={password}
  className="outline-none w-full py-1 px-3"
  placeholder="password"
  readOnly
  ref={passwordRef}
  />
  <button
  onClick={copyPasswordToclipboard}
  className="outline-none bg-blue-700 text-white px-3 py 0.5 shrink-0">copy
    
  </button>


</div>
<div className="flex text-sn gap-x-8">
  <div className="flex item-center gap-x-1">
    <input type="range"
    min={1}
    max={100}
    value={length}
    className="cursor-pointer"
    onChange={(e)=>{setlength(e.target.value)}}
    />
    <label>Length:{length} </label>
  </div>
  <div className="flex item-center gap-x-1">
    <input
    type="checkbox"
    defaultChecked={numberAllowed}
    id="numberInput"
    onChange={()=>{setNumberAllowed((prev)=>!prev);}}/>
    <label htmlFor="numberInput">Numbers</label>
  </div>
  <div className="flex item-center gap-x-1">
    <input
    type="checkbox"
    defaultChecked={charAllowed}
    id="numberInput"
    onChange={()=>{setCharAllowed((prev)=>!prev);}}/>
    <label htmlFor="characterInput">Characters</label>
  </div>
</div>


</div>

  </>
  )
}

export default App
