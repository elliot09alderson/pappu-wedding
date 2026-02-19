import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Loader() {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to('.loader__script', {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                delay: 0.2,
            })
            gsap.to(ref.current, {
                opacity: 0,
                pointerEvents: 'none',
                duration: 0.6,
                delay: 1.8,
                ease: 'power2.inOut',
            })
        }, ref)
        return () => ctx.revert()
    }, [])

    return (
        <div className="loader" ref={ref}>
            <p className="loader__script">Pappu &amp; Varsha</p>
            <div className="loader__bar" />
        </div>
    )
}
