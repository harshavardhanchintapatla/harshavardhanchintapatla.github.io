import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailto = `mailto:chintapatlaharshavardhan@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailto
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg pt-16">
      <div className="section-container py-16">
        <div className="mb-12">
          <p className="text-primary-600 dark:text-primary-400 font-mono text-sm font-medium mb-3">$ send --message</p>
          <h1 className="section-title">Get In Touch</h1>
          <p className="section-subtitle">
            Open to Software Engineer, Java Full Stack, AWS Cloud, AI/RAG, Backend, and SDET/QA roles.
            Let's talk.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl">
          {/* Contact info */}
          <div className="space-y-6">
            {[
              {
                icon: '✉️',
                label: 'Email',
                value: 'chintapatlaharshavardhan@gmail.com',
                href: 'mailto:chintapatlaharshavardhan@gmail.com',
              },
              {
                icon: '💼',
                label: 'LinkedIn',
                value: 'linkedin.com/in/harshavardhan-chintapatla',
                href: 'https://linkedin.com/in/harshavardhan-chintapatla',
              },
              {
                icon: '🐙',
                label: 'GitHub',
                value: 'github.com/harshavardhanchintapatla',
                href: 'https://github.com/harshavardhanchintapatla',
              },
              {
                icon: '📍',
                label: 'Location',
                value: 'Columbia, Missouri — Open to relocation',
                href: undefined,
              },
            ].map(item => (
              <div key={item.label} className="card p-5 flex items-start gap-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-slate-700 dark:text-slate-300 font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="card p-5 border-l-4 border-primary-500">
              <p className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Roles I'm targeting:</p>
              <div className="flex flex-wrap gap-2">
                {['Software Engineer', 'Java Full Stack Developer', 'Backend Engineer', 'AWS Cloud Engineer', 'AI/RAG Engineer', 'SDET', 'QA Automation Engineer'].map(r => (
                  <span key={r} className="badge-primary text-xs">{r}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="card p-6 space-y-4" noValidate>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Send a Message</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              This will open your email client with a pre-filled message.
            </p>

            {[
              { id: 'name', label: 'Your Name', type: 'text', placeholder: 'Jane Smith' },
              { id: 'email', label: 'Your Email', type: 'email', placeholder: 'jane@company.com' },
              { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Software Engineer Role — Backend / AWS' },
            ].map(field => (
              <div key={field.id}>
                <label htmlFor={field.id} className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.id as keyof typeof form]}
                  onChange={e => setForm(f => ({ ...f, [field.id]: e.target.value }))}
                  className="w-full px-4 py-2.5 text-sm bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                />
              </div>
            ))}

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Hi Harsha, I came across your portfolio and wanted to connect about..."
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                className="w-full px-4 py-2.5 text-sm bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
              />
            </div>

            <button type="submit" className="btn-primary w-full justify-center">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Send via Email
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
