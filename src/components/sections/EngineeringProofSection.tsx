const proofs = [
  {
    icon: '🔄',
    title: 'SDLC: Requirements to Deployment',
    body: 'Every project here followed a full lifecycle — from problem definition and architecture through development, testing, CI/CD, and cloud deployment.',
    badge: 'All Projects',
  },
  {
    icon: '🧪',
    title: 'STLC: Requirement to Release Sign-off',
    body: 'At Capgemini, I ran the complete STLC: requirement analysis, test planning, manual test design, automation, SIT, UAT, defect lifecycle, and go/no-go sign-off.',
    badge: "McDonald's NPOS",
  },
  {
    icon: '🔐',
    title: 'Secure API Design',
    body: 'GitHub OAuth2, custom session tokens, TokenAuthFilter middleware, @PreAuthorize RBAC, score stripping, and read-only LLM tool registries — security was designed in, not added on.',
    badge: 'DevOps Learning Portal',
  },
  {
    icon: '🤖',
    title: 'Responsible RAG System',
    body: 'A GPT-4 instructor assistant restricted to a controlled tool registry and read-only MySQL analytics views — retrieval-augmented from ChromaDB-indexed course content, not raw open-ended LLM calls.',
    badge: 'DevOps Learning Portal',
  },
  {
    icon: '🌾',
    title: 'Real Deployed Research Platform',
    body: 'RISE is a live University of Missouri platform, not a demo. Built Ceph/S3-backed dataset storage, rclone ETL scheduling, and SSH-based SLURM job orchestration for precision agriculture research workflows.',
    badge: 'RISE Platform',
  },
  {
    icon: '☁️',
    title: 'Cloud-Native AWS Architecture',
    body: 'API Gateway, Lambda, SQS, S3, EC2, and RDS used with real design rationale — decoupling, idempotency, retry, and observability considered at design time.',
    badge: 'RPM Platform',
  },
  {
    icon: '✅',
    title: 'Automation Supporting Release Decisions',
    body: 'Cypress and Newman automation wasn\'t just written — it ran in Jenkins CI and provided the evidence base for SIT pass/fail and release go/no-go decisions.',
    badge: "McDonald's NPOS",
  },
  {
    icon: '📐',
    title: 'Architecture, Tradeoffs, and Debugging',
    body: 'Every case study documents not just what was built, but why, what was not chosen, and what failure modes were handled — including a real N+1 JPA query bug found and fixed.',
    badge: 'All Case Studies',
  },
]

export default function EngineeringProofSection() {
  return (
    <section id="proof" className="section-padding bg-white dark:bg-dark-bg" aria-label="Engineering Proof">
      <div className="section-container">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-primary-600 dark:text-primary-400 font-mono text-sm font-medium mb-3">$ proof --of-work</p>
          <h2 className="section-title">Engineering Proof, Not Just Projects</h2>
          <p className="section-subtitle mx-auto">
            Any engineer can list technologies. These projects demonstrate end-to-end engineering judgment — from design decisions to failure modes to production improvements.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {proofs.map(proof => (
            <div key={proof.title} className="card-hover p-6">
              <div className="text-3xl mb-4">{proof.icon}</div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">{proof.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{proof.body}</p>
              <span className="badge-primary text-xs">{proof.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
