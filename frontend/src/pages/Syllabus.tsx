import { Link, useParams } from 'react-router-dom'

function Syllabus() {
  const { subject } = useParams()

  return (
    <main className="page">
      <p className="hero-label">GATE SYLLABUS</p>

      <h1>{subject}</h1>

      <p>
        Complete syllabus and important topics for {subject} will be
        available here.
      </p>

      <Link to={`/subjects/${encodeURIComponent(subject || '')}`}>
        ← Back to Subject
      </Link>
    </main>
  )
}

export default Syllabus