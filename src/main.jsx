import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './routs/Routes/Routes'
import BookProvider from './Context/BookProvider'
import { ToastContainer } from 'react-toastify'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router} />
      <ToastContainer/>
    </BookProvider>
  </StrictMode>,
)
