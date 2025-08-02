import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

type Theme = '1' | '2' | '3'

interface NavigationProps {
  currentTheme: string
  handleThemeChange: (theme: Theme) => void;
}

function Navigation({ currentTheme, handleThemeChange }: NavigationProps) {
  const [isSelectFocused, setIsSelectFocused] = useState(false)

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = e.target.value as Theme
    handleThemeChange(newTheme)
  }

  return (
    <nav className={`navigation navigation_${currentTheme}`}>
      <div className={`nav-container nav-container_${currentTheme}`}>
        <div className={`nav-brand nav-brand_${currentTheme}`}>
          <NavLink to="/" className={`brand-link brand-link_${currentTheme}`}>
            Theme Switcher
          </NavLink>
        </div>
        
        <ul className={`nav-menu nav-menu_${currentTheme}`}>
          <li className={`nav-item nav-item_${currentTheme}`}>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `nav-link nav-link_${currentTheme} ${isActive ? `nav-link-active nav-link-active_${currentTheme}` : ''}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className={`nav-item nav-item_${currentTheme}`}>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `nav-link nav-link_${currentTheme} ${isActive ? `nav-link-active nav-link-active_${currentTheme}` : ''}`
              }
            >
              About
            </NavLink>
          </li>
          <li className={`nav-item nav-item_${currentTheme}`}>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `nav-link nav-link_${currentTheme} ${isActive ? `nav-link-active nav-link-active_${currentTheme}` : ''}`
              }
            >
              Contact
            </NavLink>
          </li>
          <li className={`nav-item nav-item_${currentTheme}`}>
          <div className={`header-content header-content_${currentTheme}`}>
            <div className={`theme-selector theme-selector_${currentTheme} ${isSelectFocused ? 'select-focused' : ''}`}>
              <select
                id="theme-select"
                value={currentTheme}
                onChange={handleSelectChange}
                onFocus={() => setIsSelectFocused(true)}
                onBlur={() => setIsSelectFocused(false)}
                className={`select select_${currentTheme}`}
              >
                <option value="1">Theme 1 - Clean & Minimal</option>
                <option value="2">Theme 2 - Dark Sidebar</option>
                <option value="3">Theme 3 - Playful & Colorful</option>
              </select>
            </div>
          </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation 