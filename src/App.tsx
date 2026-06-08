import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ViewMode } from './types'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import ResumePage from './pages/ResumePage'
import ContactPage from './pages/ContactPage'
import SDLCPage from './pages/SDLCPage'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [viewMode, setViewMode] = useState<ViewMode>('recruiter')

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <Layout
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      viewMode={viewMode}
      setViewMode={setViewMode}
    >
      <Routes>
        <Route path="/" element={<Home viewMode={viewMode} />} />
        <Route path="/projects/:id" element={<ProjectDetail viewMode={viewMode} />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/sdlc" element={<SDLCPage />} />
      </Routes>
    </Layout>
  )
}
