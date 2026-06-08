export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-slate-50 dark:bg-dark-surface" aria-label="About">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary-600 dark:text-primary-400 font-mono text-sm font-medium mb-3">$ whoami</p>
            <h2 className="section-title mb-6">
              Engineering systems that are{' '}
              <span className="gradient-text">designed, secured, tested, and deployed</span> — not just built.
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                I'm Harshavardhan Chintapatla, a Software Engineer pursuing my Master of Science in Computer Science
                at the University of Missouri. My 5 years of hands-on experience spans Java full-stack development,
                AWS-backed cloud systems, AI/RAG pipelines, REST API design, and enterprise test automation.
              </p>
              <p>
                At Mizzou, I've built production-style systems: a two-tier Spring Boot learning portal with
                OAuth2 security and a GPT-4 RAG assistant, and a fully local RAG chatbot for university research
                groups using LLaMA 3.1 and Qdrant — with zero data leaving institutional infrastructure.
              </p>
              <p>
                At Capgemini, I contributed to McDonald's POS modernization as a QA automation engineer,
                delivering Cypress TypeScript and Postman/Newman test suites that supported SIT, UAT, and
                release go/no-go decisions across multiple Agile sprints.
              </p>
              <p>
                I approach software engineering as a full lifecycle discipline — from requirement analysis
                through architecture, implementation, testing, CI/CD, and deployment. I can explain every
                design decision I've made, including the tradeoffs I didn't choose.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="badge-primary">Columbia, Missouri</span>
              <span className="badge-green">MS Computer Science — Mizzou</span>
              <span className="badge-accent">Open to Relocation</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: '🏗️',
                title: 'System Design',
                body: 'Two-tier architectures, async pipelines, serverless systems, and API security — designed with clear tradeoffs.',
                color: 'border-primary-500/30',
              },
              {
                icon: '🤖',
                title: 'AI/RAG Engineering',
                body: 'Built RAG pipelines with GPT-4, LLaMA 3.1, ChromaDB, and Qdrant — grounded in real data, not hallucinated responses.',
                color: 'border-accent-500/30',
              },
              {
                icon: '☁️',
                title: 'AWS Cloud',
                body: 'Lambda, API Gateway, SQS, EC2, S3, RDS — designed for reliability, not just for it to run.',
                color: 'border-emerald-500/30',
              },
              {
                icon: '🧪',
                title: 'STLC & Automation',
                body: 'Full lifecycle from requirement traceability through Cypress, Selenium, Newman, and Allure — supporting real release decisions.',
                color: 'border-orange-500/30',
              },
            ].map(card => (
              <div key={card.title} className={`card p-5 border-l-2 ${card.color} hover:shadow-md dark:hover:shadow-black/20 transition-shadow`}>
                <div className="text-2xl mb-3">{card.icon}</div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">{card.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering philosophy */}
        <div className="mt-16 card p-6 border-l-4 border-primary-500">
          <p className="font-mono text-sm text-primary-600 dark:text-primary-400 mb-2">// engineering philosophy</p>
          <p className="text-slate-700 dark:text-slate-300 italic text-lg">
            "I understand SDLC from requirements to deployment. I understand STLC from requirement analysis
            to release sign-off. I can design secure APIs, build RAG systems responsibly, work with cloud-native
            AWS services, write automation that supports release decisions, and explain architecture, tradeoffs,
            and debugging clearly."
          </p>
        </div>
      </div>
    </section>
  )
}
