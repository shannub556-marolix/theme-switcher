# StyleSwitch - Dynamic Theme Switcher

A modern, responsive React TypeScript application that showcases three distinct themes with smooth animations, real-time product data integration, and persistent theme preferences. Built with React 19, TypeScript, and Vite for optimal performance and developer experience.

## 🎨 Live Demo

Experience the application with smooth theme transitions, responsive design, and dynamic product content.

## ✨ Key Features

### 🎯 **Three Distinct Visual Themes**

1. **Theme 1 - Clean & Minimal**
   - Modern, minimalist design with clean typography
   - Light color scheme: `#f8f9fa` background, `#495057` text
   - San-serif font stack for optimal readability
   - Subtle shadows and clean card layouts
   - Professional, corporate aesthetic

2. **Theme 2 - Dark Sidebar**
   - Elegant dark theme with sophisticated typography
   - Dark color scheme: `#1a1a1a` background, `#ffffff` text
   - Georgia serif font for classic appeal
   - Bold borders and enhanced shadows
   - Premium, modern dark interface

3. **Theme 3 - Playful & Colorful**
   - Vibrant, energetic design with gradient backgrounds
   - Colorful scheme: Purple gradient background, `#667eea` accents
   - Pacifico cursive font for playful personality
   - Rounded corners and colorful elements
   - Fun, engaging user experience

### 🚀 **Advanced Functionality**

- **🔄 Smooth Theme Transitions**: 0.4s cubic-bezier animations with fade effects
- **💾 Persistent Storage**: Theme preferences saved in localStorage
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop
- **🛍️ Real Product Data**: Integration with FakeStore API for dynamic content
- **⚡ Performance Optimized**: Built with Vite for fast development and builds
- **🎭 Interactive Elements**: Hover effects, focus states, and micro-animations

### 🛍️ **Product Showcase**

- **Dynamic Product Loading**: Real-time data from FakeStore API
- **Responsive Product Cards**: Images and prices perfectly aligned
- **Smart Content Truncation**: Long titles and descriptions handled gracefully
- **Loading & Error States**: Professional user feedback
- **Theme-Aware Styling**: Products adapt to each theme's aesthetic

## 🛠️ Technical Stack

### **Core Technologies**
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript 5.8.3** - Type-safe development
- **Vite 7.0.4** - Lightning-fast build tool
- **React Router v7.7.1** - Client-side routing

### **Styling & Animation**
- **CSS3** - Modern styling with Grid and Flexbox
- **Cubic-bezier Transitions** - Smooth 0.4s theme transitions
- **CSS Animations** - Fade-in effects and hover states
- **Google Fonts** - Pacifico for playful theme

### **Development Tools**
- **ESLint 9.30.1** - Code quality and consistency
- **TypeScript ESLint** - TypeScript-specific linting rules

## 📁 Project Structure

```
theme-task/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── Navigation.tsx          # Theme-aware navigation component
│   ├── pages/
│   │   ├── Home.tsx               # Product showcase with API integration
│   │   ├── About.tsx              # Company information and team
│   │   └── Contact.tsx            # Contact form and social links
│   ├── assets/
│   │   └── react.svg
│   ├── App.tsx                    # Main app with routing and theme logic
│   ├── App.css                    # Comprehensive theme styles (1592 lines)
│   ├── index.css                  # Global styles and resets
│   ├── main.tsx                   # Application entry point
│   └── vite-env.d.ts              # Vite type definitions
├── index.html                     # HTML template
├── package.json                   # Dependencies and scripts
├── tsconfig.json                  # TypeScript configuration
├── vite.config.ts                 # Vite build configuration
└── README.md                      # This file
```

## 🚀 Getting Started

### **Prerequisites**
- Node.js (version 16 or higher)
- npm or yarn package manager

### **Installation**

1. **Clone or navigate to the project directory**
   ```bash
   cd theme-task
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### **Available Scripts**

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint for code quality
```

## 🎯 Usage Guide

### **Theme Switching**
1. **Dropdown Selector**: Use the theme dropdown in the navigation
2. **Smooth Transitions**: Watch the 0.4s smooth theme transition
3. **Persistent Storage**: Your choice is automatically saved
4. **Cross-Page Consistency**: Theme applies across all pages

### **Navigation**
- **Home**: Product showcase with dynamic API data
- **About**: Company information and team details
- **Contact**: Contact form and social media links

