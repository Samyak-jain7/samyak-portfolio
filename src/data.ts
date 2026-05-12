export const stats = [
  { value: '5+', label: 'Years engineering production systems' },
  { value: '150K+', label: 'Peak requests/sec handled' },
  { value: '98%', label: 'Cache hit rate achieved' },
  { value: '2', label: 'Applied AI projects featured' },
];

export const contactLinks = {
  email: 'mailto:sj221097@gmail.com',
  bookCall: 'mailto:sj221097@gmail.com?subject=Senior%20backend%20role%20intro',
  resume: 'mailto:sj221097@gmail.com?subject=Resume%20request',
  linkedin: 'https://www.linkedin.com/in/silver-samyak',
  github: 'https://github.com/Samyak-jain7',
};

export const experiences = [
  {
    company: 'Observe.AI',
    role: 'Software Engineer II',
    period: 'Aug 2025 — Nov 2025',
    summary:
      'Architected DataPulse, an enterprise CDC platform moving MongoDB data into Snowflake across production pipelines.',
    impact: [
      'Processed millions of documents daily across 6+ production CDC pipelines',
      'Deployed a 3-replica Kafka Connect cluster on Kubernetes with Strimzi',
      'Reduced network overhead by 40% using ZSTD compression, batching, and 512MB buffers',
      'Built Python automation for Debezium snapshots and self-service backfills',
    ],
    stack: ['Debezium', 'Kafka Connect', 'Snowflake', 'MongoDB', 'Kubernetes', 'Python'],
  },
  {
    company: 'Fivetran',
    role: 'Software Engineer II',
    period: 'Nov 2024 — Mar 2025',
    summary:
      'Worked on analytical data pipelines and performance improvements for large-scale ingestion workloads.',
    impact: [
      'Migrated clustering strategy from Z-Order to Liquid Clustering',
      'Improved analytical query performance by 20%',
      'Built Python data quality checks and automated ingestion tests',
    ],
    stack: ['Java', 'Python', 'Snowflake', 'Data Pipelines'],
  },
  {
    company: 'Allen Digital',
    role: 'Software Engineer II',
    period: 'Jul 2023 — Nov 2024',
    summary:
      'Built high-throughput backend systems powering taxonomy, content hierarchy, and video chaptering workflows.',
    impact: [
      'Architected Taxonomy Service using versioned hierarchical MongoDB models',
      'Served 150K+ requests/sec at peak with 98% cache hit rate',
      'Reduced average response time by 70% from 120ms to 36ms',
      'Built video chaptering APIs and validation workflows, reducing upload errors by 80%',
    ],
    stack: ['Golang', 'MongoDB', 'Redis', 'AWS', 'REST APIs'],
  },
  {
    company: 'Amazon',
    role: 'Software Development Engineer',
    period: 'Jul 2020 — Mar 2023',
    summary:
      'Shipped backend reliability, automation, and performance improvements across production services.',
    impact: [
      'Automated deployment and monitoring tasks, saving 5+ hours/week',
      'Reduced page latency by ~10ms with lazy-loading validated via A/B testing',
      'Built CPU smoothing mechanism reducing spikes from 75% to 60%',
      'Led migration of 20+ legacy HTTP headers to improve modularity',
    ],
    stack: ['Python', 'Boto3', 'Java', 'AWS Lambda', 'S3', 'EC2'],
  },
];

export const projects = [
  {
    title: 'Document Intelligence',
    category: 'Applied AI / RAG',
    signal: 'Role-relevant AI backend',
    description:
      'RAG-based document platform for PDF upload, extraction, semantic search, and AI-powered document chat for legal, finance, HR, support, and internal knowledge automation.',
    outcome: 'Turns static PDFs into searchable, conversational knowledge workflows.',
    metrics: ['PDF ingestion', 'Semantic search', 'Document chat'],
    highlights: [
      'Designed ingestion flow for upload, parsing, chunking, and retrieval',
      'Built reusable primitives for private knowledge-base automation',
      'Focused on explainable document answers instead of generic chatbot output',
    ],
    tech: ['Python', 'RAG', 'Vector Search', 'PDF Processing'],
    link: 'https://github.com/Samyak-jain7/document-intelligence',
    cta: 'View repository',
  },
  {
    title: 'Multi-Agent Orchestrator',
    category: 'Agents / Workflow Automation',
    signal: 'AI automation prototype',
    description:
      'Visual platform to configure and run multiple AI agents for workflow automation, internal tools, ops copilots, and agentic business-process prototypes.',
    outcome: 'Makes complex agent workflows inspectable, configurable, and easier to ship.',
    metrics: ['Visual workflows', 'Agent routing', 'Ops copilots'],
    highlights: [
      'Modeled multi-step AI tasks as configurable flows',
      'Separated orchestration concerns from user-facing workflow controls',
      'Built as a strong starting point for internal automation systems',
    ],
    tech: ['TypeScript', 'React', 'AI Agents', 'Workflows'],
    link: 'https://github.com/Samyak-jain7/multi-agent-orchestrator',
    cta: 'View repository',
  },
];

export const services = [
  {
    title: 'Senior SDE',
    label: 'Primary target',
    description:
      'Backend ownership for product teams: APIs, distributed systems, reliability, performance, and production engineering judgment.',
    tech: ['Java', 'Golang', 'Python', 'AWS', 'Redis'],
  },
  {
    title: 'AI Native SDE',
    label: 'Target direction',
    description:
      'Engineering roles where backend systems integrate LLMs, agents, retrieval, evaluation, and AI-powered product workflows.',
    tech: ['LLMs', 'Agents', 'RAG', 'Python', 'APIs'],
  },
  {
    title: 'SDE - Applied AI',
    label: 'Project proof',
    description:
      'Applied AI product work: document intelligence, multi-agent workflows, internal copilots, and AI features that ship inside real apps.',
    tech: ['RAG', 'Vector Search', 'React', 'TypeScript', 'Python'],
  },
];

export const skills = [
  { group: 'Languages', items: ['Java', 'Python', 'Golang', 'C++'] },
  { group: 'Backend', items: ['Spring Boot', 'Django', 'Flask', 'REST APIs', 'Microservices'] },
  { group: 'Applied AI', items: ['RAG', 'AI Agents', 'Vector Search', 'Document Intelligence', 'Workflow Automation'] },
  { group: 'Databases', items: ['MongoDB', 'PostgreSQL', 'DynamoDB', 'Redis'] },
  { group: 'Cloud / DevOps', items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD'] },
  { group: 'Observability', items: ['Prometheus', 'Grafana', 'VictoriaMetrics', 'DataDog'] },
];
