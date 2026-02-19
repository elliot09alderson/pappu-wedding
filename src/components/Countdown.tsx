import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
    weddingDate: string
}

function pad(n: number) {
    return String(n).padStart(2, '0')
}

function getTimeLeft(dateStr: string) {
    const diff = new Date(dateStr).getTime() - Date.now()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    const days = Math.floor(diff / 86400000)
    const hours = Math.floor((diff % 86400000) / 3600000)
    const minutes = Math.floor((diff % 3600000) / 60000)
    const seconds = Math.floor((diff % 60000) / 1000)
    return { days, hours, minutes, seconds }
}

export default function Countdown({ weddingDate }: Props) {
    const [time, setTime] = useState(getTimeLeft(weddingDate))
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getTimeLeft(weddingDate))
        }, 1000)
        return () => clearInterval(interval)
    }, [weddingDate])

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.countdown .section-label', {
                scrollTrigger: { trigger: '.countdown', start: 'top 80%' },
                y: 20, opacity: 0, duration: 0.7,
            })
            gsap.from('.countdown .section-title', {
                scrollTrigger: { trigger: '.countdown', start: 'top 78%' },
                y: 30, opacity: 0, duration: 0.8, delay: 0.15,
            })
            gsap.from('.countdown__unit', {
                scrollTrigger: { trigger: '.countdown__grid', start: 'top 85%' },
                y: 50, opacity: 0, duration: 0.9, stagger: 0.1, delay: 0.2,
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section className="countdown" id="countdown" ref={sectionRef}>
            <p className="section-label">Counting Down</p>
            <h2 className="section-title">The Big Day Is<br /><em style={{ color: 'var(--light-gold)' }}>Almost Here</em></h2>
            <div className="countdown__grid">
                <div className="countdown__unit">
                    <span className="countdown__number">{pad(time.days)}</span>
                    <span className="countdown__label">Days</span>
                </div>
                <div className="countdown__sep">:</div>
                <div className="countdown__unit">
                    <span className="countdown__number">{pad(time.hours)}</span>
                    <span className="countdown__label">Hours</span>
                </div>
                <div className="countdown__sep">:</div>
                <div className="countdown__unit">
                    <span className="countdown__number">{pad(time.minutes)}</span>
                    <span className="countdown__label">Minutes</span>
                </div>
                <div className="countdown__sep">:</div>
                <div className="countdown__unit">
                    <span className="countdown__number">{pad(time.seconds)}</span>
                    <span className="countdown__label">Seconds</span>
                </div>
            </div>
        </section>
    )
}
