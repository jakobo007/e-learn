import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Classes from './components/Classes';
import About from './components/About';
import Contact from './components/Contact';
import Hero_text from './components/Hero_text';
import CourseForm from './components/CourseForm';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const formOverlayRef = useRef(null);
  const formRef = useRef(null);

  const handleChoosePlan = () => {
    setShowForm(true);
  };

  const handleFormSubmit = () => {
    setShowForm(false);
  };

  const handleClickOutside = (event) => {
    if (showForm && formOverlayRef.current && !formRef.current?.contains(event.target)) {
      setShowForm(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showForm]);

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Hero />
        <Hero_text />
        <Classes onChoosePlan={handleChoosePlan} />
        <About />
        <Contact />
      </div>
      {showForm && (
        <div className="form-overlay" ref={formOverlayRef}>
          <div ref={formRef}>
            <CourseForm onFormSubmit={handleFormSubmit} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;