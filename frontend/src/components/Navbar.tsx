import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">
        <span className="brand-main">DYP</span>
        <span className="brand-name">GATEConnect</span>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/subjects">Subjects</Link>
        <Link to="/pyqs">PYQs</Link>
        <Link to="/quizzes">Quizzes</Link>
        <Link to="/resources">Resources</Link>
      </nav>
    </header>
  )
}

export default Navbar