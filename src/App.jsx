import React from 'react'
import Navbar from './components/Navigation'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'
import './App.css'
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
            <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <Header />
      <div className='container'>
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
