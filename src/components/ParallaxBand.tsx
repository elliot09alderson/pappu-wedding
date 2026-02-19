import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
    image: string
    script: string
    caption: string
}

export default function ParallaxBand({ image, script, caption }: Props) {
    const imgRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = imgRef.current
        if (!el) return

        const ctx = gsap.context(() => {
            gsap.fromTo(el,
                { y: '-10%' },
                {
                    y: '10%',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: el.parentElement,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                    },
                }
            )
        })
        return () => ctx.revert()
    }, [])

    return (
        <div className="parallax-section">
            <div className="parallax-section__img" ref={imgRef}>
                <img src={image} alt={script} loading="lazy" />
            </div>
            <div className="parallax-section__overlay" />
            <div className="parallax-section__content">
                <p className="script">{script}</p>
                <p className="caption">{caption}</p>
            </div>
        </div>
    )
}
