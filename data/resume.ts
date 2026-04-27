import type { ResumeData } from '../types/resume'

export const resumeData: ResumeData = {
  profile: {
    name: 'Jean Paniagua',
    headline: 'Full Stack Engineer',
    location: 'Costa Rica', // TODO: confirm/refine
    bio: [
      // TODO: replace with final 2–3 paragraph bio
      'Full stack engineer with 5 years of experience building production web applications, currently at Gorilla Logic. I work across the stack — TypeScript on the frontend, Node and Python services on the backend, and the cloud plumbing that ties them together.',
      'I care about shipping reliable software: clean APIs, strong typing, sensible tests, and code that the next person on the team can actually read.',
    ].join('\n\n'),
    email: 'jeanpaniaguab@gmail.com',
    socials: [
      // TODO: confirm URLs
      { label: 'GitHub', url: 'https://github.com/jeanpaniagua' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/jeanpaniagua/' },
      { label: 'Email', url: 'mailto:jeanpaniaguab@gmail.com' },
    ],
  },

  experience: [
    {
      company: 'Gorilla Logic',
      role: 'Full Stack Engineer',
      start: '2021-01', // TODO: confirm exact start date
      end: 'Present',
      location: 'Remote',
      highlights: [
        // TODO: replace with real, quantified bullets
        'Lead full stack development on client engagements spanning fintech, healthcare, and SaaS.',
        'Build and maintain TypeScript / React frontends and Node / Python backends in production.',
        'Mentor junior engineers and run code reviews focused on correctness, readability, and testability.',
        'Partner with product and design to scope features end-to-end, from API design through release.',
      ],
      stack: [
        'TypeScript',
        'React',
        'Node.js',
        'Python',
        'PostgreSQL',
        'AWS',
      ],
    },
    // TODO: add prior roles here in reverse-chronological order
    // {
    //   company: 'Previous Co',
    //   role: 'Software Engineer',
    //   start: 'YYYY-MM',
    //   end: 'YYYY-MM',
    //   location: 'City, Country',
    //   highlights: ['...'],
    //   stack: ['...'],
    // },
  ],

  skills: [
    {
      title: 'Frontend',
      items: ['TypeScript', 'React', 'Vue 3', 'Next.js', 'Nuxt 3', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Python', 'REST', 'GraphQL', 'PostgreSQL', 'Redis'],
    },
    {
      title: 'Infra & DevOps',
      items: ['AWS', 'Docker', 'GitHub Actions', 'Terraform', 'Linux'],
    },
    {
      title: 'Practices',
      items: ['Testing', 'Code Review', 'API Design', 'Mentorship', 'Agile'],
    },
  ],
}
