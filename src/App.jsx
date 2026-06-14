import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Booking from './components/Booking'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [bookingOpen, setBookingOpen] = useState(false)

  return (
    <div className="app">
      <Navbar onBookingClick={() => setBookingOpen(true)} />
      <Hero onBookingClick={() => setBookingOpen(true)} />
      <Services />
      <Gallery />
      <Testimonials />
      {bookingOpen && <Booking onClose={() => setBookingOpen(false)} />}
      <Contact />
      <Footer />
    </div>
  )
}

export default App
