export type ResourceType =
  | 'Notes'
  | 'Books'
  | 'Courses'
  | 'PYQs'
  | 'Tools'

export type Resource = {
  id: string
  title: string
  subject: string
  type: ResourceType
  description: string
  source: string
  url: string
}

export const resources: Resource[] = [
  {
    id: 'engineering-mathematics-notes',
    title: 'Engineering Mathematics Notes',
    subject: 'Engineering Mathematics',
    type: 'Notes',
    description:
      'Study material covering the major Engineering Mathematics topics for GATE.',
    source: 'DYP GATEConnect',
    url: '/subjects/Engineering%20Mathematics',
  },
  {
    id: 'discrete-mathematics-notes',
    title: 'Discrete Mathematics Notes',
    subject: 'Discrete Mathematics',
    type: 'Notes',
    description:
      'Study material for logic, sets, relations, graphs, combinatorics and related topics.',
    source: 'DYP GATEConnect',
    url: '/subjects/Discrete%20Mathematics',
  },
  {
    id: 'operating-systems-notes',
    title: 'Operating Systems Notes',
    subject: 'Operating Systems',
    type: 'Notes',
    description:
      'Study material covering important Operating Systems concepts for GATE.',
    source: 'DYP GATEConnect',
    url: '/subjects/Operating%20Systems',
  },
  {
    id: 'dbms-notes',
    title: 'DBMS Notes',
    subject: 'DBMS',
    type: 'Notes',
    description:
      'Study material for database concepts and important GATE topics.',
    source: 'DYP GATEConnect',
    url: '/subjects/DBMS',
  },
  {
    id: 'digital-logic-notes',
    title: 'Digital Logic Notes',
    subject: 'Digital Logic',
    type: 'Notes',
    description:
      'Study material for Digital Logic and important GATE concepts.',
    source: 'DYP GATEConnect',
    url: '/subjects/Digital%20Logic',
  },
  {
    id: 'dsa-notes',
    title: 'Data Structures & Algorithms Notes',
    subject: 'Data Structures & Algorithms',
    type: 'Notes',
    description:
      'Study material for Data Structures and Algorithms preparation.',
    source: 'DYP GATEConnect',
    url: '/subjects/Data%20Structures%20%26%20Algorithms',
  },
  {
    id: 'toc-notes',
    title: 'Theory of Computation Notes',
    subject: 'Theory of Computation',
    type: 'Notes',
    description:
      'Study material covering important Theory of Computation topics.',
    source: 'DYP GATEConnect',
    url: '/subjects/Theory%20of%20Computation',
  },
  {
    id: 'cn-notes',
    title: 'Computer Networks Notes',
    subject: 'Computer Networks',
    type: 'Notes',
    description:
      'Study material covering important Computer Networks topics for GATE.',
    source: 'DYP GATEConnect',
    url: '/subjects/Computer%20Networks',
  },
  {
    id: 'ga-notes',
    title: 'General Aptitude Notes',
    subject: 'General Aptitude',
    type: 'Notes',
    description:
      'Preparation material for General Aptitude in GATE.',
    source: 'DYP GATEConnect',
    url: '/subjects/General%20Aptitude',
  },
  {
    id: 'gate-pyqs',
    title: 'GATE Previous Year Questions',
    subject: 'All Subjects',
    type: 'PYQs',
    description:
      'Practice previous year questions for GATE preparation.',
    source: 'DYP GATEConnect',
    url: '/pyqs',
  },
  {
    id: 'gate-preparation-tools',
    title: 'GATE Preparation Tools',
    subject: 'All Subjects',
    type: 'Tools',
    description:
      'Useful tools for planning, practice and GATE preparation.',
    source: 'DYP GATEConnect',
    url: '/tools',
  },
]