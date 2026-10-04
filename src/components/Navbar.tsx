import { useEffect, useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { navLinks, profile } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--solid' : ''}`}>
      <nav className="container navbar__inner" aria-label="Main">
        <a href="#home" className="navbar__brand">
          <img src={profile.logo} alt={`${profile.fullName} logo`} />
        </a>

        <button
          className="navbar__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaXmark /> : <FaBars />}
        </button>

        <ul id="nav-links" className={`navbar__links ${open ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
