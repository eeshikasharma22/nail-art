import { useState } from 'react'
import './Navbar.css'

export default function Navbar({ onBookingClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <span className="logo-icon">💅</span>
          <h1>Nails Studio</h1>
        </div>
        
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollToSection('services')}>Services</a></li>
          <li><a onClick={() => scrollToSection('gallery')}>Gallery</a></li>
          <li><a onClick={() => scrollToSection('testimonials')}>Reviews</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          <li>
            <button className="booking-btn" onClick={onBookingClick}>
              Book Now
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
