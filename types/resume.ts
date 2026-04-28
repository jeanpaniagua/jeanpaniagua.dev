export type SocialLabel = 'GitHub' | 'LinkedIn' | 'X' | 'Email'

export interface SocialLink {
  label: SocialLabel
  url: string
}

export interface Profile {
  name: string
  /** Short title shown next to the name (e.g. hero eyebrow + meta title). */
  title: string
  /** Long-form headline used in the hero subtitle. */
  headline: string
  location: string
  /** Two-letter year count, e.g. 5 (drives "5 years of …" copy). */
  yearsOfExperience: number
  bio: string
  email: string
  socials: SocialLink[]
}

export interface Project {
  name: string
  description: string
  stack?: string[]
}

export interface Experience {
  company: string
  role: string
  /** ISO YYYY-MM */
  start: string
  end: string | 'Present'
  location?: string
  /** One-line summary of what the role looked like at this level. */
  summary?: string
  /** Optional bullet highlights (prefer projects when possible). */
  highlights?: string[]
  /** Tech stack chips for the role overall. */
  stack?: string[]
  /** Selected projects shipped during this role. */
  projects?: Project[]
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface Education {
  school: string
  degree: string
  /** ISO YYYY */
  start: string
  end: string
  location?: string
}

export interface Certification {
  name: string
  issuer: string
  /** ISO YYYY-MM */
  issued: string
  credentialId?: string
  url?: string
}

export interface Testimonial {
  quote: string
  author: string
  authorRole: string
  authorCompany: string
  /** ISO YYYY-MM */
  date?: string
  /** Optional context — e.g. "Worked with Jean for 3 years at Gorilla Logic". */
  relationship?: string
}

export interface ResumeData {
  profile: Profile
  experience: Experience[]
  skills: SkillGroup[]
  education: Education[]
  certifications: Certification[]
  testimonials: Testimonial[]
}
