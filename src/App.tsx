import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { router } from './routes'

function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | DashFood" />
      <RouterProvider router={router} />
      <Toaster richColors closeButton />
    </HelmetProvider>
  )
}

export default App
