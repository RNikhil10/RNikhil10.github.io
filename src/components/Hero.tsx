import { profile } from '../data/content'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__content">
        <p className="hero__roles">{profile.roles.join(' · ')}</p>
        <h1>
          Hi, I&apos;m <span className="accent">{profile.name}</span>.
        </h1>
        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">See my work</a>
          <a href="#contact" className="btn">Get in touch</a>
        </div>
      </div>
    </section>
  )
}
