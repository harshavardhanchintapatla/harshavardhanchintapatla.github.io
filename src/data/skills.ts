import { Skill, SystemDesignCard } from '../types'

export const skills: Skill[] = [
  {
    category: 'Languages',
    icon: '{ }',
    items: [
      { name: 'Java', level: 'expert' },
      { name: 'Python', level: 'proficient' },
      { name: 'TypeScript', level: 'proficient' },
      { name: 'JavaScript', level: 'proficient' },
      { name: 'SQL', level: 'proficient' },
      { name: 'HTML5 / CSS3', level: 'proficient' },
    ],
  },
  {
    category: 'Backend & Frameworks',
    icon: '⚙️',
    items: [
      { name: 'Spring Boot', level: 'expert' },
      { name: 'Spring Security', level: 'expert' },
      { name: 'Spring Data JPA / Hibernate', level: 'expert' },
      { name: 'REST API Design', level: 'expert' },
      { name: 'OAuth2', level: 'proficient' },
      { name: 'Node.js / Express.js', level: 'proficient' },
      { name: 'Spring MVC', level: 'expert' },
    ],
  },
  {
    category: 'Frontend',
    icon: '🖥️',
    items: [
      { name: 'React', level: 'proficient' },
      { name: 'TypeScript / React', level: 'proficient' },
      { name: 'AngularJS', level: 'proficient' },
      { name: 'Thymeleaf', level: 'proficient' },
      { name: 'Chart.js', level: 'familiar' },
      { name: 'Bootstrap / Tailwind', level: 'proficient' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    items: [
      { name: 'AWS EC2', level: 'proficient' },
      { name: 'AWS S3', level: 'proficient' },
      { name: 'AWS Lambda', level: 'proficient' },
      { name: 'AWS API Gateway', level: 'proficient' },
      { name: 'Amazon SQS', level: 'proficient' },
      { name: 'Amazon RDS', level: 'proficient' },
      { name: 'Jenkins CI/CD', level: 'proficient' },
      { name: 'Docker', level: 'familiar' },
      { name: 'Git / GitHub', level: 'expert' },
      { name: 'Maven', level: 'proficient' },
    ],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    items: [
      { name: 'MySQL', level: 'proficient' },
      { name: 'MongoDB', level: 'proficient' },
      { name: 'Qdrant (Vector DB)', level: 'proficient' },
      { name: 'ChromaDB (Vector DB)', level: 'proficient' },
    ],
  },
  {
    category: 'AI & LLMs',
    icon: '🤖',
    items: [
      { name: 'GPT-4 API', level: 'proficient' },
      { name: 'LLaMA 3.1 via Ollama', level: 'proficient' },
      { name: 'RAG Pipeline Design', level: 'proficient' },
      { name: 'Vector Embeddings', level: 'proficient' },
      { name: 'LLM Tool Calling', level: 'proficient' },
      { name: 'nomic-embed-text', level: 'proficient' },
    ],
  },
  {
    category: 'Testing & QA',
    icon: '🧪',
    items: [
      { name: 'Selenium WebDriver', level: 'expert' },
      { name: 'Cypress (TypeScript)', level: 'proficient' },
      { name: 'TestNG', level: 'expert' },
      { name: 'Postman / Newman', level: 'proficient' },
      { name: 'Page Object Model', level: 'expert' },
      { name: 'Allure Reports', level: 'proficient' },
      { name: 'Jira', level: 'proficient' },
      { name: 'STLC', level: 'expert' },
    ],
  },
  {
    category: 'Data & ETL',
    icon: '📊',
    items: [
      { name: 'ETL Pipelines', level: 'familiar' },
      { name: 'Apache PDFBox', level: 'proficient' },
      { name: 'RClone / CEPH Storage', level: 'familiar' },
      { name: 'Pandas', level: 'familiar' },
    ],
  },
]

export const systemDesignCards: SystemDesignCard[] = [
  {
    title: 'Two-Tier Spring Boot Architecture',
    description: 'Web Tier handles SSR + session, API Tier exposes secured REST endpoints with TokenAuthFilter. Clean separation of rendering from data access.',
    project: 'MizzouCloudDevOps',
    tags: ['Spring Boot', 'REST API', 'Security'],
    icon: '🏗️',
  },
  {
    title: 'Token-Based API Security',
    description: 'GitHub OAuth2 callback generates custom session tokens. TokenAuthFilter validates X-Auth-Token on every API request. Token revocation simpler than JWT.',
    project: 'MizzouCloudDevOps',
    tags: ['Spring Security', 'OAuth2', 'Tokens'],
    icon: '🔐',
  },
  {
    title: 'RAG with Controlled Tool Registry',
    description: 'GPT-4 assistant restricted to read-only MySQL analytics views via a controlled tool registry. LLM cannot access live student data or trigger writes.',
    project: 'MizzouCloudDevOps',
    tags: ['RAG', 'GPT-4', 'Tool Calling'],
    icon: '🎛️',
  },
  {
    title: 'SQS-Based Async Processing',
    description: 'Health device ingestion decoupled from processing via SQS. Ingestion Lambda archives to S3 first, then enqueues. Processing Lambda runs idempotently.',
    project: 'RPM Platform',
    tags: ['AWS SQS', 'Lambda', 'Idempotency'],
    icon: '📬',
  },
  {
    title: 'Serverless Ingestion Pipeline',
    description: 'API Gateway → Lambda → S3 + SQS → Processing Lambda → RDS. No server management. Scales with device traffic automatically.',
    project: 'RPM Platform',
    tags: ['Serverless', 'AWS', 'Lambda'],
    icon: '⚡',
  },
  {
    title: 'Vector DB Payload Filtering',
    description: 'Single Qdrant index serves two research groups via payload metadata filtering. No separate indices needed — group isolation enforced at query time.',
    project: 'RISE/PAALAB',
    tags: ['Qdrant', 'RAG', 'Multi-tenant'],
    icon: '🔍',
  },
  {
    title: 'Jenkins CI/CD Release Gates',
    description: 'Newman API tests and Cypress UI tests run in Jenkins before every release. Failed tests block deployment. Go/no-go decision backed by automated evidence.',
    project: "McDonald's NPOS",
    tags: ['Jenkins', 'CI/CD', 'Release Gate'],
    icon: '🚦',
  },
  {
    title: 'Selenium Page Object Model',
    description: 'ThreadLocal DriverFactory enables parallel execution. Page Objects isolate UI selectors from test logic. WaitUtil enforces explicit waits only — zero Thread.sleep().',
    project: 'OrangeHRM Framework',
    tags: ['Selenium', 'POM', 'Java'],
    icon: '🧩',
  },
  {
    title: 'Cypress + Newman API Validation',
    description: 'UI automation via Cypress TypeScript and API contract validation via Postman/Newman in parallel Jenkins stages. Two independent quality signals before release.',
    project: "McDonald's NPOS",
    tags: ['Cypress', 'Postman', 'API Testing'],
    icon: '✅',
  },
  {
    title: 'N+1 Query Optimization',
    description: 'Detected N+1 query pattern in JPA bidirectional student-enrollment mapping. Resolved by using HashSet in entity relationship, reducing DB round trips from O(n) to O(1).',
    project: 'MizzouCloudDevOps',
    tags: ['JPA', 'Hibernate', 'Performance'],
    icon: '📈',
  },
]

export const sdlcPhases = [
  { name: 'Requirement Analysis', description: 'Understanding problem scope, user needs, and system constraints' },
  { name: 'System Design', description: 'Architecture decisions, component design, data modeling' },
  { name: 'Development', description: 'Implementation with clean code, security, and testability' },
  { name: 'Testing', description: 'Unit, integration, and end-to-end validation' },
  { name: 'CI/CD', description: 'Automated build, test, and deployment pipelines' },
  { name: 'Deployment', description: 'Cloud provisioning, infrastructure, configuration management' },
  { name: 'Monitoring', description: 'Observability, alerting, performance tracking' },
]

export const stlcPhases = [
  { name: 'Requirement Analysis', description: 'Reviewing requirements for testability and clarity' },
  { name: 'Test Planning', description: 'Scope, strategy, resource, and risk assessment' },
  { name: 'Test Case Design', description: 'Traceability matrix, positive and negative scenarios' },
  { name: 'Test Data Setup', description: 'Environment prep, data provisioning, tooling setup' },
  { name: 'Test Execution', description: 'Manual and automated test runs, defect logging' },
  { name: 'Defect Lifecycle', description: 'Log → Triage → Fix → Retest → Close in Jira' },
  { name: 'Regression Testing', description: 'Ensure existing functionality not broken by new changes' },
  { name: 'Test Reporting', description: 'Coverage metrics, defect density, Allure/Newman reports' },
  { name: 'Release Sign-off', description: 'Go/no-go criteria validated, stakeholder sign-off obtained' },
]

export const projectSDLCMapping = [
  {
    project: 'MizzouCloudDevOps',
    color: 'blue',
    phases: ['SDLC', 'Backend Design', 'API Security', 'RAG Pipeline', 'AWS Deployment', 'CI/CD'],
  },
  {
    project: 'RISE/PAALAB',
    color: 'purple',
    phases: ['AI/RAG', 'Privacy Design', 'Live Context Retrieval', 'Streaming UI'],
  },
  {
    project: 'RPM Platform',
    color: 'green',
    phases: ['AWS System Design', 'Async Processing', 'Serverless Architecture', 'SDLC'],
  },
  {
    project: "McDonald's NPOS",
    color: 'orange',
    phases: ['STLC', 'SIT', 'UAT', 'Release Readiness', 'Cypress Automation', 'API Validation'],
  },
  {
    project: 'OrangeHRM',
    color: 'yellow',
    phases: ['STLC', 'Selenium Framework', 'CI/CD Integration', 'Test Reporting'],
  },
]
