import { useEffect, useRef } from 'react'
import gsap from 'gsap'

// Pick the best haldi photo for hero
const HERO_IMG = '/images/haldi/WhatsApp Image 2026-02-17 at 10.01.30 AM.jpeg'

export default function Hero() {
    const bgRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Parallax on scroll
        const onScroll = () => {
            const y = window.scrollY
            if (bgRef.current) {
                bgRef.current.style.transform = `translateY(${y * 0.45}px)`
            }
        }
        window.addEventListener('scroll', onScroll, { passive: true })

        // Entrance animations
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 2.0 })
            tl.to('.hero__eyebrow', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
                .to('.hero__title .name1', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.4')
                .to('.hero__ampersand', { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.5)' }, '-=0.6')
                .to('.hero__title .name2', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.6')
                .to('.hero__date', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
                .to('.hero__scroll-hint', { opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.2')
        })

        return () => {
            window.removeEventListener('scroll', onScroll)
            ctx.revert()
        }
    }, [])

    return (
        <section className="hero" id="hero">
            <div className="hero__bg" ref={bgRef}>
                <img src={HERO_IMG} alt="Wedding Couple" />
            </div>
            <div className="hero__overlay" />

            <div className="hero__content">
                <p className="hero__eyebrow">With the blessings of our families</p>
                <h1 className="hero__title">
                    <span className="name1">Pappu</span>
                    <span className="hero__ampersand">&amp;</span>
                    <span className="name2">Priya</span>
                </h1>
                <p className="hero__date">March 15, 2026 &nbsp;·&nbsp; Rajasthan, India</p>
            </div>

            {/* Scroll hint is now clearly separated at the very bottom */}
            <div className="hero__scroll-hint">
                <div className="hero__scroll-line" />
                <span>Scroll</span>
            </div>
        </section>
    )
}
