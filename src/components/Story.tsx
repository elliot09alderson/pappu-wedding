import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const MAIN_IMG = '/images/haldi/WhatsApp Image 2026-02-17 at 10.01.31 AM.jpeg'
const ACCENT_IMG = '/images/reception/WhatsApp Image 2026-02-17 at 10.01.34 AM.jpeg'

export default function Story() {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Images slide in
            gsap.from('.story__img-main', {
                scrollTrigger: { trigger: '.story', start: 'top 80%' },
                x: -60,
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out',
            })
            gsap.from('.story__img-accent', {
                scrollTrigger: { trigger: '.story', start: 'top 70%' },
                x: 60,
                opacity: 0,
                duration: 1.2,
                delay: 0.3,
                ease: 'power3.out',
            })
            gsap.from('.story__tag', {
                scrollTrigger: { trigger: '.story', start: 'top 65%' },
                scale: 0.7,
                opacity: 0,
                duration: 0.8,
                delay: 0.5,
                ease: 'back.out(1.7)',
            })
            // Text reveals
            gsap.from('.story__text .section-label', {
                scrollTrigger: { trigger: '.story__text', start: 'top 80%' },
                y: 30, opacity: 0, duration: 0.7,
            })
            gsap.from('.story__text .section-title', {
                scrollTrigger: { trigger: '.story__text', start: 'top 78%' },
                y: 40, opacity: 0, duration: 0.8, delay: 0.15,
            })
            gsap.from('.story__text .divider', {
                scrollTrigger: { trigger: '.story__text', start: 'top 75%' },
                scaleX: 0, opacity: 0, duration: 0.6, delay: 0.3, transformOrigin: 'left',
            })
            gsap.from('.story__text p', {
                scrollTrigger: { trigger: '.story__text', start: 'top 72%' },
                y: 30, opacity: 0, duration: 0.8, delay: 0.4,
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section className="story" id="story" ref={sectionRef}>
            <div className="story__images">
                <img className="story__img-main" src={MAIN_IMG} alt="Couple at Haldi" loading="lazy" />
                <img className="story__img-accent" src={ACCENT_IMG} alt="Reception" loading="lazy" />
                <div className="story__tag">
                    <span className="script">Forever</span>
                    <small>& Always</small>
                </div>
            </div>

            <div className="story__text">
                <p className="section-label">Our Story</p>
                <h2 className="section-title">
                    A Love Written <br /><em>In The Stars</em>
                </h2>
                <div className="divider">
                    <div className="divider__line" />
                    <div className="divider__ornament">✦</div>
                    <div className="divider__line" />
                </div>
                <p>
                    What began as a quiet glance across a room blossomed into a love story
                    as vibrant as marigolds on a monsoon morning. Pappu and Priya's journey
                    is one woven with laughter, late evenings, shared dreams, and the warm
                    certainty that they were always meant to find each other.
                </p>
                <p style={{ marginTop: '1rem' }}>
                    Today, surrounded by the blessings of their families and the love of
                    everyone who has walked this path with them, they begin the greatest
                    chapter yet — together.
                </p>
            </div>
        </section>
    )
}
