import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// Notes//

// 1. there  is a hook called "useCallback" which put the function in the catch memory and fun that function after changing the dependencies of the function 
// 2. useCallback's structure is as useCallback(fn,[dependencies])
// 3. useCallback is use for optimization of the code 
// 4. there is hook named as useEffect(()=>{passwoerdGenerator()},[dependency]).which is can run the function and on changing the dependency.


// 5. for copy anything from clicpboard we should first take the reference hook in a variable.
// 6. like, const pass = useRef(null)
// 7. then take thereference of that input by, ref = {pass}
// 8. 6,7  steps are only for the taking referance for highlighting the password on clicking on "copy"
// 9. and for copy window.navigator.clipboard.writeText(password). in useCallback with dependency= [password]
// 10. pass.current?.select(); highlight
// 11. pass.current?.setSelectionRange(password)