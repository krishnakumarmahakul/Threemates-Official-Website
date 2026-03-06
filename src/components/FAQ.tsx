import { getFaqData } from '@/lib/data-loader';

export default async function FAQ() {
    const faqs = await getFaqData();

    return (
        <section className="section" id="faq">
            <div className="container" style={styles.narrow}>
                <h2 className="section-title">Common Inquiries</h2>
                <div style={styles.list}>
                    {faqs.map((faq: any, index: number) => (
                        <details key={index} style={styles.item}>
                            <summary style={styles.question}>{faq.question}</summary>
                            <p style={styles.answer}>{faq.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    narrow: {
        maxWidth: '800px',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
    },
    item: {
        padding: '2rem',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        cursor: 'pointer',
    },
    question: {
        fontSize: '1.25rem',
        fontWeight: 600,
        listStyle: 'none',
        outline: 'none',
    },
    answer: {
        marginTop: '1.5rem',
        lineHeight: 1.6,
        color: 'var(--text-secondary)',
    }
};
