import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

type Theme = '1' | '2' | '3'

function App() {
  // Initialize theme from localStorage or default to '1'
  const getInitialTheme = (): Theme => {
    const savedTheme = localStorage.getItem('selectedTheme') as Theme
    return savedTheme && ['1', '2', '3'].includes(savedTheme) ? savedTheme : '1'
  }

  const [currentTheme, setCurrentTheme] = useState<Theme>(getInitialTheme)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('selectedTheme', currentTheme)
  }, [currentTheme])

  const handleThemeChange = (theme: Theme) => {
    if (theme !== currentTheme) {
      setIsTransitioning(true)
      // Brief delay to show the transition effect
      setTimeout(() => {
        setCurrentTheme(theme)
        setIsTransitioning(false)
      }, 150)
    }
  }

  return (
    <Router>
      <div className={`app theme-${currentTheme} ${isTransitioning ? 'theme-transitioning' : ''}`}>
        {/* Navigation */}
        <Navigation currentTheme={currentTheme} handleThemeChange={handleThemeChange} />

        {/* Main Content */}
        <main className={`main main_${currentTheme}`}>
          <Routes>
            <Route path="/" element={<Home currentTheme={currentTheme} />} />
            <Route path="/about" element={<About currentTheme={currentTheme} />} />
            <Route path="/contact" element={<Contact currentTheme={currentTheme} />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className={`footer footer_${currentTheme}`}>
          <p className={`footer-text footer-text_${currentTheme}`}>
          © {new Date().getFullYear()} Multi-Theme Switcher App. All rights reserved.
          </p>
        </footer>
      </div>
    </Router>
  )
}

export default App
