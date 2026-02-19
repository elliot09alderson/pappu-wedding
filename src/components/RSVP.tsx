import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function RSVP() {
    const sectionRef = useRef<HTMLElement>(null)
    const [submitted, setSubmitted] = useState(false)
    const [form, setForm] = useState({ name: '', phone: '', attending: 'yes', guests: '1', message: '' })

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.rsvp .section-label', {
                scrollTrigger: { trigger: '.rsvp', start: 'top 85%' },
                y: 20, opacity: 0, duration: 0.7,
            })
            gsap.from('.rsvp .section-title', {
                scrollTrigger: { trigger: '.rsvp', start: 'top 83%' },
                y: 30, opacity: 0, duration: 0.8, delay: 0.15,
            })
            gsap.from('.rsvp__form', {
                scrollTrigger: { trigger: '.rsvp__form', start: 'top 90%' },
                y: 40, opacity: 0, duration: 0.9, delay: 0.2,
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <section className="rsvp" id="rsvp" ref={sectionRef}>
            <div className="rsvp__inner">
                <p className="section-label">You're Invited</p>
                <h2 className="section-title">
                    RSVP &amp; <em>Join the Joy</em>
                </h2>
                <div className="divider" style={{ justifyContent: 'center', marginBottom: 0 }}>
                    <div className="divider__line" />
                    <div className="divider__ornament">✦</div>
                    <div className="divider__line" />
                </div>

                {submitted ? (
                    <div style={{ marginTop: '3rem' }}>
                        <p className="rsvp__success">We'll see you there! 🌸</p>
                        <p style={{ fontFamily: 'var(--font-serif)', color: 'var(--warm-gray)', marginTop: '1rem', fontStyle: 'italic' }}>
                            Thank you, {form.name}. Your presence means everything to us.
                        </p>
                    </div>
                ) : (
                    <form className="rsvp__form" onSubmit={handleSubmit}>
                        <div className="rsvp__row">
                            <div className="rsvp__field">
                                <label htmlFor="rsvp-name">Your Name</label>
                                <input
                                    id="rsvp-name"
                                    type="text"
                                    placeholder="Ramesh Kumar"
                                    value={form.name}
                                    onChange={e => setForm({ ...form, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="rsvp__field">
                                <label htmlFor="rsvp-phone">Phone Number</label>
                                <input
                                    id="rsvp-phone"
                                    type="tel"
                                    placeholder="+91 98765 43210"
                                    value={form.phone}
                                    onChange={e => setForm({ ...form, phone: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="rsvp__row">
                            <div className="rsvp__field">
                                <label htmlFor="rsvp-attending">Will you attend?</label>
                                <select
                                    id="rsvp-attending"
                                    value={form.attending}
                                    onChange={e => setForm({ ...form, attending: e.target.value })}
                                >
                                    <option value="yes">Joyfully Attending 🎉</option>
                                    <option value="no">Unable to Attend</option>
                                </select>
                            </div>
                            <div className="rsvp__field">
                                <label htmlFor="rsvp-guests">Number of Guests</label>
                                <select
                                    id="rsvp-guests"
                                    value={form.guests}
                                    onChange={e => setForm({ ...form, guests: e.target.value })}
                                >
                                    {['1', '2', '3', '4', '5+'].map(n => <option key={n} value={n}>{n}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="rsvp__field">
                            <label htmlFor="rsvp-message">A message for the couple</label>
                            <textarea
                                id="rsvp-message"
                                placeholder="Write your blessings here..."
                                value={form.message}
                                onChange={e => setForm({ ...form, message: e.target.value })}
                            />
                        </div>
                        <button className="rsvp__btn" type="submit">Send with Love ✦</button>
                    </form>
                )}
            </div>
        </section>
    )
}
