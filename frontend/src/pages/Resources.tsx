import { useState } from 'react'
import { Link } from 'react-router-dom'
import { resources } from '../data/resources'
import type { ResourceType } from '../data/resources'

const resourceTypes: ('All' | ResourceType)[] = [
  'All',
  'Notes',
  'Books',
  'Courses',
  'PYQs',
  'Tools',
]

const subjects = [
  'All Subjects',
  'Engineering Mathematics',
  'Discrete Mathematics',
  'Operating Systems',
  'DBMS',
  'Digital Logic',
  'Data Structures & Algorithms',
  'Theory of Computation',
  'Computer Networks',
  'General Aptitude',
]

function Resources() {
  const [selectedType, setSelectedType] =
    useState<'All' | ResourceType>('All')

  const [selectedSubject, setSelectedSubject] =
    useState('All Subjects')

  const filteredResources = resources.filter((resource) => {
    const matchesType =
      selectedType === 'All' || resource.type === selectedType

    const matchesSubject =
      selectedSubject === 'All Subjects' ||
      resource.subject === selectedSubject ||
      resource.subject === 'All Subjects'

    return matchesType && matchesSubject
  })

  return (
    <main className="resources-page">
      <section className="resources-header">
        <p className="hero-label">GATE RESOURCES</p>

        <h1>Resources</h1>

        <p>
          Find useful notes, study material, books, courses and other resources
          for GATE preparation.
        </p>
      </section>

      <section className="resources-filters">
        <div className="resource-filter-group">
          <h2>Resource Type</h2>

          <div className="resource-filter-list">
            {resourceTypes.map((type) => (
              <button
                key={type}
                type="button"
                className={selectedType === type ? 'active' : ''}
                onClick={() => {
                  setSelectedType(type)
                }}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="resource-filter-group">
          <h2>Subject</h2>

          <div className="resource-filter-list">
            {subjects.map((subject) => (
              <button
                key={subject}
                type="button"
                className={selectedSubject === subject ? 'active' : ''}
                onClick={() => {
                  setSelectedSubject(subject)
                }}
              >
                {subject}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="resources-grid">
        {filteredResources.map((resource) => (
          <article className="resource-card" key={resource.id}>
            <div className="resource-card-top">
              <span className="resource-type">
                {resource.type}
              </span>

              <span className="resource-subject">
                {resource.subject}
              </span>
            </div>

            <h2>{resource.title}</h2>

            <p>{resource.description}</p>

            <div className="resource-card-bottom">
              <span>{resource.source}</span>

              {resource.url.startsWith('/') ? (
                <Link to={resource.url}>
                  Open Resource →
                </Link>
              ) : (
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Resource →
                </a>
              )}
            </div>
          </article>
        ))}
      </section>

      {filteredResources.length === 0 && (
        <p className="resources-empty">
          No resources found for the selected filters.
        </p>
      )}
    </main>
  )
}

export default Resources