function Home() {
  return (
    <main>
      <section className="hero">
        <p className="hero-label">DYP GATE CELL</p>

        <h1>
          Your complete
          <br />
          GATE preparation platform.
        </h1>

        <p className="hero-description">
          Prepare smarter with subjects, PYQs, quizzes, resources,
          preparation guides and useful tools — all in one place.
        </p>

        <div className="hero-buttons">
          <button>Explore GATE</button>
          <button className="secondary-button">View PYQs</button>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h2>PYQs</h2>
          <p>Practice previous year GATE questions topic-wise.</p>
        </div>

        <div className="feature-card">
          <h2>Quizzes</h2>
          <p>Test your concepts with regular quizzes and mocks.</p>
        </div>

        <div className="feature-card">
          <h2>Resources</h2>
          <p>Find useful study material and preparation resources.</p>
        </div>
      </section>
    </main>
  )
}

export default Home