import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-slate-200 dark:border-dark-border bg-white dark:bg-dark-surface">
      <div className="section-container py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="font-mono font-semibold text-slate-900 dark:text-white">
            <span className="text-primary-500">&lt;</span>HC<span className="text-primary-500">/&gt;</span>
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Software Engineer · Columbia, Missouri
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 text-sm text-slate-500 dark:text-slate-400">
          <Link to="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Home</Link>
          <Link to="/resume" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Resume</Link>
          <Link to="/sdlc" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">SDLC/STLC</Link>
          <Link to="/contact" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contact</Link>
          <a href="https://github.com/harshavardhanchintapatla" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/harshavardhan-chintapatla" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">LinkedIn</a>
        </nav>
        <p className="text-xs text-slate-400 dark:text-slate-500">© {year} Harshavardhan Chintapatla</p>
      </div>
    </footer>
  )
}
