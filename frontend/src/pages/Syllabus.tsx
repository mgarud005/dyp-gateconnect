import { Link, useParams } from 'react-router-dom'
import { syllabusData } from '../data/syllabus'

function Syllabus() {
  const { subject } = useParams()

  const decodedSubject = subject ? decodeURIComponent(subject) : ''
  const syllabus = syllabusData[decodedSubject]

  if (!syllabus) {
    return (
      <main className="page">
        <p className="hero-label">GATE SYLLABUS</p>

        <h1>Subject Not Found</h1>

        <p>
          The requested subject syllabus could not be found.
        </p>

        <Link to="/subjects">← Back to Subjects</Link>
      </main>
    )
  }

  return (
    <main className="page">
      <section className="subject-details-header">
        <p className="hero-label">GATE SYLLABUS</p>

        <h1>{syllabus.subject}</h1>

        <p>
          Complete syllabus and important topics for {syllabus.subject}.
        </p>
      </section>

      <section className="syllabus-section">
        {syllabus.topics.length === 0 ? (
          <div className="detail-card">
            <h2>Syllabus Coming Soon</h2>

            <p>
              The detailed GATE syllabus for this subject will be added
              after verification from the official GATE syllabus.
            </p>
          </div>
        ) : (
          syllabus.topics.map((section) => (
            <div className="detail-card" key={section.title}>
              <h2>{section.title}</h2>

              <ul>
                {section.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>
          ))
        )}
      </section>

      <section className="subject-back">
        <Link
          to={`/subjects/${encodeURIComponent(syllabus.subject)}`}
        >
          ← Back to Subject
        </Link>
      </section>
    </main>
  )
}

export default Syllabus