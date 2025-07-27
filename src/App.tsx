import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
