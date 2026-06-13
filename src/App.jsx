import React, { useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiExternalLink, FiCode, FiDatabase, FiLayout, FiCpu, FiChevronRight } from 'react-icons/fi';
import './App.css';
import SpaceBackground from './components/SpaceBackground';

function App() {
  // Simple scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <SpaceBackground />
      <div className="bg-glow"></div>
      <div className="bg-glow right"></div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-container">
          <div className="nav-logo">SC.</div>
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="container">
          <div className="hero-content reveal">
            <span className="hero-greeting fade-in-up delay-100">Hi, I'm</span>
            <h1 className="hero-title fade-in-up delay-200">Shelly <span className="gradient-text">Chahar</span></h1>
            <h2 className="hero-subtitle fade-in-up delay-300">
              Computer Science Student | Full Stack MERN Developer | AI/ML Foundations
            </h2>
            <p className="hero-tagline fade-in-up delay-400">
              Building scalable web applications, REST APIs, database-driven systems, and AI-powered solutions. Turning ideas into robust, real-world products.
            </p>
            <div className="hero-buttons fade-in-up delay-500">
              <a href="#projects" className="btn btn-primary">
                View Projects <FiChevronRight size={20} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="container">
          <h2 className="section-title reveal">About Me</h2>
          <div className="about-grid">
            <div className="about-text reveal delay-200">
              <p>
                I am a first-year B.Tech CSE (AI/ML) student at Polaris School of Technology with experience in Full Stack MERN Development, Database Design, Data Structures & Algorithms, and Foundations of Machine Learning.
              </p>
              <p>
                I have a strong ability to build scalable web applications, REST APIs, database-driven systems, and AI-powered solutions. I love turning ideas into real-world products.
              </p>
              <ul>
                <li><FiCpu className="about-icon" /> Part of Entrepreneurship Club, focusing on product thinking</li>
                <li><FiCode className="about-icon" /> Actively participates in hackathons and tech events</li>
                <li><FiLayout className="about-icon" /> Passionate about clean, responsive UI/UX</li>
              </ul>
            </div>
            <div className="about-image reveal delay-400">
              <div className="about-image-inner">
                <FiCpu size={120} color="var(--text-secondary)" strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="container">
          <h2 className="section-title reveal">Skills</h2>
          <div className="skills-grid">
            <div className="skill-category reveal delay-100">
              <h3>Frontend</h3>
              <div className="skill-list">
                <span className="skill-tag">JavaScript (ES6+)</span>
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">HTML5 & CSS3</span>
                <span className="skill-tag">Tailwind CSS</span>
              </div>
            </div>

            <div className="skill-category reveal delay-200">
              <h3>Backend</h3>
              <div className="skill-list">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
              </div>
            </div>

            <div className="skill-category reveal delay-300">
              <h3>Databases</h3>
              <div className="skill-list">
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">SQL & NoSQL</span>
              </div>
            </div>

            <div className="skill-category reveal delay-400">
              <h3>DSA</h3>
              <div className="skill-list">
                <span className="skill-tag">Data Structures & Algorithms</span>
              </div>
            </div>

            <div className="skill-category reveal delay-500">
              <h3>ML & Data Science</h3>
              <div className="skill-list">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">NumPy & Pandas</span>
                <span className="skill-tag">Matplotlib & Seaborn</span>
              </div>
            </div>

            <div className="skill-category reveal delay-600">
              <h3>Tools</h3>
              <div className="skill-list">
                <span className="skill-tag">Git & GitHub</span>
                <span className="skill-tag">Postman</span>
                <span className="skill-tag">VS Code</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <h2 className="section-title reveal">Featured Projects</h2>
          <div className="projects-grid">
            
            {/* Project 1 */}
            <div className="project-card reveal delay-100">
              <div className="project-header">
                <div>
                  <div className="project-type">Full Stack Project (Startup Idea)</div>
                  <h3 className="project-title">Mentora – AI Career Coach</h3>
                </div>
                <div className="project-links">
                  <a href="https://github.com/shellyco-code/" target="_blank" rel="noreferrer" className="project-link"><FiGithub size={20} /></a>
                  <a href="https://mentora-liard-omega.vercel.app" target="_blank" rel="noreferrer" className="project-link"><FiExternalLink size={20} /></a>
                </div>
              </div>
              <p className="project-desc">
                AI-powered platform that provides personalized career guidance, skill gap analysis, and structured roadmaps for students. Focused on solving confusion in career decision-making.
              </p>
              <p className="project-highlight">
                ✨ Most advanced project, shows full-stack + AI integration
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>OpenAI API</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card reveal delay-200">
              <div className="project-header">
                <div>
                  <div className="project-type">Frontend Project</div>
                  <h3 className="project-title">MoneyMate</h3>
                </div>
                <div className="project-links">
                  <a href="https://github.com/shellyco-code/" target="_blank" rel="noreferrer" className="project-link"><FiGithub size={20} /></a>
                </div>
              </div>
              <p className="project-desc">
                Personal finance tracker web app to track daily expenses and analyze spending habits with a clean and intuitive UI. Focused on usability and real-life application.
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card reveal delay-300">
              <div className="project-header">
                <div>
                  <div className="project-type">Frontend Project</div>
                  <h3 className="project-title">Mental Health Support</h3>
                </div>
                <div className="project-links">
                  <a href="https://github.com/shellyco-code/" target="_blank" rel="noreferrer" className="project-link"><FiGithub size={20} /></a>
                </div>
              </div>
              <p className="project-desc">
                Simple platform designed for mental well-being, including mood tracking and supportive resources with a focus on accessibility and calming user experience.
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>Tailwind CSS</span>
                <span>JavaScript</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <div className="container">
          <h2 className="section-title reveal">Experience & Activities</h2>
          <div className="timeline">
            <div className="timeline-item reveal delay-100">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Entrepreneurship Club - Core Member</h3>
                <p className="timeline-desc">Working on startup ideas and product thinking, bridging the gap between technical development and business value.</p>
              </div>
            </div>
            
            <div className="timeline-item reveal delay-200">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Hackathons & Events</h3>
                <p className="timeline-desc">Participated in Vibeathon and multiple other hackathons. Consistently building and presenting projects under pressure.</p>
              </div>
            </div>

            <div className="timeline-item reveal delay-300">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Tech Communities</h3>
                <p className="timeline-desc">Attended OpenAI events, GDG sessions, and Replit Bootcamp to stay updated with modern tech stacks and AI tools.</p>
              </div>
            </div>

            <div className="timeline-item reveal delay-400">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">First Year Achievements</h3>
                <p className="timeline-desc">Built multiple projects in the first year alone while continuously learning full stack development and DSA.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <h2 className="section-title reveal">Get In Touch</h2>
          <div className="contact-container reveal delay-200">
            <div className="contact-info">
              <p>
                I'm currently looking for new opportunities, collaborations, or even just a chat about tech, AI, and startups. Let's connect!
              </p>
              <div className="social-links">
                <a href="https://github.com/shellyco-code/" target="_blank" rel="noreferrer" className="social-link">
                  <FiGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/shellychahar/" target="_blank" rel="noreferrer" className="social-link">
                  <FiLinkedin size={24} />
                </a>
                <a href="mailto:hello@example.com" className="social-link">
                  <FiMail size={24} />
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea className="form-control" placeholder="Hi Shelly, I'd like to talk about..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>Built by Shelly</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
