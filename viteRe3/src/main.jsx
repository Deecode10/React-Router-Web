import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)



// NOTE  (7 to 8) //

//taiilwind//
// In this lec. we are going to know about tailwind (a utility-first CSS framework packed with classes)
//for using tailwind first open tailwind.css follow the given instructions and installation.
//for creating a frame, first copy the code of frame from tailwind.
//close the img tag,because not a tag should be open .
//all tailwind css functions should be done in return of the APP.jsx.
//frames can be made by the tailwind css website by copying the code of the frame.

//props//
//1.props make the component re-usable.
//2.In this we maka a saperate "component" named folder which contain the cards (code of same kind).
//3.we should write (rfce) for making a component of card in thee card file.
//4.we can make the changes in the cards by making props in :-function Card(props or {username}  or  {username="visit me"}){}.
//5.the value of props can be change by the App file by :- <Card username = "deepak"  or array={arr},object={obj} />
//where ,arr=[1,2,3] or obj={}.
//6.props are used as props.username  or  {username}.
