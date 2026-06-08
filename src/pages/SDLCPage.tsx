import { sdlcPhases, stlcPhases, projectSDLCMapping } from '../data/skills'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

const colorBorders: Record<string, string> = {
  blue: 'border-blue-500',
  purple: 'border-purple-500',
  green: 'border-emerald-500',
  orange: 'border-orange-500',
  yellow: 'border-yellow-500',
}

const colorBadges: Record<string, string> = {
  blue: 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20',
  purple: 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20',
  green: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20',
  orange: 'bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-500/20',
  yellow: 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-300 border-yellow-500/20',
}

export default function SDLCPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg pt-16">
      <div className="section-container py-16">
        <div className="mb-12">
          <p className="text-primary-600 dark:text-primary-400 font-mono text-sm font-medium mb-3">$ lifecycle --map</p>
          <h1 className="section-title">SDLC & STLC Lifecycle Map</h1>
          <p className="section-subtitle">
            How each project maps to software development and software testing lifecycle phases.
          </p>
        </div>

        {/* SDLC */}
        <section className="mb-16" aria-label="SDLC">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Software Development Lifecycle (SDLC)</h2>
          <div className="flex flex-wrap gap-3 mb-8 items-center">
            {sdlcPhases.map((phase, i) => (
              <div key={phase.name} className="flex items-center gap-2">
                <div className="card p-3 text-center min-w-[100px] group relative">
                  <p className="text-xs font-semibold text-slate-900 dark:text-white">{phase.name}</p>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 text-xs bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 text-left">
                    {phase.description}
                  </div>
                </div>
                {i < sdlcPhases.length - 1 && (
                  <span className="text-slate-300 dark:text-slate-600 text-lg">→</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* STLC */}
        <section className="mb-16" aria-label="STLC">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Software Testing Lifecycle (STLC)</h2>
          <div className="flex flex-wrap gap-3 mb-8 items-center">
            {stlcPhases.map((phase, i) => (
              <div key={phase.name} className="flex items-center gap-2">
                <div className="card p-3 text-center min-w-[100px] group relative border-emerald-500/20 bg-emerald-500/5">
                  <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">{phase.name}</p>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 p-2 text-xs bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 text-left">
                    {phase.description}
                  </div>
                </div>
                {i < stlcPhases.length - 1 && (
                  <span className="text-emerald-300 dark:text-emerald-700 text-lg">→</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Project mapping */}
        <section aria-label="Project to lifecycle mapping">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-8">Where Each Project Fits</h2>
          <div className="space-y-6">
            {projectSDLCMapping.map(mapping => {
              const project = projects.find(p => p.title.includes(mapping.project.split('/')[0].trim()) || mapping.project.includes(p.title.split(' ')[0]))
              return (
                <div key={mapping.project} className={`card p-6 border-l-4 ${colorBorders[mapping.color]}`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{project?.icon || '📁'}</span>
                      <h3 className="font-bold text-slate-900 dark:text-white">{mapping.project}</h3>
                    </div>
                    {project && (
                      <Link
                        to={`/projects/${project.id}`}
                        className="text-sm text-primary-600 dark:text-primary-400 hover:underline flex-shrink-0"
                      >
                        View Case Study →
                      </Link>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {mapping.phases.map(phase => (
                      <span
                        key={phase}
                        className={`badge border text-xs ${colorBadges[mapping.color]}`}
                      >
                        {phase}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Engineering evidence */}
        <section className="mt-16" aria-label="Engineering evidence">
          <div className="card p-8 text-center max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Engineering Proof, Not Just Labels
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              These aren't checkboxes. Each lifecycle phase shown here is documented in a detailed case study
              with architecture diagrams, key decisions, testing approaches, security considerations, and
              production improvement plans.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {projects.map(p => (
                <Link key={p.id} to={`/projects/${p.id}`} className="btn-outline text-sm px-4 py-2">
                  {p.icon} {p.title.split(' ').slice(0, 2).join(' ')}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
