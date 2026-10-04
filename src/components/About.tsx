import { useState } from 'react'
import { about, education, experience, profile, skills, type TimelineItem } from '../data/content'

const tabs = ['Education', 'Experience', 'Skills'] as const
type Tab = (typeof tabs)[number]

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ul className="timeline">
      {items.map((item) => (
        <li key={`${item.period}-${item.title}`}>
          <span className="timeline__period">{item.period}</span>
          <strong>{item.title}</strong>
          {item.detail && <span className="muted">{item.detail}</span>}
        </li>
      ))}
    </ul>
  )
}

export default function About() {
  const [active, setActive] = useState<Tab>('Education')

  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="about__photo">
          <img src={profile.photo} alt={profile.fullName} loading="lazy" />
        </div>

        <div>
          <h2 className="section__title">About Me</h2>
          {about.map((paragraph, i) => (
            <p key={i} className="about__text">{paragraph}</p>
          ))}

          <div className="tabs" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab}
                role="tab"
                id={`tab-${tab}`}
                aria-selected={active === tab}
                aria-controls={`panel-${tab}`}
                className={`tabs__tab ${active === tab ? 'is-active' : ''}`}
                onClick={() => setActive(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div role="tabpanel" id={`panel-${active}`} aria-labelledby={`tab-${active}`} className="tabs__panel">
            {active === 'Education' && <Timeline items={education} />}
            {active === 'Experience' && <Timeline items={experience} />}
            {active === 'Skills' && (
              <ul className="skills">
                {skills.map((skill) => (
                  <li key={skill.name}>
                    <strong>{skill.name}</strong>
                    {skill.detail && <span className="muted">{skill.detail}</span>}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
