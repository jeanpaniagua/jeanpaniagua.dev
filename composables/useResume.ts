import { resumeData } from '~/data/resume'
import type { ResumeData } from '~/types/resume'

/**
 * Single source of truth for resume content.
 * Returns a frozen view so components don't accidentally mutate it.
 */
export function useResume(): ResumeData {
  return resumeData
}
