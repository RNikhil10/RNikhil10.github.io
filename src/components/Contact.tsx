import { useState, type FormEvent } from 'react'
import type { IconType } from 'react-icons'
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import { contactFormEndpoint, profile, socials } from '../data/content'

const socialIcons: Record<(typeof socials)[number]['icon'], IconType> = {
  linkedin: FaLinkedin,
  instagram: FaInstagram,
}

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch(contactFormEndpoint, { method: 'POST', body: new FormData(form) })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      form.reset()
      setStatus('sent')
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container contact">
        <div>
          <h2 className="section__title">Contact Me</h2>
          <p className="contact__email">
            <FaEnvelope className="accent" aria-hidden />
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <div className="socials">
            {socials.map((s) => {
              const Icon = socialIcons[s.icon]
              return (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                  <Icon />
                </a>
              )
            })}
          </div>
          <a href={profile.resume} download className="btn">Download CV</a>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="name">Name</label>
          <input id="name" type="text" name="Name" placeholder="Name" required />
          <label className="sr-only" htmlFor="email">Email</label>
          <input id="email" type="email" name="Email" placeholder="Email" required />
          <label className="sr-only" htmlFor="message">Message</label>
          <textarea id="message" name="Message" rows={5} placeholder="Message" />
          <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Submit'}
          </button>
          <p className={`form-status form-status--${status}`} role="status">
            {status === 'sent' && 'Message sent successfully!'}
            {status === 'error' && 'Something went wrong. Please email me directly.'}
          </p>
        </form>
      </div>
    </section>
  )
}
