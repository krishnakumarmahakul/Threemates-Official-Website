import { getTeamData } from '@/lib/data-loader';

export default async function Team() {
    const team = await getTeamData();

    return (
        <section id="team" className="section">
            <div className="container">
                <h2 className="section-title">The Three Minds</h2>
                <div style={styles.grid}>
                    {team.map((member: any) => (
                        <div key={member.id} style={styles.memberCard}>
                            <div style={styles.imagePlaceholder}>
                                {/* Image would go here */}
                            </div>
                            <h3 style={styles.name}>{member.name}</h3>
                            <p style={styles.role}>{member.role}</p>
                            <p style={styles.bio}>{member.bio}</p>
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
    memberCard: {
        padding: '2rem',
        backgroundColor: 'var(--bg-secondary)',
        border: '1px solid var(--glass-border)',
    },
    imagePlaceholder: {
        width: '100%',
        aspectRatio: '1/1',
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        marginBottom: '1.5rem',
        borderRadius: '4px',
    },
    name: {
        fontSize: '1.5rem',
        marginBottom: '0.5rem',
    },
    role: {
        fontSize: '0.875rem',
        color: 'var(--text-secondary)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        marginBottom: '1rem',
    },
    bio: {
        fontSize: '0.875rem',
        lineHeight: 1.6,
        opacity: 0.7,
    }
};
