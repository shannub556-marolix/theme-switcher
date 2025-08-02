import React from 'react'

interface AboutProps {
  currentTheme: string
}

function About({ currentTheme }: AboutProps) {
  return (
    <div className={`page page_${currentTheme}`}>
      <section className={`about-hero about-hero_${currentTheme}`}>
        <h1 className={`page-title page-title_${currentTheme}`}>
          About Us
        </h1>
        <p className={`page-subtitle page-subtitle_${currentTheme}`}>
          Learn more about our mission and the team behind Theme Switcher.
        </p>
      </section>

      <section className={`about-content about-content_${currentTheme}`}>
        <div className={`about-grid about-grid_${currentTheme}`}>
          <div className={`about-card about-card_${currentTheme}`}>
            <h2 className={`card-title card-title_${currentTheme}`}>
              Our Mission
            </h2>
            <p className={`card-content card-content_${currentTheme}`}>
              We believe that great user experiences start with beautiful, accessible, and 
              customizable interfaces. Our Theme Switcher demonstrates how modern web 
              applications can adapt to different user preferences while maintaining 
              functionality and performance.
            </p>
          </div>

          <div className={`about-card about-card_${currentTheme}`}>
            <h2 className={`card-title card-title_${currentTheme}`}>
              Technology Stack
            </h2>
            <p className={`card-content card-content_${currentTheme}`}>
              Built with React 19, TypeScript, and modern CSS. We use Vite for fast 
              development and build times, ensuring a smooth development experience 
              and optimal production performance.
            </p>
          </div>

          <div className={`about-card about-card_${currentTheme}`}>
            <h2 className={`card-title card-title_${currentTheme}`}>
              Design Philosophy
            </h2>
            <p className={`card-content card-content_${currentTheme}`}>
              Clean, intuitive, and accessible design is at the core of everything we do. 
              Each theme is carefully crafted to provide a unique experience while 
              maintaining consistency and usability across all interactions.
            </p>
          </div>
        </div>
      </section>

      <section className={`team team_${currentTheme}`}>
        <h2 className={`section-title section-title_${currentTheme}`}>
          Meet the Team
        </h2>
        <div className={`team-grid team-grid_${currentTheme}`}>
          <div className={`team-member team-member_${currentTheme}`}>
            <h3 className={`member-name member-name_${currentTheme}`}>
              React Developer
            </h3>
            <p className={`member-role member-role_${currentTheme}`}>
              Frontend Architecture
            </p>
          </div>
          <div className={`team-member team-member_${currentTheme}`}>
            <h3 className={`member-name member-name_${currentTheme}`}>
              UI/UX Designer
            </h3>
            <p className={`member-role member-role_${currentTheme}`}>
              Theme Design & Animation
            </p>
          </div>
          <div className={`team-member team-member_${currentTheme}`}>
            <h3 className={`member-name member-name_${currentTheme}`}>
              TypeScript Expert
            </h3>
            <p className={`member-role member-role_${currentTheme}`}>
              Type Safety & Performance
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 