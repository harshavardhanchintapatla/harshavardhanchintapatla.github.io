import { systemDesignCards } from '../../data/skills'

export default function SystemDesignSection() {
  return (
    <section id="system-design" className="section-padding bg-slate-50 dark:bg-dark-surface" aria-label="System Design Highlights">
      <div className="section-container">
        <div className="mb-12">
          <p className="text-primary-600 dark:text-primary-400 font-mono text-sm font-medium mb-3">$ arch --decisions</p>
          <h2 className="section-title">System Design Highlights</h2>
          <p className="section-subtitle">
            Key engineering decisions across all five projects — each one has a reason.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {systemDesignCards.map(card => (
            <div key={card.title} className="card-hover p-5 group">
              <div className="text-2xl mb-3">{card.icon}</div>
              <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-2 leading-snug">
                {card.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
                {card.description}
              </p>
              <p className="text-xs font-mono text-primary-600 dark:text-primary-400">
                📁 {card.project}
              </p>
              <div className="flex flex-wrap gap-1 mt-2">
                {card.tags.map(tag => (
                  <span key={tag} className="px-1.5 py-0.5 text-xs bg-slate-100 dark:bg-dark-muted/30 text-slate-500 dark:text-slate-400 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
