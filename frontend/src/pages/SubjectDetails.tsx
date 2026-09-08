import { Link, useParams } from 'react-router-dom'
import { subjectDetails } from '../data/subjectDetails'

function SubjectDetails() {
  const { subject } = useParams()

  const details = subject ? subjectDetails[subject as keyof typeof subjectDetails] : undefined

  if (!details) {
    return (
      <main className="page">
        <h1>Subject not found</h1>
        <Link to="/subjects">← Back to Subjects</Link>
      </main>
    )
  }

  return (
    <main className="subject-details-page">
      <section className="subject-details-header">
        <p className="hero-label">GATE SUBJECT</p>

        <h1>{subject}</h1>

        <p>{details.description}</p>
      </section>

      <section className="subject-details-grid">
        <div className="detail-card">
          <h2>Syllabus</h2>
          <p>Explore the important topics and complete syllabus.</p>
          <Link to={`/subjects/${encodeURIComponent(subject || '')}/syllabus`}>
  View Syllabus
</Link>
        </div>

        <div className="detail-card">
          <h2>Preparation</h2>
          <p>Follow a structured preparation approach for this subject.</p>
          <Link to={`/subjects/${encodeURIComponent(subject || '')}/preparation`}>
  Preparation Guide
</Link>
        </div>

        <div className="detail-card">
          <h2>PYQs</h2>
          <p>Practice previous year GATE questions from this subject.</p>
          <Link to="/pyqs">View PYQs</Link>
        </div>

        <div className="detail-card">
          <h2>Resources</h2>
          <p>Find useful notes and study material for preparation.</p>
          <Link to="/resources">View Resources</Link>
        </div>
      </section>

      <section className="subject-back">
        <Link to="/subjects">← Back to Subjects</Link>
      </section>
    </main>
  )
}

export default SubjectDetails