import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const events = [
    { side: 'left', time: 'March 14 · 10:00 AM', title: 'Haldi Ceremony', desc: 'The golden glow of turmeric, family, laughter — the tradition begins.' },
    { side: 'right', time: 'March 14 · 7:00 PM', title: 'Mehendi Evening', desc: 'Intricate henna patterns, musical evenings & the scent of marigolds.' },
    { side: 'left', time: 'March 15 · 11:00 AM', title: 'Wedding Ceremony', desc: 'Seven sacred vows taken around the holy fire. A new chapter begins.' },
    { side: 'right', time: 'March 15 · 2:00 PM', title: 'Vidaai', desc: 'Tears of joy, rose petals in the air — a bittersweet farewell of love.' },
    { side: 'left', time: 'March 15 · 7:00 PM', title: 'Reception Gala', desc: 'An evening of celebration, dance, and togetherness under the stars.' },
]

export default function Timeline() {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.timeline .section-label', {
                scrollTrigger: { trigger: '.timeline', start: 'top 85%' },
                y: 20, opacity: 0, duration: 0.7,
            })
            gsap.from('.timeline .section-title', {
                scrollTrigger: { trigger: '.timeline', start: 'top 83%' },
                y: 30, opacity: 0, duration: 0.8, delay: 0.15,
            })
            gsap.from('.timeline-item', {
                scrollTrigger: { trigger: '.timeline__list', start: 'top 80%' },
                y: 40, opacity: 0, duration: 0.8, stagger: 0.18, ease: 'power3.out',
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section className="timeline" id="timeline" ref={sectionRef}>
            <div className="timeline__inner">
                <p className="section-label" style={{ textAlign: 'center' }}>The Journey</p>
                <h2 className="section-title" style={{ textAlign: 'center' }}>
                    Two Days of <em>Celebration</em>
                </h2>

                <div className="timeline__list">
                    {events.map((ev, i) => (
                        <div className={`timeline-item ${ev.side}`} key={i}>
                            {ev.side === 'left' ? (
                                <>
                                    <div className="timeline-item__content">
                                        <p className="timeline-item__time">{ev.time}</p>
                                        <h3 className="timeline-item__title">{ev.title}</h3>
                                        <p className="timeline-item__desc">{ev.desc}</p>
                                    </div>
                                    <div className="timeline-dot timeline-item__spacer" />
                                    <div className="timeline-item__empty" />
                                </>
                            ) : (
                                <>
                                    <div className="timeline-item__empty" />
                                    <div className="timeline-dot timeline-item__spacer" />
                                    <div className="timeline-item__content">
                                        <p className="timeline-item__time">{ev.time}</p>
                                        <h3 className="timeline-item__title">{ev.title}</h3>
                                        <p className="timeline-item__desc">{ev.desc}</p>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
