import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import AppPractice from './AppPractice'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
      <App />
    </BrowserRouter>

    {/* <AppPractice/> */}

  </StrictMode>,
)
