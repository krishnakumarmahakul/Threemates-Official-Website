import { getSiteData } from '@/lib/data-loader';

export default async function Hero() {
    const site = await getSiteData();

    return (
        <section className="section" style={styles.hero}>
            <div className="container">
                <div className="animate-in">
                    <h1 className="display-title">{site.name}</h1>
                    <p style={styles.tagline}>{site.tagline}</p>
                </div>
                <div style={styles.scrollIndicator}>
                    <span style={styles.scrollText}>Explore Infinite Solutions</span>
                    <div style={styles.line}></div>
                </div>
            </div>
        </section>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    hero: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        position: 'relative',
    },
    tagline: {
        fontSize: 'clamp(1.2rem, 3vw, 2rem)',
        marginTop: '2rem',
        color: 'var(--text-secondary)',
        maxWidth: '600px',
        lineHeight: 1.4,
    },
    scrollIndicator: {
        position: 'absolute',
        bottom: '4rem',
        left: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '1rem',
    },
    scrollText: {
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        opacity: 0.5,
    },
    line: {
        width: '1px',
        height: '60px',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    }
};
