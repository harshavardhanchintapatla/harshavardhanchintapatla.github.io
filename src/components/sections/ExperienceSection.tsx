import { experiences } from '../../data/experience'

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-white dark:bg-dark-bg" aria-label="Experience">
      <div className="section-container">
        <div className="mb-12">
          <p className="text-primary-600 dark:text-primary-400 font-mono text-sm font-medium mb-3">$ git log --career</p>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            5 years across enterprise consulting and university research, building real systems that had to work.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div key={exp.id} className="relative pl-6 border-l-2 border-slate-200 dark:border-dark-border last:border-transparent">
              {/* Timeline dot */}
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary-500 border-2 border-white dark:border-dark-bg" />

              <div className="card p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-semibold text-primary-600 dark:text-primary-400">{exp.company}</span>
                      <span className="text-slate-400">·</span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                    <span className="badge-primary">{exp.period}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{exp.type}</span>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-5">{exp.description}</p>

                <ul className="space-y-2 mb-5">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
                      <span className="text-primary-500 mt-0.5 flex-shrink-0">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map(tech => (
                      <span key={tech} className="px-2 py-1 text-xs bg-slate-100 dark:bg-dark-muted/30 text-slate-600 dark:text-slate-300 rounded font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-dark-border">
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">SDLC/STLC Phases</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.sdlcPhases.map(phase => (
                      <span key={phase} className="badge-green text-xs">{phase}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Education</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                degree: 'Master of Science, Computer Science',
                school: 'University of Missouri',
                period: 'January 2024 – May 2026',
                location: 'Columbia, Missouri',
                badge: 'In Progress',
                badgeColor: 'badge-primary',
              },
              {
                degree: 'Bachelor of Technology, Electronics & Communication Engineering',
                school: 'Bharath Institute of Higher Education and Research',
                period: 'July 2017 – June 2021',
                location: 'India',
                badge: 'Completed',
                badgeColor: 'badge-green',
              },
            ].map(edu => (
              <div key={edu.school} className="card p-6">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm">{edu.degree}</h4>
                  <span className={`${edu.badgeColor} flex-shrink-0`}>{edu.badge}</span>
                </div>
                <p className="text-primary-600 dark:text-primary-400 font-medium text-sm">{edu.school}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{edu.period} · {edu.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
