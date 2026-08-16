import { useParams } from 'react-router-dom'

function SubjectDetails() {
  const { subject } = useParams()

  return (
    <main className="page">
      <p className="hero-label">GATE SUBJECT</p>

      <h1>{subject}</h1>

      <p>
        Syllabus, preparation strategy, notes, PYQs and useful resources
        for this subject.
      </p>
    </main>
  )
}

export default SubjectDetails