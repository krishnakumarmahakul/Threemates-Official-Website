import { getProcessData } from '@/lib/data-loader';

export default async function Process() {
    const processes = await getProcessData();

    return (
        <section id="process" className="section" style={styles.section}>
            <div className="container">
                <h2 className="section-title">Our Process</h2>
                <div style={styles.grid}>
                    {processes.map((p: any) => (
                        <div key={p.id} style={styles.stepBox}>
                            <span style={styles.stepNumber}>{p.step}</span>
                            <h3 style={styles.stepTitle}>{p.title}</h3>
                            <p style={styles.stepDescription}>{p.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    section: {
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '3rem',
    },
    stepBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    stepNumber: {
        fontSize: '3rem',
        fontWeight: 800,
        opacity: 0.1,
        fontFamily: 'var(--font-heading)',
    },
    stepTitle: {
        fontSize: '1.25rem',
        textTransform: 'uppercase',
        marginTop: '-1.5rem',
    },
    stepDescription: {
        color: 'var(--text-secondary)',
        lineHeight: 1.6,
    }
};
