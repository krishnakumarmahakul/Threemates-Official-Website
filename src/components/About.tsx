import { getAboutData } from '@/lib/data-loader';

export default async function About() {
    const about = await getAboutData();

    return (
        <section id="about" className="section" style={styles.section}>
            <div className="container">
                <div style={styles.grid}>
                    <div>
                        <h2 className="section-title">{about.title}</h2>
                        <p style={styles.description}>{about.description}</p>
                    </div>
                    <div style={styles.statsBox}>
                        <div style={styles.visionBox}>
                            <h3 style={styles.subtitle}>{about.subtitle}</h3>
                            <p style={styles.text}>{about.mission}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    section: {
        backgroundColor: 'var(--bg-secondary)',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
    },
    description: {
        fontSize: '1.25rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.6,
    },
    statsBox: {
        padding: '3rem',
        border: '1px solid var(--glass-border)',
        backgroundColor: 'var(--glass-bg)',
    },
    subtitle: {
        marginBottom: '1rem',
        fontSize: '1.5rem',
    },
    text: {
        color: 'var(--text-secondary)',
    }
};
