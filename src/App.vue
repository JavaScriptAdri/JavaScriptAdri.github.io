<template>
  <div class="app">
    <div class="professional-portfolio">
      <!-- HEADER -->
      <header class="header">
        <div class="container">
          <div class="header-content">
            <div class="logo">
              <span class="name">{{ personalInfo.name }}<span class="dot">.</span></span>
            </div>
            <nav class="nav">
              <a href="#formation" class="nav-link">Formación</a>
              <a href="#skills" class="nav-link">Skills</a>
              <a href="#projects" class="nav-link">Proyectos</a>
              <a href="#contact" class="nav-link">Contacto</a>
            </nav>
          </div>
        </div>
      </header>

      <!-- HERO -->
      <section class="hero">
        <div class="container">
          <div class="hero-grid">
            <div class="hero-info">
              <div class="badge">Estudiante de Ciberseguridad</div>
              <h1 class="hero-title">
                {{ personalInfo.name }}<br>
                <span class="accent">{{ personalInfo.role }}</span>
              </h1>
              <p class="hero-description">
                {{ personalInfo.bio }}
              </p>
              <div class="hero-actions">
                <a :href="personalInfo.linkedin" target="_blank" class="btn-primary">LinkedIn</a>
                <a :href="personalInfo.github" target="_blank" class="btn-secondary">GitHub</a>
              </div>
            </div>
            <div class="hero-stats">
              <div class="stat-card">
                <div class="stat-number">{{ stats.certifications }}+</div>
                <div class="stat-label">Módulos cursados</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">{{ stats.projects }}+</div>
                <div class="stat-label">Laboratorios realizados</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">{{ stats.tools }}+</div>
                <div class="stat-label">Herramientas dominadas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FORMACIÓN ACADÉMICA -->
      <section id="formation" class="formation">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Formación Académica</h2>
            <div class="section-line"></div>
          </div>
          <div class="timeline">
            <div v-for="(edu, index) in education" :key="index" class="timeline-item">
              <div class="timeline-year">{{ edu.year }}</div>
              <div class="timeline-content">
                <h3 class="timeline-title">{{ edu.title }}</h3>
                <div class="timeline-subtitle">{{ edu.institution }}</div>
                <p class="timeline-description">{{ edu.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ESPECIALIZACIONES CURSADAS -->
      <section class="specializations">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Especializaciones Cursadas</h2>
            <div class="section-line"></div>
          </div>
          <div class="spec-grid">
            <div v-for="spec in specializations" :key="spec.name" class="spec-card">
              <div class="spec-icon">{{ spec.icon }}</div>
              <h3 class="spec-title">{{ spec.name }}</h3>
              <p class="spec-description">{{ spec.description }}</p>
              <div class="spec-topics">
                <span v-for="topic in spec.topics.slice(0, 4)" :key="topic" class="topic-tag">{{ topic }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SKILLS TÉCNICAS -->
      <section id="skills" class="skills">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Competencias Técnicas</h2>
            <div class="section-line"></div>
          </div>
          <div class="skills-grid">
            <div v-for="category in skillCategories" :key="category.name" class="skill-category">
              <h3 class="category-title">{{ category.name }}</h3>
              <ul class="skill-list">
                <li v-for="skill in category.skills" :key="skill" class="skill-item">
                  {{ skill }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- PROYECTOS / LABORATORIOS -->
      <section id="projects" class="projects">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Laboratorios Realizados</h2>
            <div class="section-line"></div>
          </div>
          <div class="projects-grid">
            <div v-for="(project, index) in projects" :key="index" class="project-card">
              <div class="project-content">
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-description">{{ project.description }}</p>
                <div class="project-tags">
                  <span v-for="tag in project.tags" :key="tag" class="project-tag">{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- HERRAMIENTAS DOMINADAS -->
      <section class="tools">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Herramientas & Tecnologías</h2>
            <div class="section-line"></div>
          </div>
          <div class="tools-grid">
            <div v-for="tool in tools" :key="tool" class="tool-item">
              {{ tool }}
            </div>
          </div>
        </div>
      </section>

      <!-- CONTACTO -->
      <section id="contact" class="contact">
        <div class="container">
          <div class="contact-content">
            <div class="contact-info">
              <h2 class="contact-title">¿Interesado en colaborar?</h2>
              <p class="contact-description">Disponible para prácticas profesionales y proyectos desafiantes en ciberseguridad.</p>
            </div>
            <div class="contact-actions">
              <a :href="`mailto:${personalInfo.email}`" class="btn-primary">{{ personalInfo.email }}</a>
            </div>
          </div>
        </div>
      </section>

      <!-- FOOTER -->
      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-copyright">© {{ new Date().getFullYear() }} {{ personalInfo.name }}. Portfolio académico</div>
            <div class="footer-links">
              <a :href="personalInfo.linkedin" target="_blank" class="footer-link">LinkedIn</a>
              <a :href="personalInfo.github" target="_blank" class="footer-link">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const personalInfo = ref({
  name: 'Adrià',
  role: 'Ciberseguridad & Análisis Forense',
  bio: 'Estudiante especializado en ciberseguridad, análisis forense informático y hardening de sistemas. Apasionado por la protección de infraestructuras y la respuesta ante incidentes.',
  email: 'adriamontes1@gmail.com',
  linkedin: 'https://www.linkedin.com/in/adrià-montes-hostench-02484a293/',
  github: 'https://github.com/JavaScriptAdri'
})

const stats = ref({
  certifications: 7,
  projects: 45,
  tools: 30
})

const education = ref([
  {
    year: '2025-2026',
    title: 'Especialización en ciberseguridad',
    institution: 'Institut Montilivi',
    description: 'Especialización en ciberseguridad, análisis forense, hardening de sistemas, hacking ético y normativa de seguridad.'
  },
    {
    year: '2023-2025',
    title: 'Curso en Desarrollo de Aplicaciones Web (DAW)',
    institution: 'Formación Complementaria',
    description: 'Desarrollo web, programación y fundamentos de aplicaciones.'
  },
  {
    year: '2021 - 2023',
    title: 'Técnico en Sistemas Microinformáticos y Redes (SMX)',
    institution: 'Institut Cendrassos',
    description: 'Formación en hardware, mantenimiento de equipos, redes locales y administración básica de sistemas.'
  }

])

const specializations = ref([
  {
    name: 'Análisis Forense Informático',
    icon: '🔍',
    description: 'Adquisición de evidencias, análisis de memoria RAM, forense en discos, dispositivos móviles y cloud.',
    topics: ['Volatility', 'Autopsy', 'Wireshark', 'ExifTool', 'DD', 'CyberChef']
  },
  {
    name: 'Hardening de Sistemas',
    icon: '🛡️',
    description: 'Enfortiment de xarxes i sistemes, configuración segura de servidores Linux/Windows, PAM, SSH, Fail2ban.',
    topics: ['Fail2ban', 'SSH Hardening', 'PAM', 'Port Knocking', 'ASLR', 'LUKS']
  },
  {
    name: 'Hacking Ético',
    icon: '⚡',
    description: 'Pruebas de penetración, enumeración, explotación de vulnerabilidades y pivoting.',
    topics: ['Nmap', 'Metasploit', 'Burp Suite', 'SQLmap', 'XSS', 'OWASP']
  },
  {
    name: 'Security Operations Center',
    icon: '📊',
    description: 'Monitorización con Netdata, Elastic Stack, Wazuh, SIEM y alertas de seguridad.',
    topics: ['Netdata', 'ELK Stack', 'Wazuh', 'Suricata', 'Snort', 'MISP']
  },
  {
    name: 'Posada en Producció Segura',
    icon: '🚀',
    description: 'DevOps, automatización con Vagrant/Ansible, Docker, Kubernetes, y pruebas de seguridad.',
    topics: ['Docker', 'Kubernetes', 'Ansible', 'Vagrant', 'GitHub Actions', 'Selenium']
  },
  {
    name: 'Normativa de Ciberseguridad',
    icon: '📜',
    description: 'RGPD, ISO 27001, ENS, NIS2, CRA, compliance y gestión de riesgos.',
    topics: ['ISO 27001', 'RGPD', 'ENS', 'NIS2', 'Compliance', 'KPIs']
  }
])

const skillCategories = ref([
  {
    name: 'Sistemas',
    skills: ['Linux (Debian/Ubuntu/Kali)', 'Windows Server', 'Virtualización (VirtualBox)', 'Hardware']
  },
  {
    name: 'Redes',
    skills: ['TCP/IP', 'Firewalls (pfSense)', 'Routing/Switching', 'Wireshark', 'VPN', 'IPSec']
  },
  {
    name: 'Seguridad Ofensiva',
    skills: ['Pentesting', 'Metasploit', 'Nmap', 'Burp Suite', 'SQLmap', 'John the Ripper']
  },
  {
    name: 'Seguridad Defensiva',
    skills: ['Hardening', 'Fail2ban', 'Wazuh', 'Suricata', 'Snort', 'ELK Stack']
  },
  {
    name: 'Forense',
    skills: ['Volatility', 'Autopsy', 'ExifTool', 'DD', 'CyberChef', 'Análisis de memoria']
  },
  {
    name: 'DevOps & Cloud',
    skills: ['Docker', 'Kubernetes', 'Ansible', 'Vagrant', 'Git', 'GitHub Actions']
  }
])

const projects = ref([
  {
    title: 'Análisis Forense con Volatility',
    description: 'Análisis de volcados de memoria RAM para detectar procesos maliciosos, conexiones y malware.',
    tags: ['Volatility', 'RAM Forensics', 'Memory Analysis']
  },
  {
    title: 'SIEM con Elastic Stack',
    description: 'Implementación de un SIEM para monitorización de logs, alertas de seguridad y análisis de phishing.',
    tags: ['Elasticsearch', 'Logstash', 'Kibana', 'SIEM']
  },
  {
    title: 'Monitorización con Wazuh',
    description: 'Despliegue de Wazuh para monitorización de integridad, vulnerabilidades y SCA.',
    tags: ['Wazuh', 'Integrity Monitoring', 'Vulnerabilities']
  },
  {
    title: 'Hardening de Servidores Linux',
    description: 'Configuración segura de SSH, Fail2ban, PAM, LUKS y políticas de contraseñas.',
    tags: ['Linux', 'Hardening', 'SSH', 'Fail2ban']
  },
  {
    title: 'Laboratorio de Pentesting',
    description: 'Entorno controlado con máquinas vulnerables para pruebas de penetración y explotación.',
    tags: ['Metasploit', 'Nmap', 'Kali Linux']
  },
  {
    title: 'Análisis de Tráfico con Wireshark',
    description: 'Captura y análisis de tráfico de red para detección de ataques y comportamientos anómalos.',
    tags: ['Wireshark', 'Network Analysis', 'PCAP']
  },
  {
    title: 'pfSense Firewall & VPN',
    description: 'Configuración de firewall pfSense con reglas avanzadas, DMZ, VPN IPSec y bloqueo de IPs maliciosas.',
    tags: ['pfSense', 'Firewall', 'VPN', 'IPSec']
  },
  {
    title: 'Threat Intelligence con MISP',
    description: 'Implementación de plataforma MISP para gestión de inteligencia de amenazas y TheHive SOAR.',
    tags: ['MISP', 'TheHive', 'Threat Intelligence', 'SOAR']
  }
])

const tools = ref([
  'Kali Linux', 'Wireshark', 'Metasploit', 'Nmap', 'Burp Suite', 'SQLmap',
  'Volatility', 'Autopsy', 'ExifTool', 'DD', 'CyberChef', 'Wazuh',
  'Elastic Stack', 'Netdata', 'Suricata', 'Snort', 'pfSense', 'Docker',
  'Kubernetes', 'Ansible', 'Vagrant', 'Git', 'John the Ripper', 'Hashcat',
  'MISP', 'TheHive', 'OWASP ZAP', 'Maltego'
])
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  background: #ffffff;
}

.app {
  background: #ffffff;
  min-height: 100vh;
}

.professional-portfolio {
  background: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  color: #1a1a1a;
  line-height: 1.5;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* HEADER */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  border-bottom: 1px solid #eaeaea;
  z-index: 1000;
  padding: 1rem 0;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo .name {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
}

.logo .dot {
  color: #0066cc;
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #4a4a4a;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #0066cc;
}

/* HERO */
.hero {
  padding: 8rem 0 4rem;
  background: #ffffff;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 4rem;
  align-items: center;
}

.hero-info {
  max-width: 600px;
}

.badge {
  display: inline-block;
  background: #f0f0f0;
  color: #0066cc;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: #1a1a1a;
}

.hero-title .accent {
  color: #0066cc;
}

.hero-description {
  font-size: 1.125rem;
  color: #4a4a4a;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1rem;
}

.btn-primary, .btn-secondary {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;
  font-size: 0.9rem;
}

.btn-primary {
  background: #1a1a1a;
  color: white;
}

.btn-primary:hover {
  background: #333;
}

.btn-secondary {
  background: transparent;
  color: #1a1a1a;
  border: 1px solid #d0d0d0;
}

.btn-secondary:hover {
  border-color: #1a1a1a;
  background: #f5f5f5;
}

.hero-stats {
  display: flex;
  gap: 2rem;
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid #eaeaea;
}

.stat-card {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #0066cc;
}

.stat-label {
  font-size: 0.75rem;
  color: #6c6c6c;
  margin-top: 0.25rem;
}

/* SECCIONES */
section {
  padding: 4rem 0;
  border-bottom: 1px solid #eaeaea;
  background: #ffffff;
}

.section-header {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.section-line {
  width: 3rem;
  height: 2px;
  background: #0066cc;
}

/* TIMELINE */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.timeline-item {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 2rem;
}

.timeline-year {
  font-weight: 600;
  color: #0066cc;
}

.timeline-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.timeline-subtitle {
  font-size: 0.875rem;
  color: #6c6c6c;
  margin-bottom: 0.5rem;
}

.timeline-description {
  font-size: 0.875rem;
  color: #4a4a4a;
  line-height: 1.5;
}

/* SPECIALIZATIONS */
.spec-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.spec-card {
  background: #f8f9fa;
  border: 1px solid #eaeaea;
  border-radius: 1rem;
  padding: 1.5rem;
  transition: all 0.2s;
}

.spec-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-color: #d0d0d0;
}

.spec-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.spec-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.spec-description {
  font-size: 0.875rem;
  color: #4a4a4a;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.spec-topics {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.topic-tag {
  font-size: 0.7rem;
  background: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  color: #4a4a4a;
  border: 1px solid #e0e0e0;
}

/* SKILLS */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.category-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1a1a1a;
}

.skill-list {
  list-style: none;
  padding: 0;
}

.skill-item {
  font-size: 0.875rem;
  color: #4a4a4a;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

/* PROJECTS */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.project-card {
  background: #f8f9fa;
  border: 1px solid #eaeaea;
  border-radius: 0.75rem;
  overflow: hidden;
  transition: all 0.2s;
}

.project-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-color: #d0d0d0;
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.project-description {
  font-size: 0.875rem;
  color: #4a4a4a;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.project-tag {
  font-size: 0.75rem;
  background: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  color: #4a4a4a;
  border: 1px solid #e0e0e0;
}

/* TOOLS */
.tools-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tool-item {
  background: #f8f9fa;
  border: 1px solid #eaeaea;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  color: #4a4a4a;
  transition: all 0.2s;
}

.tool-item:hover {
  background: #f0f0f0;
  border-color: #0066cc;
}

/* CONTACT */
.contact {
  background: #f8f9fa;
  border-bottom: none;
}

.contact-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.contact-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.contact-description {
  color: #4a4a4a;
}

/* FOOTER */
.footer {
  padding: 2rem 0;
  background: #ffffff;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-copyright {
  font-size: 0.75rem;
  color: #6c6c6c;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-link {
  font-size: 0.75rem;
  color: #6c6c6c;
  text-decoration: none;
}

.footer-link:hover {
  color: #0066cc;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .hero-stats {
    justify-content: center;
  }
  
  .timeline-item {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
  
  .skills-grid, .spec-grid {
    grid-template-columns: 1fr;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-content {
    flex-direction: column;
    text-align: center;
  }
  
  .nav {
    display: none;
  }
}
</style>