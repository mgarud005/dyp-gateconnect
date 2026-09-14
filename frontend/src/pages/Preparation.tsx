import { Link, useParams } from 'react-router-dom'
import { preparationData } from '../data/preparation'

function Preparation() {
  const { subject } = useParams()

  const decodedSubject = decodeURIComponent(subject || '')

  const preparation =
    preparationData[decodedSubject as keyof typeof preparationData]

  return (
    <main className="page">
      <p className="hero-label">GATE PREPARATION</p>

      <h1>{decodedSubject}</h1>

      <p>
        Preparation strategy, study approach and useful guidance for{' '}
        {decodedSubject}.
      </p>

      {preparation ? (
        preparation.sections.length > 0 ? (
          <section className="preparation-content">
            {preparation.sections.map((section) => (
              <div className="detail-card" key={section.title}>
                <h2>{section.title}</h2>

                <ul>
                  {section.content.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        ) : (
          <div className="detail-card">
            <h2>Preparation Guide Coming Soon</h2>

            <p>
              A detailed preparation strategy for this subject will be
              added after the content is properly prepared and reviewed.
            </p>
          </div>
        )
      ) : (
        <div className="detail-card">
          <h2>Subject Not Found</h2>

          <p>
            Preparation information for the requested subject could not
            be found.
          </p>
        </div>
      )}

      <Link to={`/subjects/${encodeURIComponent(decodedSubject)}`}>
        ← Back to Subject
      </Link>
    </main>
  )
}

export default Preparation