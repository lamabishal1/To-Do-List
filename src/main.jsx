import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Form from './components/Form.jsx'
import NotFoundPage from './components/NotFoundPage.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Form/>,
    errorElement:<NotFoundPage/>
  },
  

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
