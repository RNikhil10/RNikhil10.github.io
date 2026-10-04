import type { IconType } from 'react-icons'
import { FaArrowRight, FaDna, FaHtml5, FaPython } from 'react-icons/fa6'
import { projects, type Project } from '../data/content'

const icons: Record<Project['icon'], IconType> = {
  dna: FaDna,
  python: FaPython,
  web: FaHtml5,
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section__title">Projects</h2>
        <div className="cards">
          {projects.map((project) => {
            const Icon = icons[project.icon]
            return (
              <article key={project.title} className="card">
                <Icon className="card__icon" aria-hidden />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.link && (
                  <a href={project.link.href} target="_blank" rel="noreferrer" className="card__link">
                    {project.link.label} <FaArrowRight aria-hidden />
                  </a>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
