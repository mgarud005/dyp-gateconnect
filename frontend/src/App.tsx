import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SubjectDetails from './pages/SubjectDetails'

import Home from './pages/Home'
import Subjects from './pages/Subjects'
import PYQs from './pages/PYQs'
import Quizzes from './pages/Quizzes'
import Resources from './pages/Resources'
import StudyPlanner from './pages/StudyPlanner'
import Tools from './pages/Tools'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/pyqs" element={<PYQs />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/study-planner" element={<StudyPlanner />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/about" element={<About />} />
        <Route path="/subjects/:subject" element={<SubjectDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App