import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
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
    console.log('Contact submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="contact" id="contact">
      <div className="container contact-content">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>Have questions? We'd love to hear from you!</p>
          
          <div className="info-items">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <h4>Location</h4>
                <p>123 Beauty Street, Salon City, SC 12345</p>
              </div>
            </div>
            
            <div className="info-item">
              <span className="info-icon">📱</span>
              <div>
                <h4>Phone</h4>
                <p>(555) 123-4567</p>
              </div>
            </div>
            
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <div>
                <h4>Email</h4>
                <p>info@nailsstudio.com</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">🕐</span>
              <div>
                <h4>Hours</h4>
                <p>Mon-Fri: 10am - 8pm</p>
                <p>Sat-Sun: 11am - 6pm</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a href="#" className="social-btn">f</a>
            <a href="#" className="social-btn">📷</a>
            <a href="#" className="social-btn">𝕏</a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send us a Message</h3>
          
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
            />
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
          
          {submitted && (
            <p className="success-message">✓ Message sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  )
}
