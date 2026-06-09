/**
 * copy-routes.mjs
 *
 * Copies dist/index.html into every known static route directory so that
 * GitHub Pages (a pure static file server) returns HTTP 200 for direct
 * URL navigations and hard-refreshes instead of falling back to 404.html.
 *
 * Why this is needed:
 *   GitHub Pages has no server-side routing.  When a visitor hits
 *   /projects/rpm-health-monitoring directly, it looks for a real file at
 *   dist/projects/rpm-health-monitoring/index.html.  If that file is absent
 *   it returns HTTP 404 and serves 404.html (the SPA fallback), which still
 *   renders the correct React page but with the wrong HTTP status code.
 *   Pre-copying index.html into each route folder turns the 404 into a 200.
 *
 * Usage:  node scripts/copy-routes.mjs
 * Runs after:  vite build
 * Cross-platform: plain Node.js fs/path — works on Windows and Ubuntu.
 */

import { copyFileSync, mkdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT      = join(__dirname, '..')
const DIST      = join(ROOT, 'dist')
const SRC       = join(DIST, 'index.html')

// ─── All static routes the React app serves ───────────────────────────────────
// Keep this list in sync with src/App.tsx <Routes> and src/data/projects.ts ids.
const ROUTES = [
  '/resume',
  '/contact',
  '/sdlc',
  '/projects',                          // parent — useful for safety
  '/projects/mizzou-cloud-devops',
  '/projects/rise-rag-chatbot',
  '/projects/rpm-health-monitoring',
  '/projects/mcdonalds-npos',
  '/projects/orangehrm-automation',
]

// ─── Guard ────────────────────────────────────────────────────────────────────
if (!existsSync(SRC)) {
  console.error(`ERROR: ${SRC} not found. Run "vite build" first.`)
  process.exit(1)
}

// ─── Copy index.html into each route directory ────────────────────────────────
console.log('\nCopying index.html into route directories:')
for (const route of ROUTES) {
  const dir  = join(DIST, ...route.split('/').filter(Boolean))
  const dest = join(dir, 'index.html')
  mkdirSync(dir, { recursive: true })
  copyFileSync(SRC, dest)
  console.log(`  ✓  dist${route}/index.html`)
}

// ─── 404 fallback (keep for any routes not listed above) ─────────────────────
const fallback = join(DIST, '404.html')
copyFileSync(SRC, fallback)
console.log(`  ✓  dist/404.html`)

console.log('\nRoute copy complete.\n')
