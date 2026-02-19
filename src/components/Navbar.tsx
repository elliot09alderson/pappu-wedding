import { useEffect, useState } from 'react'

const links = [
    { label: 'Our Story', href: '#story' },
    { label: 'Events', href: '#events' },
    { label: 'Venue', href: '#venue' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'RSVP', href: '#rsvp' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ' navbar--hero'}`}>
            <a className="navbar__logo" href="#hero">P &amp; P</a>
            <ul className="navbar__links">
                {links.map((l) => (
                    <li key={l.label}>
                        <a href={l.href}>{l.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
