import { getTestimonialsData } from '@/lib/data-loader';

export default async function Testimonials() {
    const testimonials = await getTestimonialsData();
    const cards = Array.isArray(testimonials) ? testimonials : testimonials.cards ?? [];

    return (
        <section className="section" style={styles.section}>
            <div className="container">
                <h2 className="section-title">Voices of Innovation</h2>
                <div style={styles.grid}>
                    {cards.map((t: any, index: number) => (
                        <div key={t.id ?? index} style={styles.card}>
                            <p style={styles.content}>&quot;{t.content ?? t.text}&quot;</p>
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
        marginBottom: 0,
    }
};
