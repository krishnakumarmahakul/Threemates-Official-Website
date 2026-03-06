import { getInsightsData } from '@/lib/data-loader';

export default async function Insights() {
    const insights = await getInsightsData();

    return (
        <section id="insights" className="section" style={styles.section}>
            <div className="container">
                <h2 className="section-title">Infinite Insights</h2>
                <div style={styles.grid}>
                    {insights.map((item: any) => (
                        <div key={item.id} style={styles.card}>
                            <div style={styles.meta}>
                                <span style={styles.category}>{item.category}</span>
                                <span style={styles.date}>{item.date}</span>
                            </div>
                            <h3 style={styles.title}>{item.title}</h3>
                            <p style={styles.excerpt}>{item.excerpt}</p>
                            <button style={styles.readMore}>Read Full Insight</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    section: {
        backgroundColor: '#000',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '3rem',
    },
    card: {
        padding: '2.5rem',
        backgroundColor: 'var(--bg-secondary)',
        border: '1px solid var(--glass-border)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
    },
    meta: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '0.75rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
    },
    category: {
        color: '#fff',
        fontWeight: 700,
    },
    date: {
        opacity: 0.4,
    },
    title: {
        fontSize: '1.75rem',
        lineHeight: 1.2,
    },
    excerpt: {
        color: 'var(--text-secondary)',
        lineHeight: 1.6,
    },
    readMore: {
        marginTop: 'auto',
        alignSelf: 'flex-start',
        background: 'none',
        border: 'none',
        color: '#fff',
        fontSize: '0.875rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontWeight: 600,
        cursor: 'pointer',
        borderBottom: '1px solid #fff',
        paddingBottom: '0.2rem',
    }
};
