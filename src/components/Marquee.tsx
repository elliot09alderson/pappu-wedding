export default function Marquee() {
    const items = [
        'Haldi Ceremony', '✦', 'Reception Night', '✦',
        'Pappu & Varsha', '✦', 'March 2026', '✦',
        'Love & Blessings', '✦', 'Haldi Ceremony', '✦',
        'Reception Night', '✦', 'Pappu & Varsha', '✦',
        'March 2026', '✦', 'Love & Blessings', '✦',
    ]

    return (
        <div className="marquee-section">
            <div className="marquee-track">
                {items.map((item, i) => (
                    <span key={i} className={item === '✦' ? 'dot' : ''}>{item}</span>
                ))}
                {items.map((item, i) => (
                    <span key={`b-${i}`} className={item === '✦' ? 'dot' : ''}>{item}</span>
                ))}
            </div>
        </div>
    )
}
