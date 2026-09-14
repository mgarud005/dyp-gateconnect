export type PreparationSection = {
  title: string
  content: string[]
}

export type SubjectPreparation = {
  subject: string
  sections: PreparationSection[]
}

export const preparationData: Record<string, SubjectPreparation> = {
  'Engineering Mathematics': {
    subject: 'Engineering Mathematics',
    sections: [],
  },

  'Digital Logic': {
    subject: 'Digital Logic',
    sections: [],
  },

  'Computer Organization': {
    subject: 'Computer Organization',
    sections: [],
  },

  'Programming & Data Structures': {
    subject: 'Programming & Data Structures',
    sections: [],
  },

  Algorithms: {
    subject: 'Algorithms',
    sections: [],
  },

  'Theory of Computation': {
    subject: 'Theory of Computation',
    sections: [],
  },

  'Compiler Design': {
    subject: 'Compiler Design',
    sections: [],
  },

  'Operating Systems': {
    subject: 'Operating Systems',
    sections: [],
  },

  Databases: {
    subject: 'Databases',
    sections: [],
  },

  'Computer Networks': {
    subject: 'Computer Networks',
    sections: [],
  },

  'General Aptitude': {
    subject: 'General Aptitude',
    sections: [],
  },
}