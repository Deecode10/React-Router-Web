import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <h1>main</h1>
  </React.StrictMode>,
)

// NOTE // --(1 to 4 lec)-- //

//1.make all the name of the function start with capital letter
//2.it is also better to write the name of the file start with capital
//3.<> called fragmennt .It is used because only one element can be written in the return in APP .
//4 in this code ta the line no. 8 <App/>is a function which can also be written as App().
//5.In the App file under the (App) function html are written in the <> in return . But the variable of js. are written in App out of return
//  and evaluated expression is written in the return in {}.  
//6.React have a feature -: const feature = React.createElement(
//                                                               'a', 
//                                                                {hraf:'https://google.com',target:'_blank'}         
//                                                              )           
//7.it is a method of passing the element in the react.
//8.in th function (App) we can pass the js. expreassion in {},it is called evaluated expression .

