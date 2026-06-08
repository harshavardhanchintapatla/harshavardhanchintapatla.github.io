import { skills } from '../../data/skills'

const levelColors = {
  expert: 'bg-primary-500',
  proficient: 'bg-accent-500',
  familiar: 'bg-slate-400 dark:bg-slate-600',
}

const levelLabels = {
  expert: 'Expert',
  proficient: 'Proficient',
  familiar: 'Familiar',
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-slate-50 dark:bg-dark-surface" aria-label="Skills">
      <div className="section-container">
        <div className="mb-12">
          <p className="text-primary-600 dark:text-primary-400 font-mono text-sm font-medium mb-3">$ tech --stack</p>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Grounded in real project work. Every item listed has been applied in a project documented on this site.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-10">
          {(['expert', 'proficient', 'familiar'] as const).map(level => (
            <div key={level} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${levelColors[level]}`} />
              <span className="text-sm text-slate-600 dark:text-slate-400">{levelLabels[level]}</span>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {skills.map(category => (
            <div key={category.category} className="card p-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg font-mono">{category.icon}</span>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm">{category.category}</h3>
              </div>
              <ul className="space-y-2">
                {category.items.map(skill => (
                  <li key={skill.name} className="flex items-center justify-between gap-2">
                    <span className="text-sm text-slate-700 dark:text-slate-300">{skill.name}</span>
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${levelColors[skill.level]}`} title={levelLabels[skill.level]} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Skills note */}
        <p className="mt-8 text-sm text-slate-500 dark:text-slate-400 text-center">
          Skills assessed based on project usage — not self-rated without evidence.
        </p>
      </div>
    </section>
  )
}
