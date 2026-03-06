import { getSiteData } from '@/lib/data-loader';

export default async function Contact() {
    const site = await getSiteData();

    return (
        <section id="contact" className="section" style={styles.section}>
            <div className="container">
                <div style={styles.grid}>
                    <div style={styles.info}>
                        <h2 className="section-title">Ready for Innovation?</h2>
                        <p style={styles.text}>Let&apos;s discuss how we can build the future together. Reach out or visit us at our infinite valley.</p>
                        <div style={styles.details}>
                            <div style={styles.item}>
                                <span style={styles.label}>Email</span>
                                <a href={`mailto:${site.contact.email}`} style={styles.value}>{site.contact.email}</a>
                            </div>
                            <div style={styles.item}>
                                <span style={styles.label}>Address</span>
                                <p style={styles.value}>{site.contact.address}</p>
                            </div>
                        </div>
                    </div>
                    <form style={styles.form}>
                        <div style={styles.row}>
                            <input type="text" placeholder="Your Name" style={styles.input} />
                            <input type="email" placeholder="Email Address" style={styles.input} />
                        </div>
                        <textarea placeholder="Message" rows={5} style={styles.textarea}></textarea>
                        <button type="submit" style={styles.submit}>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    section: {
        backgroundColor: 'var(--bg-primary)',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1.2fr',
        gap: '6rem',
        alignItems: 'flex-start',
    },
    info: {
        maxWidth: '500px',
    },
    text: {
        fontSize: '1.25rem',
        color: 'var(--text-secondary)',
        marginBottom: '3rem',
        lineHeight: 1.5,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2.5rem',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    },
    label: {
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        opacity: 0.4,
    },
    value: {
        fontSize: '1.25rem',
        fontWeight: 600,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        padding: '4rem',
        backgroundColor: 'var(--bg-secondary)',
        border: '1px solid var(--glass-border)',
    },
    row: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
    },
    input: {
        background: 'none',
        border: 'none',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '1rem 0',
        color: '#fff',
        fontSize: '1rem',
        outline: 'none',
    },
    textarea: {
        background: 'none',
        border: 'none',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '1rem 0',
        color: '#fff',
        fontSize: '1rem',
        outline: 'none',
        resize: 'none',
    },
    submit: {
        alignSelf: 'flex-start',
        marginTop: '1rem',
        padding: '1.25rem 3rem',
        backgroundColor: '#fff',
        color: '#000',
        border: 'none',
        fontSize: '1rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        cursor: 'pointer',
    }
};
