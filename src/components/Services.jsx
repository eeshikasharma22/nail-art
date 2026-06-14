import './Services.css'

const services = [
  {
    id: 1,
    name: 'Gel Manicure',
    price: '$35',
    duration: '45 min',
    description: 'Long-lasting gel polish with professional finish',
    icon: '💎'
  },
  {
    id: 2,
    name: 'Acrylic Nails',
    price: '$40',
    duration: '60 min',
    description: 'Beautiful acrylic extensions with custom design',
    icon: '✨'
  },
  {
    id: 3,
    name: 'Nail Art',
    price: '$50',
    duration: '90 min',
    description: 'Custom artistic designs on your nails',
    icon: '🎨'
  },
  {
    id: 4,
    name: 'Pedicure',
    price: '$30',
    duration: '45 min',
    description: 'Relaxing foot care with polished finish',
    icon: '👣'
  },
  {
    id: 5,
    name: 'French Tips',
    price: '$25',
    duration: '30 min',
    description: 'Classic French manicure look',
    icon: '✴️'
  },
  {
    id: 6,
    name: 'Ombre Nails',
    price: '$45',
    duration: '50 min',
    description: 'Trendy ombre gradient nail design',
    icon: '🌈'
  }
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Our Services</h2>
        <p className="section-subtitle">Professional nail care for every occasion</p>
        
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.name}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-details">
                <span className="price">{service.price}</span>
                <span className="duration">{service.duration}</span>
              </div>
              <button className="service-btn">Select</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
