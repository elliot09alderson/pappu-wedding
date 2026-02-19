import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ALL_IMAGES = [
    '/images/highlights/WhatsApp Image 2026-02-17 at 10.01.37 AM.jpeg',
    '/images/highlights/WhatsApp Image 2026-02-17 at 10.01.38 AM.jpeg',
    '/images/highlights/WhatsApp Image 2026-02-17 sijat 10.01.39 AM.jpeg',
    '/images/highlights/WhatsApp Image 44f2026-02-17 at 10.01.39 AM.jpeg',
    '/images/highlights/WhatsApp Image 2026-02-17 at 10.asd01.40 AM.jpeg',
    '/images/highlights/WhatsApp Image 2026-02-17 at 1klsdaknda0.01.39 AM.jpeg',
    '/images/highlights/wew.jpeg',
    '/images/haldi/WhatsApp Image 2026-02-17 at 10.01.31 AM.jpeg',
    '/images/haldi/WhatsApp Image 2026-02-17 at 10.031.31 AM.jpeg',
    '/images/haldi/WhatsApp Image 2026-02-17 at 10.3201.31 AM.jpeg',
    '/images/haldi/WhatsApp Image 2026-02-17303 at 10.01.34 AM.jpeg',
    '/images/haldi/WhatsApp Image 2026-0werr2-17 at 10.01.33 AM.jpeg',
    '/images/reception/WhatsApp Image 2026-02-17 4at 10.01.36 AM.jpeg',
    '/images/reception/WhatsApp Image 2026-24302-17 at 10.01.37 AM.jpeg',
    '/images/reception/sadasda.jpeg',
]

export default function HighlightsGallery() {
    const [lightbox, setLightbox] = useState<string | null>(null)
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.gallery-item', {
                scrollTrigger: {
                    trigger: '.gallery-masonry',
                    start: 'top 85%',
                },
                y: 60,
                opacity: 0,
                duration: 0.9,
                stagger: 0.07,
                ease: 'power3.out',
            })
            gsap.from('.highlights .section-label', {
                scrollTrigger: { trigger: '.highlights', start: 'top 85%' },
                y: 20, opacity: 0, duration: 0.6,
            })
            gsap.from('.highlights .section-title', {
                scrollTrigger: { trigger: '.highlights', start: 'top 83%' },
                y: 30, opacity: 0, duration: 0.8, delay: 0.12,
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setLightbox(null)
        }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [])

    return (
        <section className="highlights" id="highlights" ref={sectionRef}>
            <p className="section-label">Gallery</p>
            <h2 className="section-title">
                Captured <em>Moments</em>,<br />Timeless Memories
            </h2>

            <div className="gallery-masonry" id="gallery">
                {ALL_IMAGES.map((src, i) => (
                    <div className="gallery-item" key={i} onClick={() => setLightbox(src)}>
                        <img src={src} alt={`Wedding moment ${i + 1}`} loading="lazy" />
                        <div className="gallery-item__overlay">
                            <span>View</span>
                        </div>
                    </div>
                ))}
            </div>

            {lightbox && (
                <div className="lightbox" onClick={() => setLightbox(null)}>
                    <button className="lightbox__close" onClick={() => setLightbox(null)}>✕</button>
                    <img src={lightbox} alt="Gallery" onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </section>
    )
}
