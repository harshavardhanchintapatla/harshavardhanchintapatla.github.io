import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ViewMode } from '../../types'

interface NavbarProps {
  darkMode: boolean
  setDarkMode: (v: boolean) => void
  viewMode: ViewMode
  setViewMode: (v: ViewMode) => void
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'SDLC/STLC', href: '/sdlc' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar({ darkMode, setDarkMode, viewMode, setViewMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  const handleHashLink = (href: string) => {
    if (href.startsWith('/#')) {
      const id = href.slice(2)
      if (location.pathname !== '/') {
        window.location.href = href
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-lg shadow-black/10 dark:shadow-black/30 border-b border-slate-200/50 dark:border-dark-border/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16" aria-label="Main navigation">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-mono font-semibold text-slate-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          aria-label="Harshavardhan Chintapatla — Home"
        >
          <span className="text-primary-500 font-bold">&lt;</span>
          <span>HC</span>
          <span className="text-primary-500 font-bold">/&gt;</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => (
            link.href.startsWith('/#') ? (
              <button
                key={link.href}
                onClick={() => handleHashLink(link.href)}
                className="nav-link px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-dark-muted/30"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className={`nav-link px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-dark-muted/30 ${
                  location.pathname === link.href ? 'nav-link-active bg-primary-50 dark:bg-primary-500/10' : ''
                }`}
              >
                {link.label}
              </Link>
            )
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* View Mode Toggle */}
          <div className="hidden sm:flex items-center bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-dark-border rounded-lg p-1 gap-1">
            <button
              onClick={() => setViewMode('recruiter')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                viewMode === 'recruiter'
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
              title="Recruiter Mode: concise impact and skills"
            >
              Recruiter
            </button>
            <button
              onClick={() => setViewMode('engineer')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                viewMode === 'engineer'
                  ? 'bg-accent-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
              title="Engineer Mode: architecture, tradeoffs, code-level decisions"
            >
              Engineer
            </button>
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-dark-muted/30 hover:text-slate-900 dark:hover:text-white transition-all"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-dark-muted/30"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden glass border-b border-slate-200/50 dark:border-dark-border/50 px-4 py-4">
          <div className="flex flex-col gap-1">
            {navLinks.map(link => (
              link.href.startsWith('/#') ? (
                <button
                  key={link.href}
                  onClick={() => handleHashLink(link.href)}
                  className="nav-link text-left px-4 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-dark-muted/30"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="nav-link px-4 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-dark-muted/30"
                >
                  {link.label}
                </Link>
              )
            ))}
            {/* Mobile view mode */}
            <div className="flex gap-2 mt-2 px-4">
              <button
                onClick={() => setViewMode('recruiter')}
                className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all ${viewMode === 'recruiter' ? 'bg-primary-600 text-white' : 'border border-slate-300 dark:border-dark-border text-slate-600 dark:text-slate-400'}`}
              >
                Recruiter Mode
              </button>
              <button
                onClick={() => setViewMode('engineer')}
                className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all ${viewMode === 'engineer' ? 'bg-accent-600 text-white' : 'border border-slate-300 dark:border-dark-border text-slate-600 dark:text-slate-400'}`}
              >
                Engineer Mode
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
