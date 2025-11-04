import { useState, useEffect } from 'react'
import { 
  Sun, 
  Moon, 
  Mail, 
  Github, 
  Linkedin, 
  Code2, 
  Trophy,
  GraduationCap,
  ExternalLink,
  Calendar,
  MapPin,
  Menu,
  X
} from 'lucide-react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div className="app">
      {/* Header / Navigation */}
      <header className="header">
        <div className="container">
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            <a href="#about" onClick={closeMenu}>Sobre mí</a>
            <a href="#experience" onClick={closeMenu}>Experiencia</a>
            <a href="#projects" onClick={closeMenu}>Proyectos</a>
            <a href="#skills" onClick={closeMenu}>Habilidades</a>
            <a href="#contact" onClick={closeMenu}>Contacto</a>
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
              {darkMode ? <Sun size={20} color="#fff" /> : <Moon size={20} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2 className="hero-title">Hola, soy <span className="highlight">Benjamín Urrutia</span></h2>
            <p className="hero-description">
              Programador y estudiante de Ingeniería Civil Informática en Chile &#x1F1E8;&#x1F1F1;
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">Sobre mí</h2>
          <div className="about-content">
            <div className="about-profile">
              <div className="about-image-container">
                <img 
                  src="portfolio-photo.jpeg" 
                  alt="Foto de perfil" 
                  className="about-image"
                />
              </div>
              <div className="about-text">
                <p>
                  Me apasiona crear soluciones innovadoras y eficientes a través de la tecnología.
                  Disfruto enfrentando desafíos que me permitan aplicar mis conocimientos y desarrollar
                  nuevas habilidades.
                </p>
                <p>
                  Actualmente estoy estudiando un <strong>Magíster en Ciencia de Datos</strong>, donde continúo
                  expandiendo mis conocimientos en análisis de datos, machine learning y tecnologías emergentes.
                  Siempre busco aprender y fortalecer mis habilidades para crecer como profesional.
                </p>
              </div>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <GraduationCap size={24} className="stat-icon" />
                <div>
                  <h4>Estudiando</h4>
                  <p>Magíster en Ciencia de Datos</p>
                </div>
              </div>
              <div className="stat-item">
                <Trophy size={24} className="stat-icon" />
                <div>
                  <h4>Premio</h4>
                  <p>Rendimiento académico (6.5/A+)</p>
                </div>
              </div>
              <div className="stat-item">
                <Code2 size={24} className="stat-icon" />
                <div>
                  <h4>Aprendiendo</h4>
                  <p>Continuo aprendizaje y mejora</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">Experiencia</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Desarrollador de Aplicaciones Web</h3>
                  <div className="timeline-meta">
                    <span className="timeline-date">
                      <Calendar size={16} />
                      2025 - Presente
                    </span>
                    <span className="timeline-location">
                      <MapPin size={16} />
                      Codenapsis
                    </span>
                  </div>
                </div>
                <p className="timeline-description">
                  Hemos desarrollado múltiples aplicaciones web para clientes de diversos sectores.
                  <ul>
                    <li>ItSave: Asistente financiero IA.</li>
                    <li>AGS: En conjunto desarrollamos una aplicación de monitoreo de drones en tiempo real.</li>
                    <li>Emservi: Creación de la página web de la empresa.</li>
                  </ul>
                </p>
                <div className="timeline-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>FastAPI</span>
                  <span>Azure</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Desarrollador Frontend</h3>
                  <div className="timeline-meta">
                    <span className="timeline-date">
                      <Calendar size={16} />
                      2023 - 2023
                    </span>
                    <span className="timeline-location">
                      <MapPin size={16} />
                      Firmare
                    </span>
                  </div>
                </div>
                <p className="timeline-description">
                  Creación de una chatbot RAG (Retrieval-Augmented Generation) para una empresa de consultas legales.
                </p>
                <div className="timeline-tags">
                  <span>Python</span>
                  <span>PostgreSQL</span>
                  <span>Langchain</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Proyectos</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h3>Aerium Control</h3>
                <span className="project-tag">React</span>
              </div>
              <p className="project-description">
                Aplicación web para el monitoreo en tiempo real de drones.
              </p>
              <div className="project-links">
                <a href="https://aeriumfrontend.azurewebsites.net/map" className="project-link">
                  <ExternalLink size={16} />
                  Demo
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Arkanoid en C</h3>
                <span className="project-tag">C</span>
              </div>
              <p className="project-description">
                Juego clásico programado en C utilizando la biblioteca gráfica SDL2.
              </p>
              <div className="project-links">
                <a href="https://www.youtube.com/watch?v=_lX6lyOMiK8" className="project-link">
                  <ExternalLink size={16} />
                  Demo
                </a>
                <a href="https://github.com/Sk1920001/Arkanoid-type-of-game" className="project-link">
                  <Github size={16} />
                  Código
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Habilidades</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul>
                <li>React</li>
                <li>JavaScript/TypeScript</li>
                <li>HTML/CSS</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>FastAPI</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Herramientas</h3>
              <ul>
                <li>Git</li>
                <li>Azure</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Contacto</h2>
          <div className="contact-content">
            <p>¿Tienes un proyecto en mente? ¡Hablemos!</p>
            <div className="contact-links">
              <a href="mailto:benjaminurrutia19@gmail.com" className="contact-link">
                <Mail size={20} />
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Benjamín Andrés Urrutia Ahumada. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
