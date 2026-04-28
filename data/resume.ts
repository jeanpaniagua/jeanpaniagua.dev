import type { ResumeData } from '../types/resume'

export const resumeData: ResumeData = {
  profile: {
    name: 'Jean Carlo Paniagua Bastos',
    title: 'Full Stack Developer',
    headline:
      'Full Stack Developer building production web apps with Vue, TypeScript, and Node.',
    location: 'Cartago, Costa Rica',
    yearsOfExperience: 5,
    bio: [
      'Full-stack developer with 5 years of experience building and scaling production web applications. I specialize in dynamic, user-friendly interfaces with Vue.js, backed by robust Node.js and GraphQL services. Tailwind keeps the visual layer fast and consistent.',
      'I lean on AI tooling — Copilot, Cursor, Claude — to move faster on repetitive work and free up focus for the genuinely interesting problems: clean architecture, testing strategies, and the small decisions that make code maintainable.',
      "Whether it's frontend or backend, I care about turning complex challenges into elegant solutions and shipping software that's pleasant to use and pleasant to inherit.",
    ].join('\n\n'),
    email: 'jeanpaniaguab@gmail.com',
    socials: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/jean-carlo-paniagua-bastos/' },
    ],
  },

  // Reverse-chronological. All three roles at Gorilla Logic — full progression
  // from intern to consultant. Selected projects sit under the most senior role
  // since that's where the bulk of the shipped work lives.
  experience: [
    {
      company: 'Gorilla Logic',
      role: 'Consultant Full Stack Developer',
      start: '2022-07',
      end: 'Present',
      location: 'Costa Rica · Remote',
      summary:
        'Lead full stack delivery on long-running client engagements, working across Vue 3, TypeScript, Node, GraphQL, and supporting infra.',
      stack: ['Vue 3', 'TypeScript', 'Apollo', 'Node.js', 'NestJS', 'GraphQL', 'PostgreSQL'],
      projects: [
        {
          name: 'Property Management Tool',
          description:
            'Property management progressive web app integrating Twilio and Gmail APIs for in-app communication. Built the frontend with Vue 3, Vuex, TypeScript, Tailwind, and Apollo, and the backend with Node.js, GraphQL, NestJS, and Sequelize.',
          stack: [
            'Vue 3',
            'Vuex',
            'TypeScript',
            'Tailwind',
            'Apollo',
            'Node.js',
            'GraphQL',
            'NestJS',
            'Sequelize',
            'Twilio',
            'Gmail API',
          ],
        },
        {
          name: 'Houses Catalog Landing Page',
          description:
            'Interactive marketing site showcasing diverse house models. Built with React, TypeScript, and Gatsby for static-site performance and snappy navigation.',
          stack: ['React', 'TypeScript', 'Gatsby'],
        },
        {
          name: 'Vue Components Design System',
          description:
            'Reusable component library inspired by Bootstrap, built with Vue 3 for dynamic behavior and Tailwind for consistent styling. Shared across multiple internal projects.',
          stack: ['Vue 3', 'TypeScript', 'Tailwind'],
        },
        {
          name: 'Services Marketplace (PWA)',
          description:
            'Progressive web app for a services marketplace. Frontend built with Vue 2, Vuex, Tailwind, and Axios; integrated with a Java backend.',
          stack: ['Vue 2', 'Vuex', 'Tailwind', 'Axios', 'Java'],
        },
      ],
    },
    {
      company: 'Gorilla Logic',
      role: 'Associate Full Stack Developer',
      start: '2021-07',
      end: '2022-07',
      location: 'Costa Rica · Remote',
      summary:
        'Expanded scope from frontend to full stack work, picked up backend ownership, and started mentoring incoming engineers.',
      highlights: [
        'Took on full feature delivery across Vue and Node services.',
        'Contributed to code reviews, testing strategy, and onboarding for new hires.',
      ],
      stack: ['Vue', 'TypeScript', 'Node.js', 'GraphQL'],
    },
    {
      company: 'Gorilla Logic',
      role: 'Full Stack Developer Intern',
      start: '2021-02',
      end: '2021-07',
      location: 'Costa Rica · Remote',
      summary:
        'Onboarded onto a production client codebase and shipped frontend and backend changes alongside senior engineers.',
      highlights: [
        'Ramped on Vue, TypeScript, and Node within an established consulting team.',
        'Delivered first production PRs and learned the consultancy delivery cadence.',
      ],
      stack: ['Vue', 'JavaScript', 'Node.js'],
    },
  ],

  skills: [
    {
      title: 'Frontend',
      items: [
        'Vue.js (2 & 3)',
        'Vuex',
        'Pinia',
        'TypeScript',
        'JavaScript',
        'Apollo',
        'Tailwind CSS',
        'React',
        'Gatsby',
      ],
    },
    {
      title: 'Backend',
      items: ['Node.js', 'NestJS', 'GraphQL', 'REST', 'Sequelize', 'Java'],
    },
    {
      title: 'Databases & Cloud',
      items: ['PostgreSQL', 'SQL Server', 'Google Cloud (GCP)'],
    },
    {
      title: 'DevOps & Tooling',
      items: ['Docker', 'GitHub Actions', 'Jenkins', 'Git', 'GitLab'],
    },
    {
      title: 'Testing',
      items: ['Jest', 'Vitest'],
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
