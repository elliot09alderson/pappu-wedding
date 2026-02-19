import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Marquee from './components/Marquee'
import Events from './components/Events'
import Venue from './components/Venue'
import ParallaxBand from './components/ParallaxBand'
import Timeline from './components/Timeline'
import HighlightsGallery from './components/HighlightsGallery'
import Blessings from './components/Blessings'
import Countdown from './components/Countdown'
import RSVP from './components/RSVP'
import QuoteSection from './components/QuoteSection'
import Footer from './components/Footer'

export default function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.4,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        })

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            {loading && <Loader />}
            <Navbar />
            <main>
                {/* 1. Full-screen hero with parallax */}
                <Hero />
                {/* 2. Love story / couple intro */}
                <Story />
                {/* 3. Scrolling marquee strip */}
                <Marquee />
                {/* 4. Event cards (Haldi + Reception) */}
                <Events />
                {/* 5. Venue & schedule cards */}
                <Venue />
                {/* 6. Parallax full-width image band */}
                <ParallaxBand
                    image="/images/haldi/WhatsApp Image 2026-02-17 at 10.01.31 AM.jpeg"
                    script="Two Souls, One Story"
                    caption="Blessed by family · Bound by love · Written in the stars"
                />
                {/* 7. Two-day event timeline */}
                <Timeline />
                {/* 8. Masonry photo gallery with lightbox */}
                <HighlightsGallery />
                {/* 9. Second parallax band */}
                <ParallaxBand
                    image="/images/reception/WhatsApp Image 2026-02-17 at 10.01.35 AM.jpeg"
                    script="Forever Starts Now"
                    caption="The most beautiful adventure is the one we share together"
                />
                {/* 10. Blessings & wishes from family */}
                <Blessings />
                {/* 11. Live countdown timer */}
                <Countdown weddingDate="2026-03-15T11:00:00" />
                {/* 12. RSVP form */}
                <RSVP />
                {/* 13. Poetic closing quote */}
                <QuoteSection />
                {/* 14. Footer */}
                <Footer />
            </main>
        </>
    )
}
