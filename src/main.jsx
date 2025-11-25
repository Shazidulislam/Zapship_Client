import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './router/router'
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import AuthProvider from './Context/AuthProvider'
AOS.init();


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='bg-gray-50'>
    <div className='max-w-7xl mx-auto' >
      <AuthProvider>
         <RouterProvider router={router} />
      </AuthProvider>
    </div>
   </div>
  </StrictMode>,
)
