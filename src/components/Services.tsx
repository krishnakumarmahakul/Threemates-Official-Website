import { getServicesData } from '@/lib/data-loader';

export default async function Services() {
    const services = await getServicesData();

    return (
        <section id="services" className="section">
            <div className="container">
                <h2 className="section-title">Infinite Solutions</h2>
                <div style={styles.grid}>
                    {services.map((service: any) => (
                        <div key={service.id} style={styles.card}>
                            <div style={styles.iconBox}>
                                <span style={styles.icon}>{service.icon}</span>
                            </div>
                            <h3 style={styles.cardTitle}>{service.title}</h3>
                            <p style={styles.cardDescription}>{service.description}</p>
                            <div style={styles.tags}>
                                {service.tags.map((tag: string) => (
                                    <span key={tag} style={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2.5rem',
    },
    card: {
        padding: '3rem',
        backgroundColor: 'var(--bg-secondary)',
        border: '1px solid var(--glass-border)',
        transition: 'all 0.5s var(--transition-smooth)',
        cursor: 'pointer',
    },
    iconBox: {
        marginBottom: '2rem',
        width: '4rem',
        height: '4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '8px',
    },
    icon: {
        fontSize: '1.5rem',
        textTransform: 'lowercase',
        opacity: 0.8,
    },
    cardTitle: {
        fontSize: '1.5rem',
        marginBottom: '1rem',
        textTransform: 'uppercase',
    },
    cardDescription: {
        color: 'var(--text-secondary)',
        lineHeight: 1.6,
        marginBottom: '2rem',
    },
    tags: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.75rem',
    },
    tag: {
        fontSize: '0.75rem',
        padding: '0.4rem 0.8rem',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        borderRadius: '100px',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
    }
};
