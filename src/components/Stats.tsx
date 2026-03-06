import { getStatsData } from '@/lib/data-loader';

export default async function Stats() {
    const stats = await getStatsData();

    return (
        <section className="section" style={styles.section}>
            <div className="container">
                <div style={styles.grid}>
                    {stats.map((stat: any) => (
                        <div key={stat.id} style={styles.statBox}>
                            <h3 style={styles.value}>{stat.value}{stat.suffix}</h3>
                            <p style={styles.label}>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    section: {
        padding: '4rem 2rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    },
    grid: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '3rem',
    },
    statBox: {
        textAlign: 'center',
        flex: '1 1 200px',
    },
    value: {
        fontSize: '4rem',
        fontWeight: 800,
        marginBottom: '0.5rem',
        fontFamily: 'var(--font-heading)',
    },
    label: {
        fontSize: '0.875rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        opacity: 0.5,
    }
};
