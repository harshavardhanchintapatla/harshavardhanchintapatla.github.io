export interface Project {
  id: string
  title: string
  subtitle: string
  role: string
  categories: ProjectCategory[]
  techStack: string[]
  impact: string
  recruiterSummary: string
  problem: string
  whyItMatters: string
  architectureDiagram: ArchNode[]
  keyDecisions: string[]
  sdlcPhase: string[]
  testingApproach: string[]
  security: string[]
  tradeoffs: string[]
  productionImprovements: string[]
  whatILearned: string[]
  interviewPitch: string
  githubUrl?: string
  demoUrl?: string
  demoNote?: string
  isPublicDemo?: boolean
  color: string
  icon: string
}

export type ProjectCategory =
  | 'Full Stack'
  | 'Backend'
  | 'AWS'
  | 'AI/RAG'
  | 'SDET'
  | 'QA Automation'
  | 'System Design'

export interface ArchNode {
  label: string
  children?: ArchNode[]
  type?: 'user' | 'service' | 'db' | 'cloud' | 'ai' | 'queue' | 'api'
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  location: string
  type: string
  description: string
  highlights: string[]
  techStack: string[]
  sdlcPhases: string[]
}

export interface Skill {
  category: string
  icon: string
  items: SkillItem[]
}

export interface SkillItem {
  name: string
  level: 'expert' | 'proficient' | 'familiar'
}

export interface SystemDesignCard {
  title: string
  description: string
  project: string
  tags: string[]
  icon: string
}

export interface SDLCPhase {
  name: string
  description: string
}

export type ViewMode = 'recruiter' | 'engineer'
export type TargetRole =
  | 'all'
  | 'java-fullstack'
  | 'backend'
  | 'aws'
  | 'ai-rag'
  | 'sdet'
  | 'software-engineer'
