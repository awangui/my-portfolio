import React from 'react'
import Navbar from './components/Navigation'
import Header from './components/Header'
import About from './pages/About'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Skills from './pages/Skills' // Import the Skills component
import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Router>
      <div className={darkMode ? 'app dark-mode' : 'app'}>
        <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <div className='container'>
                <About />
                <Skills /> {/* Show Skills on the home page */}
                <Projects />
                <Contact />
              </div>
            </>
          } />
          <Route path="/about" element={
            <div className='container'>
              <About />
            </div>
          } />
          <Route path="/skills" element={
            <div className='container'>
              <Skills /> {/* Dedicated Skills page */}
            </div>
          } />
          <Route path="/projects" element={
            <div className='container'>
              <Projects />
            </div>
          } />
          <Route path="/contact" element={
            <div className='container'>
              <Contact />
            </div>
          } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
