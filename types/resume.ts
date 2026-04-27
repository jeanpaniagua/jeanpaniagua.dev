export type SocialLabel = 'GitHub' | 'LinkedIn' | 'X' | 'Email'

export interface SocialLink {
  label: SocialLabel
  url: string
}

export interface Profile {
  name: string
  headline: string
  location: string
  bio: string
  email: string
  socials: SocialLink[]
}

export interface Experience {
  company: string
  role: string
  /** ISO YYYY-MM */
  start: string
  end: string | 'Present'
  location?: string
  highlights: string[]
  stack?: string[]
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface ResumeData {
  profile: Profile
  experience: Experience[]
  skills: SkillGroup[]
}
