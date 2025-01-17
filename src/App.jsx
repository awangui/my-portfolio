import React from 'react'
import Navbar from './components/Navigation'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'
import './App.css'

function App() {
 

  return (
    <>
      <Navbar />
      <Header />
      <div className='container'>
      <About  />
      <Projects />
      <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
