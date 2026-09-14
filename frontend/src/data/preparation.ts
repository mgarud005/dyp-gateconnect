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

    sections: [
      {
        title: 'How to Study',
        content: [
          'Build the basic concepts before starting numerical problem practice.',
          'Study one topic at a time and solve questions immediately after learning the concept.',
          'Keep a separate formula and concept revision sheet.',
          'Focus on understanding the method used to solve a problem instead of memorising individual solutions.',
        ],
      },

      {
        title: 'Recommended Study Order',
        content: [
          'Start with Discrete Mathematics.',
          'Continue with Linear Algebra.',
          'Study Calculus after completing the required mathematical basics.',
          'Finish with Probability and Statistics.',
          'After completing all sections, begin mixed-topic practice.',
        ],
      },

      {
        title: 'Topic-wise Strategy',
        content: [
          'Discrete Mathematics: Focus on logic, sets, relations, functions, partial orders, lattices, algebraic structures, graphs and combinatorics.',
          'Linear Algebra: Practice matrices, determinants, systems of linear equations, eigenvalues, eigenvectors and LU decomposition.',
          'Calculus: Focus on limits, continuity, differentiability, maxima and minima, mean value theorem and integration.',
          'Probability and Statistics: Practice random variables, standard distributions, statistical measures, conditional probability and Bayes theorem.',
        ],
      },

      {
        title: 'Practice Strategy',
        content: [
          'Solve concept-based questions immediately after completing each topic.',
          'Gradually move from individual-topic questions to mixed-topic questions.',
          'Use previous year questions to understand the type and level of questions asked in GATE.',
          'Record mistakes and revisit the underlying concept instead of only memorising the correct answer.',
        ],
      },

      {
        title: 'Revision Strategy',
        content: [
          'Revise formulas and important concepts regularly.',
          'Maintain a short revision sheet for frequently used results and methods.',
          'Re-solve questions that were previously answered incorrectly.',
          'Use mixed-topic practice during later revision cycles.',
        ],
      },

      {
        title: 'GATE Exam Strategy',
        content: [
          'Read each question carefully before selecting a method.',
          'Avoid spending excessive time on a single difficult numerical problem.',
          'Use elimination and estimation where they are mathematically valid.',
          'Review calculation-heavy questions before final submission when time permits.',
        ],
      },
    ],
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