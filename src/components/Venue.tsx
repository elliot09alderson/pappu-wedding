import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const venues = [
    {
        icon: '🌿',
        event: '01 — Haldi Ceremony',
        name: 'Haveli Sunrise',
        detail: 'Parwati Nagar, Jaipur\nMarch 14, 2026\n10:00 AM onwards',
        date: 'March 14',
    },
    {
        icon: '💍',
        event: '02 — Wedding Ceremony',
        name: 'Amer Palace Lawns',
        detail: 'Amer, Jaipur\nMarch 15, 2026\n11:00 AM · Muhurat',
        date: 'March 15',
    },
    {
        icon: '✨',
        event: '03 — Reception',
        name: 'The Grand Leela',
        detail: 'City Palace Road, Udaipur\nMarch 15, 2026\n7:00 PM onwards',
        date: 'March 15',
    },
]

export default function Venue() {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.venue .section-label', {
                scrollTrigger: { trigger: '.venue', start: 'top 85%' },
                y: 20, opacity: 0, duration: 0.7,
            })
            gsap.from('.venue .section-title', {
                scrollTrigger: { trigger: '.venue', start: 'top 83%' },
                y: 30, opacity: 0, duration: 0.8, delay: 0.15,
            })
            gsap.from('.venue-card', {
                scrollTrigger: { trigger: '.venue__grid', start: 'top 85%' },
                y: 50, opacity: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out',
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section className="venue" id="venue" ref={sectionRef}>
            <div className="venue__inner">
                <p className="section-label">Where &amp; When</p>
                <h2 className="section-title">
                    Celebrations Await <br /><em>At These Sacred Spaces</em>
                </h2>
                <div className="venue__grid">
                    {venues.map((v) => (
                        <div className="venue-card" key={v.event}>
                            <span className="venue-card__icon">{v.icon}</span>
                            <p className="venue-card__event">{v.event}</p>
                            <h3 className="venue-card__name">{v.name}</h3>
                            <p className="venue-card__detail" style={{ whiteSpace: 'pre-line' }}>{v.detail}</p>
                            <span className="venue-card__date-badge">{v.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
