import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const quotes = [
    {
        quote: '"May your love be as timeless as the stars and as warm as the morning sun. Wishing you a lifetime of happiness."',
        author: 'From Ma & Papa',
    },
    {
        quote: '"Two souls beautifully intertwined. May every moment together be a treasure and every day a new adventure."',
        author: 'From the Family',
    },
    {
        quote: '"Where there is love, there is life. May your home always be filled with laughter, music, and endless chai."',
        author: 'From Dear Friends',
    },
    {
        quote: '"You were made for each other — now go and conquer the world together. We love you both endlessly."',
        author: 'From Your Besties',
    },
    {
        quote: '"A new beginning, a beautiful story. May you always find in each other your greatest joy and comfort."',
        author: 'From the Whole Family',
    },
    {
        quote: '"Watching you both together is proof that true love still exists. Here\'s to forever and a day more."',
        author: 'From Close Friends',
    },
]

export default function Blessings() {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.blessings .section-label', {
                scrollTrigger: { trigger: '.blessings', start: 'top 85%' },
                y: 20, opacity: 0, duration: 0.7,
            })
            gsap.from('.blessings .section-title', {
                scrollTrigger: { trigger: '.blessings', start: 'top 83%' },
                y: 30, opacity: 0, duration: 0.8, delay: 0.15,
            })
            gsap.from('.blessing-card', {
                scrollTrigger: { trigger: '.blessings__cards', start: 'top 85%' },
                y: 40, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section className="blessings" id="blessings" ref={sectionRef}>
            <div style={{ maxWidth: 1300, margin: '0 auto' }}>
                <p className="section-label">With Love</p>
                <h2 className="section-title">
                    Words of <em style={{ color: 'var(--light-gold)' }}>Blessings</em>
                </h2>
                <div className="blessings__cards">
                    {quotes.map((q, i) => (
                        <div className="blessing-card" key={i}>
                            <p className="blessing-card__quote">{q.quote}</p>
                            <p className="blessing-card__author">— {q.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
