import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    text: 'Amazing experience! The staff is so friendly and professional. My nails look stunning!',
    rating: 5,
    avatar: '👩'
  },
  {
    id: 2,
    name: 'Emma Davis',
    text: 'Best nail salon in town. They always remember my preferences and create perfect designs.',
    rating: 5,
    avatar: '👩‍🦰'
  },
  {
    id: 3,
    name: 'Jessica Lee',
    text: 'Highly recommend! Great attention to detail and the salon is so clean and welcoming.',
    rating: 5,
    avatar: '👩‍🦱'
  },
  {
    id: 4,
    name: 'Maria Garcia',
    text: 'Been going there for 2 years. They never disappoint. Love the gel manicures!',
    rating: 5,
    avatar: '👩‍🦳'
  }
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <p className="section-subtitle">Real reviews from our happy customers</p>
        
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="stars">
                {'⭐'.repeat(testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <span className="avatar">{testimonial.avatar}</span>
                <h4>{testimonial.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
