import { getTestimonialsData } from '@/lib/data-loader';

export default async function Testimonials() {
    const testimonials = await getTestimonialsData();

    return (
        <section className="section" style={styles.section}>
            <div className="container">
                <h2 className="section-title">Voices of Innovation</h2>
                <div style={styles.grid}>
                    {testimonials.map((t: any) => (
                        <div key={t.id} style={styles.card}>
                            <p style={styles.content}>&quot;{t.content}&quot;</p>
                            <div style={styles.authorBox}>
                                <h4 style={styles.author}>{t.author}</h4>
                                <p style={styles.role}>{t.role} @ {t.client}</p>
                            </div>
                        </div>
                    ))}
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
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '2.5rem',
    },
    card: {
        padding: '4rem',
        border: '1px solid var(--glass-border)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    content: {
        fontSize: '1.5rem',
        fontStyle: 'italic',
        lineHeight: 1.4,
        marginBottom: '3rem',
    },
    author: {
        fontSize: '1.1rem',
        marginBottom: '0.25rem',
    },
    role: {
        fontSize: '0.875rem',
        opacity: 0.5,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
    }
};
