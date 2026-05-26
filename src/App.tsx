import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@/theme/Provider'
import { AppRoutes } from '@/routes'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
