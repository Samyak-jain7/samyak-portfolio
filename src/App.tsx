import { contactLinks, experiences, projects, services, skills, stats } from './data';

function ChipRow({ items }: { items: string[] }) {
  return (
    <div className="chip-row">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function Navigation() {
  return (
    <nav className="nav">
      <a className="brand" href="#top" aria-label="Samyak Jain portfolio home">
        <span className="brand-mark">SJ</span>
        <span>Samyak Jain</span>
      </a>
      <div className="nav-links" aria-label="Primary navigation">
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#role-fit">Role Fit</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="hero section-shell">
      <div className="hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow">Senior SDE · AI Native SDE · Applied AI</p>
          <h1>Senior backend engineer building reliable systems and AI-native products.</h1>
          <p className="hero-text">
            I&apos;m Samyak Jain, a backend engineer with Amazon, Allen Digital, Fivetran, and Observe.AI experience
            across high-throughput APIs, backend platform work, reliability improvements, and AI-native product systems.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">Discuss a senior role</a>
            <a className="button secondary" href={contactLinks.bookCall}>Book intro call</a>
            <a className="button secondary" href="#projects">View work</a>
          </div>
          <div className="hero-links" aria-label="Professional links">
            <a href={contactLinks.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={contactLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={contactLinks.resume}>Request resume</a>
          </div>
        </div>

        <aside className="hero-card reveal delay-1" aria-label="Engineering profile summary">
          <div className="availability-pill"><span /> Open to senior backend roles</div>
          <div className="proof-panel">
            <div className="proof-panel-header">
              <p>Production backend profile</p>
              <span>Senior SDE</span>
            </div>
            <div className="company-stack" aria-label="Company experience">
              <span>Amazon</span>
              <span>Fivetran</span>
              <span>Observe.AI</span>
              <span>Allen Digital</span>
            </div>
            <div className="hero-metrics" aria-label="Production impact metrics">
              {stats.map((stat) => (
                <div className="hero-metric" key={stat.value}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="terminal-body">
            <p><span>$</span> engineer --focus backend --mode production</p>
            <p className="muted">status: open_to_senior_backend_roles</p>
            <p className="muted">stack: java python golang aws redis k8s</p>
            <p className="muted">target: senior_sde + ai_native_sde + applied_ai</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section-shell about reveal delay-1">
      <div className="section-label">About</div>
      <div className="about-card">
        <h2>Senior SDE for product teams building backend-heavy and AI-native systems.</h2>
        <p>
          I work best where backend engineering meets product execution: cache-heavy APIs, multi-tenant services,
          reliability automation, internal platforms, and AI-enabled workflows. My strongest signal is production
          ownership across Amazon-scale systems, consumer-scale education platforms, and AI/backend products.
        </p>
        <p>
          B.Tech CSE from Jaypee Institute of IT. Currently focused on Senior SDE / Senior Backend Engineer
          / AI-native SDE roles where ownership, system design maturity, applied AI curiosity, and shipping speed matter.
        </p>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-shell reveal">
      <div className="section-header">
        <div>
          <div className="section-label">Experience</div>
          <h2>Production systems, not toy demos.</h2>
        </div>
        <p>Four engineering chapters across backend platforms, applied AI, consumer-scale education, and Amazon-scale systems.</p>
      </div>

      <div className="timeline">
        {experiences.map((item, index) => (
          <article className="experience-card" key={item.company} style={{ animationDelay: `${index * 70}ms` }}>
            <div className="timeline-dot" />
            <div className="experience-topline">
              <div>
                <h3>{item.company}</h3>
                <p>{item.role}</p>
              </div>
              <span>{item.period}</span>
            </div>
            <p className="summary">{item.summary}</p>
            <ul>
              {item.impact.map((point) => <li key={point}>{point}</li>)}
            </ul>
            <ChipRow items={item.stack} />
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-shell reveal">
      <div className="section-header">
        <div>
          <div className="section-label">Selected Projects</div>
          <h2>Proof of backend and AI ownership beyond the resume.</h2>
        </div>
        <a className="text-link" href={contactLinks.github} target="_blank" rel="noreferrer">View GitHub -&gt;</a>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article
            className="project-card"
            key={project.title}
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <div className="project-preview" aria-hidden="true">
              <div className="preview-topline">
                <span>{project.category}</span>
                <span>Live pattern</span>
              </div>
              <div className="preview-flow">
                {project.metrics.map((metric) => (
                  <span key={metric}>{metric}</span>
                ))}
              </div>
            </div>
            <div className="project-signal">{project.signal}</div>
            <div className="project-heading">
              <h3>{project.title}</h3>
              <a className="text-link" href={project.link} target="_blank" rel="noreferrer">{project.cta}</a>
            </div>
            <p>{project.description}</p>
            <strong className="project-outcome">{project.outcome}</strong>
            <ul className="project-points">
              {project.highlights.map((point) => <li key={point}>{point}</li>)}
            </ul>
            <ChipRow items={project.tech} />
          </article>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="role-fit" className="section-shell reveal">
      <div className="section-header">
        <div>
          <div className="section-label">Role Fit</div>
          <h2>Where I fit on a product team.</h2>
        </div>
        <p>Role-fit areas for teams that need backend ownership plus applied AI product judgment.</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <article className="service-card" key={service.title} style={{ animationDelay: `${index * 70}ms` }}>
            <div className="project-signal">{service.label}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ChipRow items={service.tech} />
            <a className="text-link" href={contactLinks.bookCall}>Start hiring conversation -&gt;</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-shell reveal">
      <div className="section-header">
        <div>
          <div className="section-label">Skills</div>
          <h2>Stack built around backend ownership.</h2>
        </div>
        <p>Backend, applied AI, databases, observability, and cloud tooling used in real production work.</p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.group}>
            <h3>{skill.group}</h3>
            <ChipRow items={skill.items} />
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-shell contact reveal">
      <div>
        <div className="section-label">Contact</div>
        <h2>Hiring for a Senior SDE, AI Native SDE, or Applied AI SDE role?</h2>
        <p>
          I&apos;m focused on senior engineering opportunities involving backend APIs, distributed systems,
          AWS, reliability, internal platforms, and AI-native product work.
        </p>
      </div>
      <div className="contact-actions">
        <a className="button primary" href={contactLinks.email}>Discuss a senior role</a>
        <a className="button secondary" href={contactLinks.bookCall}>Book intro call</a>
        <a className="button secondary" href={contactLinks.resume}>Request resume</a>
        <a className="button secondary" href={contactLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="button secondary" href={contactLinks.github} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Services />
      <Skills />
      <Contact />
    </main>
  );
}
