import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)



//NOTES

// 1.first make custom hook for fetching the data from the source.
// 2.then make a input box component in .jsx .
// 3.when we apply a loop in a jsx(react) then we should pass a key 
// 4.make a index component for import and export the files in a large project