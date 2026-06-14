import './Hero.css'

export default function Hero({ onBookingClick }) {
  return (
    <section className="hero" id="hero">
      <div className="hero-content container">
        <div className="hero-text">
          <h1>Welcome to Nails Studio</h1>
          <p>Experience luxury nail care with our expert technicians</p>
          <div className="hero-stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>Satisfaction</p>
            </div>
          </div>
          <button className="cta-btn" onClick={onBookingClick}>
            Book Your Appointment
          </button>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <span>💅✨</span>
          </div>
        </div>
      </div>
    </section>
  )
}
