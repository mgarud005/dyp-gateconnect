import { Link, useParams } from 'react-router-dom'
import { syllabus } from '../data/syllabus'

function Syllabus() {
  const { subject } = useParams()

  const decodedSubject = decodeURIComponent(subject || '')

  const subjectSyllabus =
    syllabus[decodedSubject as keyof typeof syllabus]

  return (
    <main className="page">
      <p className="hero-label">GATE SYLLABUS</p>

      <h1>{decodedSubject}</h1>

      <p>
        Complete GATE syllabus and important topics for {decodedSubject}.
      </p>

      {subjectSyllabus ? (
        <section className="syllabus-content">
          {Object.entries(subjectSyllabus).map(([unit, topics]) => (
            <div className="syllabus-section" key={unit}>
              <h2>{unit}</h2>

              <ul>
                {topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      ) : (
        <p>Syllabus for this subject is not available yet.</p>
      )}

      <Link to={`/subjects/${encodeURIComponent(decodedSubject)}`}>
        ← Back to Subject
      </Link>
    </main>
  )
}

export default Syllabus