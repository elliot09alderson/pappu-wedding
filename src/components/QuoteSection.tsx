import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function QuoteSection() {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.quote-text', {
                scrollTrigger: { trigger: '.quote-section', start: 'top 75%' },
                y: 40, opacity: 0, duration: 1.2, ease: 'power3.out',
            })
            gsap.from('.quote-attribution', {
                scrollTrigger: { trigger: '.quote-section', start: 'top 70%' },
                y: 20, opacity: 0, duration: 0.8, delay: 0.4,
            })
            gsap.from('.quote-ornament', {
                scrollTrigger: { trigger: '.quote-section', start: 'top 78%' },
                scale: 0, opacity: 0, duration: 0.7, ease: 'back.out(2)',
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section className="quote-section" ref={sectionRef}>
            <div className="quote-section__bg" />
            <div style={{ maxWidth: 900, margin: '0 auto' }}>
                <div className="divider" style={{ justifyContent: 'center' }}>
                    <div className="divider__line" />
                    <div className="divider__ornament quote-ornament" style={{ fontSize: '1.8rem' }}>🌸</div>
                    <div className="divider__line" />
                </div>
                <p className="quote-text">
                    "Love is not about finding the right person,<br />
                    it is about <em>creating</em> the right story —<br />
                    together, always."
                </p>
                <p className="quote-attribution">— Yours, Forever</p>
            </div>
        </section>
    )
}
