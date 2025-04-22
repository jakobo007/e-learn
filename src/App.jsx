import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Classes from './components/Classes'
import About from './components/About'
import Contact from './components/Contact'
import Hero_text from './components/Hero_text'
const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Hero_text />
    <Classes />
    <About />
    <Contact />
    </>
  )
}

export default App
