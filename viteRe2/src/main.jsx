import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)




//  NOTE.2 // --(5 to 6)--  //

//1.Name of react is React because react is reacting everyware on variable update.
//1.1. react handel the UI updation.
//2.hooks are use to perform some function in react.
//3.we can add hooks by -: let [counter,setCounter] = useState(15).
//and use it by setCounter(counter).
//4.Hooks are responsible for UI updates.
//5.virtual DOM is the formation of tree of program by react and comparision of it by browser DOM it is also called Reconciliation.
//6.updates are priorities.