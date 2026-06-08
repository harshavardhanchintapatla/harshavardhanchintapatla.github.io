import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import { ProjectCategory, ViewMode, TargetRole } from '../../types'

const categories: Array<{ label: string; value: ProjectCategory | 'all' }> = [
  { label: 'All', value: 'all' },
  { label: 'Full Stack', value: 'Full Stack' },
  { label: 'Backend', value: 'Backend' },
  { label: 'AWS', value: 'AWS' },
  { label: 'AI/RAG', value: 'AI/RAG' },
  { label: 'SDET', value: 'SDET' },
  { label: 'QA Automation', value: 'QA Automation' },
  { label: 'System Design', value: 'System Design' },
]

const roles: Array<{ label: string; value: TargetRole }> = [
  { label: 'All Roles', value: 'all' },
  { label: 'Java Full Stack', value: 'java-fullstack' },
  { label: 'Backend Engineer', value: 'backend' },
  { label: 'AWS Engineer', value: 'aws' },
  { label: 'AI/RAG Engineer', value: 'ai-rag' },
  { label: 'SDET / QA', value: 'sdet' },
  { label: 'Software Engineer', value: 'software-engineer' },
]

const roleProjectMap: Record<TargetRole, string[]> = {
  all: [],
  'java-fullstack': ['mizzou-cloud-devops'],
  backend: ['mizzou-cloud-devops', 'rpm-health-monitoring', 'rise-rag-chatbot'],
  aws: ['rpm-health-monitoring', 'mizzou-cloud-devops'],
  'ai-rag': ['rise-rag-chatbot', 'mizzou-cloud-devops'],
  sdet: ['mcdonalds-npos', 'orangehrm-automation'],
  'software-engineer': ['mizzou-cloud-devops', 'rise-rag-chatbot', 'rpm-health-monitoring', 'mcdonalds-npos', 'orangehrm-automation'],
}

const colorMap: Record<string, string> = {
  blue: 'from-blue-500/10 to-blue-600/5 border-blue-500/20 hover:border-blue-500/40',
  purple: 'from-purple-500/10 to-purple-600/5 border-purple-500/20 hover:border-purple-500/40',
  green: 'from-emerald-500/10 to-emerald-600/5 border-emerald-500/20 hover:border-emerald-500/40',
  orange: 'from-orange-500/10 to-orange-600/5 border-orange-500/20 hover:border-orange-500/40',
  yellow: 'from-yellow-500/10 to-yellow-600/5 border-yellow-500/20 hover:border-yellow-500/40',
}

interface Props { viewMode: ViewMode }

export default function ProjectsSection({ viewMode }: Props) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all')
  const [targetRole, setTargetRole] = useState<TargetRole>('all')

  const highlighted = targetRole !== 'all' ? roleProjectMap[targetRole] : []

  const filtered = projects.filter(p =>
    activeCategory === 'all' || p.categories.includes(activeCategory)
  )

  return (
    <section id="projects" className="section-padding bg-white dark:bg-dark-bg" aria-label="Projects">
      <div className="section-container">
        <div className="mb-12">
          <p className="text-primary-600 dark:text-primary-400 font-mono text-sm font-medium mb-3">$ ls ./projects</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Five deep case studies. Each one documents the problem, architecture, key decisions, tradeoffs, and what it proves.
          </p>
        </div>

        {/* Role match panel */}
        <div className="card p-4 mb-6 bg-slate-50 dark:bg-dark-surface">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
            🎯 Project Match by Role
          </p>
          <div className="flex flex-wrap gap-2">
            {roles.map(r => (
              <button
                key={r.value}
                onClick={() => setTargetRole(r.value)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  targetRole === r.value
                    ? 'bg-primary-600 text-white'
                    : 'bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border text-slate-600 dark:text-slate-400 hover:border-primary-400'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
          {targetRole !== 'all' && (
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
              Highlighting {highlighted.length} project{highlighted.length !== 1 ? 's' : ''} most relevant for <strong>{roles.find(r => r.value === targetRole)?.label}</strong> roles.
            </p>
          )}
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter projects by category">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 text-sm font-medium rounded-xl transition-all ${
                activeCategory === cat.value
                  ? 'bg-primary-600 text-white shadow-sm shadow-primary-500/20'
                  : 'bg-slate-100 dark:bg-dark-card text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-dark-muted/30'
              }`}
              aria-pressed={activeCategory === cat.value}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map(project => {
            const isHighlighted = highlighted.length === 0 || highlighted.includes(project.id)
            return (
              <div
                key={project.id}
                className={`relative rounded-2xl border bg-gradient-to-br transition-all duration-300 ${colorMap[project.color]} ${
                  !isHighlighted && highlighted.length > 0 ? 'opacity-40' : ''
                }`}
              >
                {highlighted.includes(project.id) && (
                  <div className="absolute -top-2 -right-2 badge-primary text-xs">Role Match</div>
                )}
                {project.isPublicDemo && (
                  <div className="absolute top-3 left-3 badge-orange text-xs">Public Demo Project</div>
                )}

                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4 mt-4">
                    <span className="text-3xl">{project.icon}</span>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white leading-tight">{project.title}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{project.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                    {viewMode === 'recruiter' ? project.recruiterSummary : project.problem}
                  </p>

                  {/* Categories */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.categories.map(cat => (
                      <span key={cat} className="badge-primary text-xs">{cat}</span>
                    ))}
                  </div>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.slice(0, 6).map(tech => (
                      <span key={tech} className="px-2 py-0.5 text-xs bg-white/60 dark:bg-dark-bg/60 text-slate-600 dark:text-slate-300 rounded font-mono border border-slate-200/50 dark:border-dark-border/50">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 6 && (
                      <span className="px-2 py-0.5 text-xs text-slate-400 dark:text-slate-500">+{project.techStack.length - 6} more</span>
                    )}
                  </div>

                  {/* Impact */}
                  <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-5 italic">
                    {project.impact}
                  </p>

                  {/* Links */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/50 dark:border-dark-border/50">
                    <Link
                      to={`/projects/${project.id}`}
                      className="btn-primary text-sm px-4 py-2"
                    >
                      Case Study →
                    </Link>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline text-sm px-4 py-2"
                      >
                        GitHub
                      </a>
                    )}
                    {project.demoNote && (
                      <span className="text-xs text-slate-400 dark:text-slate-500 self-center italic">
                        {project.demoNote}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
