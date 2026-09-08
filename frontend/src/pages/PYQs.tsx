import { useState } from 'react'
import { Link } from 'react-router-dom'
import { pyqSubjects } from '../data/pyqs'

function PYQs() {
  const [selectedBranch, setSelectedBranch] = useState('CSE / IT')

  const branches = [
    'CSE / IT',
    'ECE',
    'EE',
    'ME',
    'CE',
  ]

  const subjects =
    pyqSubjects[selectedBranch as keyof typeof pyqSubjects]

  return (
    <main className="page">
      <section className="subjects-header">
        <p className="hero-label">GATE PRACTICE</p>

        <h1>Previous Year Questions</h1>

        <p>
          Select your branch and practice GATE previous year questions
          subject-wise.
        </p>
      </section>

      <section className="branch-section">
        <h2>Select Branch</h2>

        <div className="branch-list">
          {branches.map((branch) => (
            <button
              key={branch}
              className={
                selectedBranch === branch
                  ? 'branch-button active'
                  : 'branch-button'
              }
              onClick={() => setSelectedBranch(branch)}
            >
              {branch}
            </button>
          ))}
        </div>
      </section>

      <section className="subjects-grid">
        {subjects.map((subject, index) => (
          <div className="subject-card" key={subject}>
            <span className="subject-number">
              {String(index + 1).padStart(2, '0')}
            </span>

            <h2>{subject}</h2>

            <Link to={`/pyqs/${encodeURIComponent(subject)}`}>
              View PYQs
            </Link>
          </div>
        ))}
      </section>
    </main>
  )
}

export default PYQs