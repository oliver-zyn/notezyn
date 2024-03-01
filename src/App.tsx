import './global.css'

import { ThemeProvider } from '@/components/theme/theme-provider'

import { Home } from './pages/home'

export function App() {
  return (
    <ThemeProvider storageKey="notezyn-theme" defaultTheme="system">
      <Home />
    </ThemeProvider>
  )
}
