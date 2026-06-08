import { ReactNode } from 'react'
import { ViewMode } from '../../types'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
  darkMode: boolean
  setDarkMode: (v: boolean) => void
  viewMode: ViewMode
  setViewMode: (v: ViewMode) => void
}

export default function Layout({ children, darkMode, setDarkMode, viewMode, setViewMode }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  )
}
