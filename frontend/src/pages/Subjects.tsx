import { useState } from 'react'
import { Link } from 'react-router-dom'
import { branchSubjects } from '../data/subjects'

function Subjects() {
  const [selectedBranch, setSelectedBranch] = useState('CSE / IT')

  const branches = [
    'CSE / IT',
    'ECE',
    'EE',
    'ME',
    'CE',
  ]

  const subjects = branchSubjects[selectedBranch as keyof typeof branchSubjects]

  return (
    <main className="subjects-page">
      <section className="subjects-header">
        <p className="hero-label">GATE PREPARATION</p>

        <h1>GATE Subjects</h1>

        <p>
          Select your branch and explore the subjects required for GATE
          preparation.
        </p>
      </section>

      <section className="branch-section">
        <h2>Select Branch</h2>

        <div className="branch-list">
          {branches.map((branch) => (
            <button
              key={branch}
              className={selectedBranch === branch ? 'branch-button active' : 'branch-button'}
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

           <Link to={`/subjects/${encodeURIComponent(subject)}`}>
  View Subject
</Link>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Subjects