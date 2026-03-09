import { useState } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <h1>Theme Switcher App</h1>
        
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? 'Dark mode' : 'Light mode'}
        </button>

        <div className="card">
          <h2>Welcome!</h2>
          <p>This is a  theme switching application.</p>
          <p>Click  to toggle between light and dark themes.</p>
        </div>

        <div className="info-box">
          <h3>Current Theme: {theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h3>
        </div>
      </div>
    </div>
  )
}

export default App
