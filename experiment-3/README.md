# Experiment 3: Single Page Application (SPA) with React Router

A React-based Single Page Application demonstrating client-side routing using React Router DOM. This project showcases how to implement navigation between multiple pages without full page reloads, creating a seamless user experience.

## 📚 Learning Outcomes

### 1. **Understanding Single Page Applications (SPA)**
   - Learned the concept of SPAs and how they differ from traditional multi-page applications
   - Understood the benefits of client-side routing (faster navigation, better UX, reduced server load)
   - Implemented a complete SPA structure with multiple routes

### 2. **React Router DOM Implementation**
   - Mastered the use of `BrowserRouter` for enabling routing in React applications
   - Implemented `Routes` and `Route` components for defining application routes
   - Utilized `Link` component for navigation without page reloads
   - Configured route paths and their corresponding components

### 3. **Component-Based Architecture**
   - Organized application into reusable, modular components
   - Separated routing logic from page components
   - Maintained clean component structure (Home, About, Contact pages)
   - Practiced component composition and organization

### 4. **CSS Animations and Styling**
   - Created custom CSS animations using `@keyframes`
   - Implemented different animation patterns for visual elements
   - Applied gradient backgrounds and modern UI design principles
   - Used CSS transitions and transforms for interactive elements
   - Learned to create natural, organic animations (ducks, mice, cats)

### 5. **Modern React Development**
   - Worked with React 19.2.0 and modern React patterns
   - Used functional components and default exports
   - Integrated third-party libraries (react-router-dom)
   - Followed React best practices for component structure

### 6. **Development Workflow**
   - Set up and configured Vite as a build tool
   - Managed project dependencies with npm
   - Implemented hot module replacement (HMR) for development
   - Used ESLint for code quality

## ✨ Features

- **Multi-page Navigation**: Seamless navigation between Home, About, and Contact pages
- **Animated Elements**: 
  - 🦆 Animated ducks on the Home page
  - 🐭 Animated mice on the About page
  - 🐱 Animated cats on the Contact page
- **Modern UI Design**: 
  - Gradient backgrounds
  - Styled navigation bar with hover effects
  - Responsive layout
  - Custom animations and transitions
- **Client-Side Routing**: No page reloads when navigating between routes
- **Component Reusability**: Modular component structure for easy maintenance

## 🛠️ Technology Stack

- **React** (v19.2.0) - UI library
- **React Router DOM** (v7.13.0) - Client-side routing
- **Vite** (v7.2.4) - Build tool and development server
- **CSS3** - Styling and animations
- **ESLint** - Code linting

## 📦 Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd FSD-2/experiment-3
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 🚀 Usage

### Development Mode

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build for Production

Create a production build:
```bash
npm run build
```

### Preview Production Build

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
experiment-3/
├── src/
│   ├── components/
│   │   ├── Spa.jsx          # Main routing component
│   │   ├── Homes.jsx        # Home page component
│   │   ├── Abouts.jsx       # About page component
│   │   └── Contacts.jsx     # Contact page component
│   ├── App.jsx              # Root component
│   ├── App.css              # Application styles and animations
│   ├── index.css            # Global styles
│   └── main.jsx             # Application entry point
├── public/                  # Static assets
├── package.json             # Project dependencies
└── README.md                # Project documentation
```

## 🎯 Key Concepts Demonstrated

### Routing Setup
```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter>
```

### Navigation Links
```jsx
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
```

### CSS Animations
- Custom `@keyframes` animations
- Multiple animation delays for staggered effects
- Different timing functions for varied movement patterns
- Transform properties (translate, rotate, scale)

## 🎨 Design Highlights

- **Color Scheme**: Purple/blue gradient theme
- **Navigation**: Styled navigation bar with hover effects
- **Animations**: Natural, organic movement patterns for animated elements
- **Layout**: Centered, responsive design with proper spacing
- **Typography**: Modern font stack with appropriate sizing

## 📝 Notes

- This experiment focuses on understanding SPA architecture and React Router implementation
- The animated elements (ducks, mice, cats) demonstrate CSS animation capabilities
- All routing is handled client-side, providing a smooth user experience
- The project uses modern React patterns and best practices

## 🔗 Related Experiments

- **Experiment 1.1**: Basic React component structure
- **Experiment 2**: Component composition and props
- **Experiment 4**: State management (Context API and Redux)

## 📄 License

This project is part of a learning series and is for educational purposes.

---

**Created as part of FSD-2 learning series** 🚀
