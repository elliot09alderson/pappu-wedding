export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer__logo">Pappu &amp; Varsha</p>
            <div className="footer__line" />
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1rem', color: 'rgba(240,216,154,0.5)', marginBottom: '1.5rem' }}>
                March 15, 2026 · Rajasthan, India
            </p>
            <p className="footer__copy">
                With love &amp; gratitude · Made with ♥ for a lifetime of memories
            </p>
        </footer>
    )
}