### **Responsive Design**
- **Mobile**: Optimized for screens 320px+
- **Tablet**: Enhanced layout for 768px+
- **Desktop**: Full-featured experience for 1200px+

## 🎨 Theme Implementation Details

### **CSS Architecture**
- **Class-based Theming**: `theme-1`, `theme-2`, `theme-3` root classes
- **Component-specific Classes**: `feature-card_1`, `nav-link_2`, etc.
- **Responsive Breakpoints**: Mobile-first approach with progressive enhancement
- **Animation System**: Consistent cubic-bezier timing functions

### **Theme Transition System**
```typescript
// Smooth theme switching with transition effects
const handleThemeChange = (theme: Theme) => {
  if (theme !== currentTheme) {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentTheme(theme)
      setIsTransitioning(false)
    }, 150)
  }
}
```

### **Product Data Integration**
```typescript
// Real-time product loading with error handling
const fetchData = async () => {
  try {
    setLoading(true)
    const response = await fetch("https://fakestoreapi.com/products?limit=6")
    const data = await response.json()
    setProducts(data)
  } catch (error) {
    setError('Failed to load products')
  } finally {
    setLoading(false)
  }
}
```

## 📱 Responsive Design Features

### **Mobile Optimizations**
- **Touch-friendly**: 44px minimum touch targets
- **Readable Typography**: Optimized font sizes for mobile
- **Efficient Layouts**: Single-column grids on small screens
- **Performance**: Optimized images and animations

### **Tablet Enhancements**
- **Adaptive Grids**: Multi-column layouts where appropriate
- **Enhanced Navigation**: Improved menu layouts
- **Better Spacing**: Optimized padding and margins

### **Desktop Experience**
- **Full-featured Layouts**: Maximum content utilization
- **Hover Effects**: Rich interactive elements
- **Advanced Animations**: Smooth transitions and micro-interactions

## 🎭 Animation System

### **Theme Transitions**
- **Duration**: 0.4s cubic-bezier(0.4, 0, 0.2, 1)
- **Properties**: Background, color, border, box-shadow, transform
- **Performance**: Hardware-accelerated transforms

### **Interactive Elements**
- **Hover Effects**: Scale and shadow changes
- **Focus States**: Accessibility-compliant focus indicators
- **Loading States**: Smooth loading animations
- **Micro-animations**: Subtle feedback for user actions

## 🔧 Customization Guide

### **Adding New Themes**
1. **CSS Classes**: Add theme-specific styles in `App.css`
2. **TypeScript Types**: Update `Theme` type in `App.tsx`
3. **Navigation**: Add theme option to dropdown
4. **Testing**: Verify responsive behavior across devices

### **Modifying Existing Themes**
1. **Color Scheme**: Update CSS custom properties
2. **Typography**: Modify font families and sizes
3. **Layout**: Adjust spacing and component styles
4. **Animations**: Customize transition timing and effects

### **Adding New Pages**
1. **Component**: Create new page component in `src/pages/`
2. **Routing**: Add route in `App.tsx`
3. **Navigation**: Add link in `Navigation.tsx`
4. **Styling**: Add theme-specific styles in `App.css`

## 🌐 Browser Support

### **Supported Browsers**
- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

### **Features**
- **CSS Grid**: Modern layout system
- **Flexbox**: Flexible component layouts
- **CSS Animations**: Smooth transitions and effects
- **ES6+**: Modern JavaScript features
- **TypeScript**: Type-safe development

## 🚀 Performance Optimizations

### **Build Optimizations**
- **Vite**: Lightning-fast development and builds
- **Tree Shaking**: Unused code elimination
- **Code Splitting**: Automatic route-based splitting
- **Asset Optimization**: Compressed images and fonts

### **Runtime Performance**
- **React 19**: Latest performance improvements
- **Efficient Re-renders**: Optimized component updates
- **Lazy Loading**: Route-based code splitting
- **Memory Management**: Proper cleanup and optimization

## 🧪 Development Features

### **Type Safety**
- **TypeScript**: Full type coverage
- **Interface Definitions**: Product and component types
- **Error Handling**: Comprehensive error boundaries
- **Development Tools**: Enhanced debugging experience

### **Code Quality**
- **ESLint**: Code quality and consistency
- **TypeScript ESLint**: TypeScript-specific rules
- **Prettier**: Consistent code formatting
- **Git Hooks**: Pre-commit quality checks

## 📄 License

This project is open source .

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For questions, issues, or contributions, please open an issue on the repository.

---

**Built with ❤️ using React 19, TypeScript, and Vite**
