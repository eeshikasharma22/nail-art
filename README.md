# Nails Studio Website

A beautiful, modern nail salon website built with React and Vite.

## Features

- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Sticky Navigation**: Easy navigation with smooth scrolling
- **Services Section**: Display all nail services with prices and duration
- **Gallery**: Showcase nail designs
- **Testimonials**: Display customer reviews and ratings
- **Booking System**: Modal-based appointment booking form
- **Contact Form**: Get in touch with the salon
- **Beautiful UI**: Modern gradient designs and smooth animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd nails-studio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and go to `http://localhost:5173`

## Build

To build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Gallery.jsx
│   ├── Testimonials.jsx
│   ├── Booking.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## Features Breakdown

### Navbar
- Sticky navigation with smooth scrolling
- Mobile-responsive hamburger menu
- "Book Now" CTA button

### Hero Section
- Eye-catching banner with stats
- Call-to-action button
- Responsive layout

### Services
- 6 different nail services
- Pricing and duration information
- Hover animations
- Service selection buttons

### Gallery
- Grid layout of nail designs
- Hover animations
- Categorized designs

### Testimonials
- Customer reviews with 5-star ratings
- Avatar emojis for personality
- Responsive grid

### Booking Modal
- Form fields for name, email, phone
- Service selection dropdown
- Date and time picker
- Special requests textarea
- Form validation
- Success confirmation message

### Contact Section
- Contact information (location, phone, email, hours)
- Social media links
- Contact form with validation
- Success message

### Footer
- Quick links to sections
- Services list
- Social media links
- Copyright information

## Styling

The website uses:
- CSS custom properties (variables) for theming
- Linear gradients for modern look
- Smooth transitions and animations
- Mobile-first responsive design

## Color Scheme

- Primary: #e91e63 (Pink)
- Primary Dark: #c2185b (Darker Pink)
- Secondary: #ffc0cb (Light Pink)
- Text: #333 (Dark Gray)
- Background: #fff (White)

## License

This project is open source and available under the MIT License.
