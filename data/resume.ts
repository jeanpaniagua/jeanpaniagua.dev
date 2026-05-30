import type { ResumeData } from '../types/resume'

export const resumeData: ResumeData = {
  profile: {
    name: 'Jean Paniagua',
    title: 'Full Stack Engineer',
    headline:
      'Full Stack Engineer building production web apps with Vue 3, Next.js, TypeScript, Node.js, and GraphQL — 5 years in consulting.',
    location: 'Cartago, Costa Rica',
    yearsOfExperience: 5,
    bio: [
      'Full-stack engineer with 5 years of experience building and shipping production web applications through Gorilla Logic, embedded in client teams across property management, insurance, and home services.',
      'My work spans the entire stack — Vue 3 and Next.js frontends, GraphQL and REST APIs, NestJS and Node.js backends, PostgreSQL, Redis, Prisma, and cloud infra on GCP. I\'ve worked on platforms with 60-person eng teams and as one of 6 engineers keeping a core product running after a major org restructure.',
      'Recently I\'ve leaned into AI-augmented development — using spec-driven workflows with Cursor and Claude to take our team from under 50 to 100+ story points per sprint. That\'s not a marginal gain; it\'s a different way of working.',
    ].join('\n\n'),
    email: 'jeanpaniaguab@gmail.com',
    socials: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/jean-carlo-paniagua-bastos/' },
    ],
  },

  // Reverse-chronological. All roles at Gorilla Logic as a consultant —
  // client field shows who the work was actually done for.
  experience: [
    {
      company: 'Gorilla Logic',
      client: 'Goosehead Insurance',
      role: 'Consultant Full Stack Developer',
      start: '2025-12',
      end: 'Present',
      location: 'Costa Rica · Remote',
      summary:
        'Full-stack engineer on the customer portal for Goosehead Insurance, one of the largest independent insurance brokerages in the US (200+ carriers).',
      highlights: [
        'Delivered Mercury Auto integration — API integration, UI flows, and data mapping — working across two pods.',
        'Delivered Progressive Home integration as a single-pod engagement, from API integration through customer-facing UI.',
        'Adopted spec-driven development with AI tooling (Cursor, Claude) — team went from under 50 to 100+ story points per sprint, more than doubling delivery velocity.',
        'Operating in a lean pod structure (3 devs + tech lead + QA) with full-stack ownership across frontend and backend.',
      ],
      stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Prisma', 'Redis', 'Salesforce', 'Playwright'],
    },
    {
      company: 'Gorilla Logic',
      client: 'PURE Property Management',
      role: 'Consultant Full Stack Developer',
      start: '2022-07',
      end: '2025-11',
      location: 'Costa Rica · Remote',
      summary:
        'Embedded full-stack engineer on PURE\'s core platform — an integrated system managing properties, owners, vendors, accounting, communications, and operational flows for one of the largest property management companies in the US.',
      highlights: [
        'Joined a ~60-person engineering org on the core team, responsible for all entities, communication flows, and major operational processes.',
        'Implemented LaunchDarkly feature flag system integrated with Segment, enabling product to toggle features at the corporation, brand, or individual user level.',
        'Built Twilio and Gmail API integrations powering in-app communication between property managers, owners, and residents.',
        'Developed background data jobs for automated cleanup and table updates across the platform.',
        'Delivered a critical business feature end-to-end in under 2 weeks from requirements to production.',
        'Following a 50% org restructure in July 2024, became one of 5 remaining engineers — expanded scope to cover additional modules previously owned by other teams.',
        'Promoted AI-accelerated development within the team, guiding teammates on adopting AI tooling to improve productivity and delivery speed.',
      ],
      stack: ['Vue 3', 'TypeScript', 'Apollo', 'Node.js', 'NestJS', 'GraphQL', 'PostgreSQL', 'Tailwind'],
      projects: [
        {
          name: 'Houses Catalog Landing Page',
          description:
            'Interactive marketing site showcasing diverse house models. Built with React, TypeScript, and Gatsby for static-site performance and snappy navigation.',
          stack: ['React', 'TypeScript', 'Gatsby'],
        },
      ],
    },
    {
      company: 'Gorilla Logic',
      client: 'Gorilla Logic Internal',
      role: 'Associate Full Stack Developer',
      start: '2021-07',
      end: '2022-07',
      location: 'Costa Rica · Remote',
      summary:
        'Contributed to an internal design-agnostic Vue component library — a headless system where component behavior was controlled entirely in Vue and styling was applied externally via config files, allowing any design system to be layered on top.',
      highlights: [
        'Built reusable, theme-independent Vue 3 components with clean separation between behavior and presentation.',
        'Deepened expertise in Vue\'s component model, reactivity system, props API, and slot architecture.',
      ],
      stack: ['Vue 3', 'TypeScript', 'Tailwind'],
    },
    {
      company: 'Gorilla Logic',
      client: 'HomeAdvisor / Angie\'s List (now Angi)',
      role: 'Full Stack Developer Intern',
      start: '2021-02',
      end: '2021-07',
      location: 'Costa Rica · Remote',
      summary:
        'Joined during the merger of HomeAdvisor and Angie\'s List into a unified platform. The team was building the integration layer that would power both brands from a single codebase — shared database, unified accounts, and a single website dynamically serving domain-specific content per brand.',
      highlights: [
        'Contributed to the frontend and backend integration work merging two large consumer platforms.',
        'Worked on a production codebase serving millions of homeowners and contractors across both brands.',
      ],
      stack: ['Vue', 'JavaScript', 'Node.js'],
    },
  ],

  skills: [
    {
      title: 'Frontend',
      items: [
        'Vue.js (2 & 3)',
        'Next.js',
        'React',
        'Nuxt 3',
        'TypeScript',
        'JavaScript',
        'Tailwind CSS',
        'Apollo',
        'Vuex',
        'Pinia',
        'Gatsby',
      ],
    },
    {
      title: 'Backend',
      items: ['Node.js', 'NestJS', 'GraphQL', 'REST', 'Prisma', 'Sequelize', 'Redis', 'Java'],
    },
    {
      title: 'Databases & Cloud',
      items: ['PostgreSQL', 'Redis', 'SQL Server', 'Google Cloud (GCP)'],
    },
    {
      title: 'Integrations',
      items: ['Twilio', 'Gmail API', 'LaunchDarkly', 'Segment', 'Salesforce'],
    },
    {
      title: 'DevOps & Tooling',
      items: ['Docker', 'GitHub Actions', 'Jenkins', 'Git', 'GitLab'],
    },
    {
      title: 'Testing',
      items: ['Jest', 'Vitest', 'Playwright'],
    },
    {
      title: 'AI-Assisted Development',
      items: ['GitHub Copilot', 'Cursor', 'Claude', 'ChatGPT'],
    },
    {
      title: 'Practices',
      items: ['Scrum', 'Kanban', 'Code Review', 'Mentorship', 'Testing strategy'],
    },
  ],

  education: [
    {
      school: 'Tecnológico de Costa Rica',
      degree: 'Ingeniería en Computación (Bachelor in Computing Engineering)',
      start: '2015',
      end: '2021',
      location: 'Cartago, Costa Rica',
    },
  ],

  certifications: [
    {
      name: 'Machine Learning con Python',
      issuer: 'Universidad Cenfotec',
      issued: '2026-03',
      credentialId: 'f9458cb9-8743-41d5-860b-243c3b5b6922',
    },
    {
      name: 'Ética y Sostenibilidad en Tecnología',
      issuer: 'Universidad Cenfotec',
      issued: '2026-03',
      credentialId: '4b5659e5-e2a8-4083-a417-d1d2753f214d',
    },
    // TODO: add the remaining 4 certifications from LinkedIn (LinkedIn shows 6 total)
  ],

  testimonials: [
    {
      quote:
        'Jean is the definition of a reliable, detail-oriented developer who consistently exceeds expectations. Whether implementing our LaunchDarkly system, building automated workflows, or tackling complex integrations, Jean combines careful planning with flawless execution. He is exactly the kind of developer who makes projects successful and teams stronger.',
      author: 'Dhvani Ganatra',
      authorRole: 'Product Manager',
      authorCompany: 'PURE',
      date: '2025-09',
      relationship: 'Worked with Jean as a client for over three years',
    },
  ],
}
