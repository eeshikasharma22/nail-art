import './Gallery.css'

const galleryItems = [
  { id: 1, name: 'Glamorous Pink', category: 'Gel Manicure', emoji: '💖' },
  { id: 2, name: 'Sparkle Nails', category: 'Nail Art', emoji: '✨' },
  { id: 3, name: 'Marble Design', category: 'Acrylic', emoji: '🪨' },
  { id: 4, name: 'Ombre Gradient', category: 'Gel', emoji: '🌈' },
  { id: 5, name: 'Gold Accent', category: 'Acrylic', emoji: '✨' },
  { id: 6, name: 'French Elegance', category: 'Classic', emoji: '👑' },
  { id: 7, name: 'Floral Art', category: 'Nail Art', emoji: '🌸' },
  { id: 8, name: 'Party Glitter', category: 'Special', emoji: '🎉' }
]

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <h2>Our Gallery</h2>
        <p className="section-subtitle">Beautiful nail designs by our talented artists</p>
        
        <div className="gallery-grid">
          {galleryItems.map(item => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-image">
                <span className="image-emoji">{item.emoji}</span>
              </div>
              <div className="gallery-info">
                <h4>{item.name}</h4>
                <p>{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
