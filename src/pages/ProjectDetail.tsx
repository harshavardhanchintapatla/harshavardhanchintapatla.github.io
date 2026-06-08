import { useParams, Link, Navigate } from 'react-router-dom'
import { getProjectById } from '../data/projects'
import { ViewMode } from '../types'

interface Props { viewMode: ViewMode }

const archTypeColors: Record<string, string> = {
  user: 'bg-emerald-500/10 border-emerald-500/40 text-emerald-700 dark:text-emerald-300',
  service: 'bg-primary-500/10 border-primary-500/40 text-primary-700 dark:text-primary-300',
  db: 'bg-yellow-500/10 border-yellow-500/40 text-yellow-700 dark:text-yellow-300',
  cloud: 'bg-sky-500/10 border-sky-500/40 text-sky-700 dark:text-sky-300',
  ai: 'bg-purple-500/10 border-purple-500/40 text-purple-700 dark:text-purple-300',
  queue: 'bg-orange-500/10 border-orange-500/40 text-orange-700 dark:text-orange-300',
  api: 'bg-pink-500/10 border-pink-500/40 text-pink-700 dark:text-pink-300',
}

const archTypeIcons: Record<string, string> = {
  user: '👤',
  service: '⚙️',
  db: '🗄️',
  cloud: '☁️',
  ai: '🤖',
  queue: '📬',
  api: '🔌',
}

export default function ProjectDetail({ viewMode }: Props) {
  const { id } = useParams<{ id: string }>()
  const project = id ? getProjectById(id) : undefined

  if (!project) return <Navigate to="/" replace />

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg pt-16">
      {/* Hero */}
      <div className="bg-slate-50 dark:bg-dark-surface border-b border-slate-200 dark:border-dark-border">
        <div className="section-container py-16">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8 transition-colors"
          >
            ← Back to Projects
          </Link>

          {project.isPublicDemo && (
            <div className="badge-orange mb-4">
              ⚠️ Public Demo Portfolio Project — not a client production project. Uses the publicly available OrangeHRM demo portal.
            </div>
          )}

          <div className="flex items-start gap-4 mb-6">
            <span className="text-5xl">{project.icon}</span>
            <div>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.categories.map(c => (
                  <span key={c} className="badge-primary">{c}</span>
                ))}
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">{project.title}</h1>
              <p className="text-lg text-slate-500 dark:text-slate-400 mt-2">{project.subtitle}</p>
              <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mt-2">{project.role}</p>
            </div>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map(tech => (
              <span key={tech} className="px-3 py-1 text-sm bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border text-slate-700 dark:text-slate-300 rounded-lg font-mono">
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 mt-6">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
                GitHub Repository
              </a>
            )}
            {project.demoNote && (
              <span className="inline-flex items-center px-4 py-2 text-sm text-slate-500 dark:text-slate-400 italic">
                {project.demoNote}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="section-container py-12">
        <div className="max-w-4xl space-y-12">

          {/* 30-second summary */}
          <section aria-label="Recruiter Summary">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-primary-500">▸</span> 30-Second Recruiter Summary
            </h2>
            <div className="card p-6 border-l-4 border-primary-500">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{project.recruiterSummary}</p>
            </div>
          </section>

          {/* Problem */}
          <section aria-label="Problem">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-primary-500">▸</span> The Problem
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.problem}</p>
          </section>

          {/* Why it matters */}
          <section aria-label="Why it matters">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-primary-500">▸</span> Why It Matters
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.whyItMatters}</p>
          </section>

          {/* Architecture */}
          <section aria-label="Architecture Diagram">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="text-primary-500">▸</span> Architecture Overview
            </h2>
            <div className="card p-6 overflow-x-auto">
              <div className="flex flex-col items-center gap-3 min-w-max mx-auto">
                {project.architectureDiagram.map((node, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className={`px-6 py-3 rounded-xl border-2 font-medium text-sm ${archTypeColors[node.type || 'service']}`}>
                      <span className="mr-2">{archTypeIcons[node.type || 'service']}</span>
                      {node.label}
                    </div>
                    {i < project.architectureDiagram.length - 1 && (
                      <div className="flex flex-col items-center gap-0.5 text-slate-400">
                        <div className="w-0.5 h-4 bg-slate-300 dark:bg-dark-border" />
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {/* Legend */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-dark-border flex flex-wrap gap-3 justify-center">
                {Object.entries(archTypeColors).map(([type, cls]) => (
                  <div key={type} className={`px-3 py-1 rounded-lg text-xs border ${cls}`}>
                    {archTypeIcons[type]} {type.charAt(0).toUpperCase() + type.slice(1)}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Key Engineering Decisions — shown in both modes */}
          <section aria-label="Key Engineering Decisions">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-primary-500">▸</span> Key Engineering Decisions
            </h2>
            <div className="space-y-3">
              {project.keyDecisions.map((decision, i) => (
                <div key={i} className="card p-4 flex gap-3">
                  <span className="text-primary-500 font-mono text-sm font-bold flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{decision}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SDLC/STLC */}
          <section aria-label="SDLC / STLC Lifecycle">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-primary-500">▸</span> SDLC / STLC Lifecycle
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.sdlcPhase.map((phase, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="badge-green">{phase}</span>
                  {i < project.sdlcPhase.length - 1 && (
                    <span className="text-slate-400 text-xs">→</span>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Testing */}
          <section aria-label="Testing and Validation">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-primary-500">▸</span> Testing & Validation
            </h2>
            <ul className="space-y-2">
              {project.testingApproach.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Security */}
          <section aria-label="Security and Reliability">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-primary-500">▸</span> Security & Reliability
            </h2>
            <ul className="space-y-2">
              {project.security.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <span className="text-yellow-500 mt-0.5 flex-shrink-0">🔒</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Tradeoffs — engineer mode emphasis */}
          <section aria-label="Tradeoffs">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-primary-500">▸</span> Tradeoffs & Design Rationale
            </h2>
            <div className="space-y-3">
              {project.tradeoffs.map((item, i) => (
                <div key={i} className="card p-4 border-l-2 border-accent-500/40">
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Production improvements */}
          <section aria-label="Production Improvements">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-primary-500">▸</span> Production Improvements I'd Make
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.productionImprovements.map((item, i) => (
                <div key={i} className="card p-4 flex gap-3">
                  <span className="text-primary-400 flex-shrink-0">→</span>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What I learned */}
          <section aria-label="What I Learned">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-primary-500">▸</span> What I Learned
            </h2>
            <ul className="space-y-2">
              {project.whatILearned.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <span className="text-accent-500 mt-0.5 flex-shrink-0">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Interview pitch */}
          <section aria-label="Interview Pitch">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-primary-500">▸</span> Interview Pitch
            </h2>
            <div className="card p-6 border-l-4 border-accent-500 bg-accent-500/5">
              <p className="font-mono text-xs text-accent-500 mb-3">// how I explain this in an interview</p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic">{project.interviewPitch}</p>
            </div>
          </section>

          {/* Skills proven */}
          <section aria-label="Related Skills">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-primary-500">▸</span> Skills This Project Proves
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map(tech => (
                <span key={tech} className="badge-primary">{tech}</span>
              ))}
              {project.categories.map(cat => (
                <span key={cat} className="badge-accent">{cat}</span>
              ))}
            </div>
          </section>

          {/* Navigation */}
          <div className="pt-8 border-t border-slate-200 dark:border-dark-border flex justify-between items-center">
            <Link to="/#projects" className="btn-outline">
              ← All Projects
            </Link>
            <Link to="/contact" className="btn-primary">
              Let's Talk →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
