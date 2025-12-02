import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"; 
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
     <BrowserRouter basename="/UI_Design_React_Project"> {/* Replace /myApp with your repo name */}
      <App />
    </BrowserRouter>
  </StrictMode>,
  
 /* <BrowserRouter basename="/myApp">
    <App />
  </BrowserRouter>*/
)
