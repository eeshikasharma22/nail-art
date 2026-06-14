import { useState } from 'react'
import './Booking.css'

export default function Booking({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: 'Gel Manicure',
    notes: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Booking submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      onClose()
    }, 2000)
  }

  return (
    <div className="booking-modal" onClick={onClose}>
      <div className="booking-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        
        {!submitted ? (
          <>
            <h2>Book Your Appointment</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div className="form-group">
                  <label>Service *</label>
                  <select 
                    name="service" 
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option>Gel Manicure</option>
                    <option>Acrylic Nails</option>
                    <option>Nail Art</option>
                    <option>Pedicure</option>
                    <option>French Tips</option>
                    <option>Ombre Nails</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Time *</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Special Requests</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Any special requests or design ideas?"
                  rows="4"
                />
              </div>

              <button type="submit" className="submit-btn">Confirm Booking</button>
            </form>
          </>
        ) : (
          <div className="booking-success">
            <h2>✓ Booking Confirmed!</h2>
            <p>Thank you, {formData.name}!</p>
            <p>We've sent a confirmation to your email.</p>
            <p>See you on {formData.date} at {formData.time}</p>
          </div>
        )}
      </div>
    </div>
  )
}
