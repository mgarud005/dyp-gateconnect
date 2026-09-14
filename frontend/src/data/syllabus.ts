export type SyllabusTopic = {
  title: string
  topics: string[]
}

export type SubjectSyllabus = {
  subject: string
  topics: SyllabusTopic[]
}

export const syllabusData: Record<string, SubjectSyllabus> = {
  'Engineering Mathematics': {
    subject: 'Engineering Mathematics',
    topics: [],
  },

  'Digital Logic': {
    subject: 'Digital Logic',
    topics: [],
  },

  'Computer Organization': {
    subject: 'Computer Organization',
    topics: [],
  },

  'Programming & Data Structures': {
    subject: 'Programming & Data Structures',
    topics: [],
  },

  Algorithms: {
    subject: 'Algorithms',
    topics: [],
  },

  'Theory of Computation': {
    subject: 'Theory of Computation',
    topics: [],
  },

  'Compiler Design': {
    subject: 'Compiler Design',
    topics: [],
  },

  'Operating Systems': {
    subject: 'Operating Systems',
    topics: [],
  },

  Databases: {
    subject: 'Databases',
    topics: [],
  },

  'Computer Networks': {
    subject: 'Computer Networks',
    topics: [],
  },

  'General Aptitude': {
    subject: 'General Aptitude',
    topics: [],
  },
}