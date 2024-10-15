import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Root from './components/Root';  
import InputBox from './components/InputBox'; 
import Currency from './currency.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    {/* V-11 Custom Hooks and reusable component*/}
    {/* <Root></Root> */}

    <Currency></Currency>
  </StrictMode>
)
