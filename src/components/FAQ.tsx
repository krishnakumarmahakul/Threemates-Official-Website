import { getFaqData } from '@/lib/data-loader';
import { FaqAccordion } from '@/components/FAQAccordion';

export default async function FAQ() {
    const faqs = await getFaqData();

    return (
        <section className="site-shell site-section" id="faq">
            <div className="mx-auto max-w-4xl">
                <span className="section-badge">FAQ</span>
                <h2 className="section-title mt-5">Common inquiries</h2>
                <div className="mt-8">
                    <FaqAccordion items={faqs} />
                </div>
            </div>
        </section>
    );
}
