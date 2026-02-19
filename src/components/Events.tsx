import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const haldi_images = [
    '/images/haldi/WhatsApp Image 2026-02-17 at 10.01.30 AM.jpeg',
    '/images/haldi/WhatsApp Image 2026-02-17 at 10.01.31 AM.jpeg',
    '/images/haldi/WhatsApp Image 2026-02-17 at 10.01erw.32 AM.jpeg',
    '/images/haldi/WhatsApp Image 2026-02-17 at 10.031.31 AM.jpeg',
]

const reception_images = [
    '/images/reception/WhatsApp Image 2026-02-17 at 10.01.34 AM.jpeg',
    '/images/reception/WhatsApp Image 2026-02-17 at 10.01.35 AM.jpeg',
    '/images/reception/WhatsApp Image 2026-02-17 at 10.01342.37 AM.jpeg',
    '/images/reception/WhatsApp Image 2026-02-17 at 10.32401.36 AM.jpeg',
]

interface EventProps {
    label: string
    title: string
    date: string
    venue: string
    images: string[]
    delay?: number
}

function EventCard({ label, title, date, venue, images, delay = 0 }: EventProps) {
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(cardRef.current, {
                scrollTrigger: { trigger: cardRef.current, start: 'top 80%' },
                y: 70,
                opacity: 0,
                duration: 1.1,
                delay,
                ease: 'power3.out',
            })
        })
        return () => ctx.revert()
    }, [delay])

    return (
        <div className="event-card" ref={cardRef}>
            <div className="event-card__img-wrap">
                <img src={images[0]} alt={title} loading="lazy" />
                <div className="event-card__overlay" />
                <div className="event-card__body">
                    <p className="event-card__label">{label}</p>
                    <h3 className="event-card__title">{title}</h3>
                    <p className="event-card__date">{date} · {venue}</p>
                </div>
            </div>
        </div>
    )
}

export default function Events() {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.events__header .section-label', {
                scrollTrigger: { trigger: '.events__inner', start: 'top 85%' },
                y: 25, opacity: 0, duration: 0.7,
            })
            gsap.from('.events__header .section-title', {
                scrollTrigger: { trigger: '.events__inner', start: 'top 83%' },
                y: 35, opacity: 0, duration: 0.9, delay: 0.15,
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section className="events" id="events" ref={sectionRef}>
            <div className="events__inner">
                <div className="events__header">
                    <p className="section-label">Celebrations</p>
                    <h2 className="section-title">
                        Every Moment, <em>Crafted</em><br />With Love
                    </h2>
                </div>
                <div className="events__grid">
                    <EventCard
                        label="01 — Haldi Ceremony"
                        title="Haldi"
                        date="March 14, 2026"
                        venue="Family Home, Jaipur"
                        images={haldi_images}
                        delay={0}
                    />
                    <EventCard
                        label="02 — Reception"
                        title="Reception"
                        date="March 15, 2026"
                        venue="Grand Ballroom, Udaipur"
                        images={reception_images}
                        delay={0.2}
                    />
                </div>
            </div>
        </section>
    )
}
