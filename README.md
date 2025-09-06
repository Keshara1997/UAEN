# SDTI - Skills Development Training Institute Website

A modern, responsive education website built with React and Tailwind CSS for Skills Development Training Institute (SDTI).

## Features

### 🌙 **Dark Mode Support**
- Toggle between light and dark themes
- Theme preference saved in localStorage
- Smooth transitions between themes
- System preference detection
- Beautiful dark mode styling throughout

### 🏠 **Home Page**
- Hero section with compelling call-to-action
- Why Choose SDTI highlights
- Featured courses preview
- Student testimonials
- Quick links section

### 📖 **About Us**
- Institute history and mission
- Vision and values
- Accreditation and recognition
- Leadership messages
- Campus facilities overview

### 🎓 **Programs**
- Comprehensive course listings
- Program categories (Diplomas, Certificates, Short Courses)
- Detailed course information including:
  - Course overview and objectives
  - Duration and entry requirements
  - Career opportunities
  - Program comparison table

### 📝 **Admissions**
- Step-by-step admission process
- Entry requirements by program
- Important dates and deadlines
- Online application form
- Prospectus download option

### ⭐ **Why Choose SDTI**
- Key strengths and advantages
- Qualified lecturers showcase
- Practical training focus
- Student success stories
- Industry partnerships
- Campus facilities gallery

### 🏫 **Campus Life**
- Student activities and clubs
- Sports and recreation
- Cultural events
- Academic competitions
- Campus gallery with filtering
- Student testimonials

### 📰 **News & Events**
- Latest news and announcements
- Upcoming events calendar
- Featured news section
- News categories filtering
- Newsletter subscription

### 📞 **Contact Us**
- Contact information and office hours
- Contact form with inquiry types
- Department-specific contacts
- Interactive map placeholder
- Social media links
- FAQ section

## Technology Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Font Awesome
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sdtiedu-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component
│   └── Footer.js          # Footer component
├── pages/
│   ├── Home.js            # Home page
│   ├── About.js           # About Us page
│   ├── Programs.js        # Programs page
│   ├── Admissions.js       # Admissions page
│   ├── WhyChoose.js       # Why Choose SDTI page
│   ├── CampusLife.js      # Campus Life page
│   ├── News.js            # News & Events page
│   └── Contact.js         # Contact page
├── App.js                 # Main app component with routing
├── index.js               # Entry point
└── index.css              # Global styles with Tailwind
```

## Key Features

### 🎨 **Modern Design**
- Clean, professional layout
- Responsive design for all devices
- Smooth animations and transitions
- Gradient backgrounds and modern UI elements
- Dark mode with beautiful contrast

### 📱 **Mobile-First**
- Fully responsive design
- Touch-friendly navigation
- Optimized for mobile devices

### ⚡ **Performance**
- Fast loading times
- Optimized images and assets
- Efficient React components

### 🔍 **SEO Ready**
- Semantic HTML structure
- Meta tags and descriptions
- Proper heading hierarchy

## Customization

### Colors
The website uses a blue color scheme that can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    600: '#2563eb',
    // ... other shades
  }
}
```

### Dark Mode
The website includes a comprehensive dark mode implementation:

- **Theme Context**: React context for theme management
- **Theme Toggle**: Beautiful animated toggle button in the navbar
- **Persistent Storage**: Theme preference saved in localStorage
- **System Detection**: Automatically detects user's system preference
- **Smooth Transitions**: All theme changes are smoothly animated
- **Complete Coverage**: All components support dark mode

### Content
All content is easily customizable by editing the respective page components in the `src/pages/` directory.

### Styling
Additional styles can be added to `src/index.css` or by extending Tailwind classes.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact:
- Email: info@sdtiedu.ae
- Phone: +971 XX XXX XXXX

---

**SDTI - Empowering Futures Through Quality Education** 🎓
