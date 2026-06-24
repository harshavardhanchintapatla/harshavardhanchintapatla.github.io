import { experiences } from '../data/experience'
import { skills } from '../data/skills'
import { projects } from '../data/projects'

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg pt-16">
      <div className="section-container py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-10 pb-8 border-b border-slate-200 dark:border-dark-border">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Harshavardhan Chintapatla</h1>
            <p className="text-primary-600 dark:text-primary-400 font-medium mt-1">
              Software Engineer · Java Full Stack · AWS Cloud · AI/RAG · SDET
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
              Columbia, Missouri · (573) 530-5316 · chintapatlaharshavardhan@gmail.com
            </p>
            <div className="flex flex-wrap gap-3 mt-3 text-sm">
              <a href="https://github.com/harshavardhanchintapatla" target="_blank" rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-400 hover:underline">
                github.com/harshavardhanchintapatla
              </a>
              <a href="https://linkedin.com/in/harshavardhan-chintapatla" target="_blank" rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-400 hover:underline">
                linkedin.com/in/harshavardhan-chintapatla
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="/Harsha_s_Resume.pdf"
              download
              className="btn-primary text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF Resume
            </a>
          </div>
        </div>

        <div className="max-w-4xl space-y-10">

          {/* Summary */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3 pb-2 border-b border-slate-200 dark:border-dark-border">
              Professional Summary
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Software Engineer with 5 years of experience across Java full-stack development, AWS-backed cloud systems,
              REST API design, research workflow/ETL engineering, AI/RAG instructor tooling, test automation, and CI/CD.
              Designed two-tier Spring Boot systems with OAuth2 and token-based security, built and supported a real
              deployed React/Node.js/MongoDB research workflow and ETL platform with Ceph/S3 storage and SLURM/HPC job
              orchestration, architected serverless AWS health-data pipelines aligned with HL7 FHIR R4, and delivered
              Cypress/Selenium automation frameworks supporting enterprise release decisions. Currently completing MS
              in Computer Science at the University of Missouri.
            </p>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-200 dark:border-dark-border">
              Work Experience
            </h2>
            <div className="space-y-6">
              {experiences.map(exp => (
                <div key={exp.id}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">{exp.role}</h3>
                      <p className="text-primary-600 dark:text-primary-400 text-sm">{exp.company} · {exp.location}</p>
                    </div>
                    <span className="text-sm text-slate-500 dark:text-slate-400 flex-shrink-0">{exp.period}</span>
                  </div>
                  <ul className="space-y-1.5 mt-2">
                    {exp.highlights.slice(0, 6).map((h, i) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <span className="text-primary-500 flex-shrink-0 mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {exp.techStack.slice(0, 8).map(tech => (
                      <span key={tech} className="px-2 py-0.5 text-xs bg-slate-100 dark:bg-dark-muted/30 text-slate-600 dark:text-slate-300 rounded font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-200 dark:border-dark-border">
              Key Projects
            </h2>
            <div className="space-y-5">
              {projects.map(p => (
                <div key={p.id}>
                  <div className="flex items-start gap-2 mb-1">
                    <span>{p.icon}</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white text-sm">{p.title}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{p.categories.join(' · ')}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 ml-6">{p.impact}</p>
                  <div className="flex flex-wrap gap-1.5 mt-2 ml-6">
                    {p.techStack.slice(0, 5).map(tech => (
                      <span key={tech} className="px-2 py-0.5 text-xs bg-slate-100 dark:bg-dark-muted/30 text-slate-600 dark:text-slate-300 rounded font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-200 dark:border-dark-border">
              Technical Skills
            </h2>
            <div className="space-y-3">
              {skills.map(cat => (
                <div key={cat.category} className="flex flex-col sm:flex-row gap-2">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 sm:w-40 flex-shrink-0">
                    {cat.category}:
                  </span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {cat.items.map(i => i.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-200 dark:border-dark-border">
              Education
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Master of Science, Computer Science</h3>
                <p className="text-sm text-primary-600 dark:text-primary-400">University of Missouri · Columbia, Missouri</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">January 2024 – May 2026</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Bachelor of Technology, Electronics & Communication Engineering</h3>
                <p className="text-sm text-primary-600 dark:text-primary-400">Bharath Institute of Higher Education and Research · India</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">July 2017 – June 2021</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
