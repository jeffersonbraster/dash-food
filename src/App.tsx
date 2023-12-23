import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './routes'

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="dashfood-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | DashFood" />
        <RouterProvider router={router} />
        <Toaster richColors closeButton />
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
