import { Link, useParams } from 'react-router-dom'

function Preparation() {
  const { subject } = useParams()

  return (
    <main className="page">
      <p className="hero-label">GATE PREPARATION</p>

      <h1>{subject}</h1>

      <p>
        Preparation strategy, study approach and useful guidance for{' '}
        {subject} will be available here.
      </p>

      <Link to={`/subjects/${encodeURIComponent(subject || '')}`}>
        ← Back to Subject
      </Link>
    </main>
  )
}

export default Preparation