import './App.css'
import Syllabus from './pages/Syllabus'
import Preparation from './pages/Preparation'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


import Home from './pages/Home'
import Subjects from './pages/Subjects'
import SubjectDetails from './pages/SubjectDetails'
import PYQs from './pages/PYQs'
import Quizzes from './pages/Quizzes'
import Resources from './pages/Resources'
import StudyPlanner from './pages/StudyPlanner'
import Tools from './pages/Tools'
import About from './pages/About'
import PYQDetails from './pages/PYQDetails'


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/subjects/:subject" element={<SubjectDetails />} />
        <Route path="/subjects/:subject/syllabus" element={<Syllabus />} />
        <Route path="/subjects/:subject/preparation" element={<Preparation />} />
        <Route path="/pyqs" element={<PYQs />} />
        <Route path="/pyqs/:subject" element={<PYQDetails />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/study-planner" element={<StudyPlanner />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App