import Link from 'next/link';
import { getNavData, getSiteData } from '@/lib/data-loader';

export default async function Header() {
    const navItems = await getNavData();
    const site = await getSiteData();

    return (
        <header style={styles.header}>
            <div className="container" style={styles.container}>
                <Link href="/" style={styles.logo}>
                    {site.name}
                </Link>
                <nav style={styles.nav}>
                    {navItems.map((item: any) => (
                        <Link key={item.label} href={item.href} style={styles.navLink}>
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div style={styles.cta}>
                    <Link href="#contact" style={styles.button}>Let&apos;s Talk</Link>
                </div>
            </div>
        </header>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    header: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: '1.5rem 0',
        backgroundColor: 'rgba(5, 5, 5, 0.7)',
        backdropFilter: 'blur(15px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        fontSize: '1.5rem',
        fontWeight: 800,
        letterSpacing: '-0.03em',
        textTransform: 'uppercase',
    },
    nav: {
        display: 'flex',
        gap: '2.5rem',
    },
    navLink: {
        fontSize: '0.875rem',
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        opacity: 0.7,
        transition: 'opacity 0.3s ease',
    },
    cta: {
        display: 'flex',
    },
    button: {
        padding: '0.75rem 1.5rem',
        backgroundColor: '#fff',
        color: '#000',
        fontSize: '0.875rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        borderRadius: '4px',
    }
};
