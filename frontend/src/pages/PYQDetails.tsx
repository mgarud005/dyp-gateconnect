import { Link, useParams } from 'react-router-dom'

function PYQDetails() {
  const { subject } = useParams()

  return (
    <main className="page">
      <section className="subject-details-header">
        <p className="hero-label">GATE PYQs</p>

        <h1>{subject}</h1>

        <p>
          Practice previous year GATE questions for {subject}.
        </p>
      </section>

      <section className="detail-card">
        <h2>Previous Year Questions</h2>

        <p>
          Year-wise and topic-wise questions will be added here.
        </p>
      </section>

      <section className="subject-back">
        <Link to="/pyqs">← Back to PYQs</Link>
      </section>
    </main>
  )
}

export default PYQDetails