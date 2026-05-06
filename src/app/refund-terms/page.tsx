import type { Metadata } from "next";
import Link from "next/link";
import { BadgeIndianRupee, BookOpenCheck, FileWarning, Gavel, GraduationCap, Mail, ShieldAlert } from "lucide-react";
import {
  COMPANY_EMAIL,
  COMPANY_NAME,
  LEGAL_EFFECTIVE_DATE,
  LEGAL_VERSION,
} from "@/constants/site";
import { LegalCard, LegalPageShell, LegalSection, LegalTable } from "@/components/legal/LegalPageShell";

export const metadata: Metadata = {
  title: "Refund Policy & Terms",
  description:
    "Review Threemates enrollment rules, learner responsibilities, refund timelines, intellectual property restrictions, and dispute handling terms.",
  alternates: { canonical: "/refund-terms" },
  openGraph: {
    title: "Refund Policy & Terms | Threemates",
    description:
      "The commercial and usage terms governing Threemates courses, cohort-based programs, skilling services, and related refunds.",
    url: "/refund-terms",
    type: "website",
  },
  twitter: {
    title: "Refund Policy & Terms | Threemates",
    description:
      "The commercial and usage terms governing Threemates courses, cohort-based programs, skilling services, and related refunds.",
  },
};

const refundRows = [
  [
    "Self-paced courses",
    "Within 7 calendar days of purchase",
    "100% refund",
    "Available only if no more than 20% of course content has been accessed or downloaded.",
  ],
  [
    "Self-paced courses",
    "8 to 15 calendar days from purchase",
    "50% refund",
    "Available only if less than 40% of the course has been accessed and no certificate has been issued.",
  ],
  [
    "Self-paced courses",
    "After 15 calendar days",
    "No refund",
    "Applies regardless of progress, completion status, or learner availability.",
  ],
  [
    "Live cohort programs",
    "7 or more days before the published start date",
    "100% refund",
    "Request must be sent in writing from the registered email address before the cohort begins.",
  ],
  [
    "Live cohort programs",
    "Less than 7 days before start or after the cohort begins",
    "No refund",
    "Administrative planning, reserved seats, and mentor scheduling begin before the cohort start date.",
  ],
  [
    "1-on-1 mentoring or interview sessions",
    "At least 24 hours before the session",
    "Full refund or one-time reschedule",
    "Late cancellations and no-shows are non-refundable unless Threemates confirms an exception in writing.",
  ],
  [
    "Workshops or one-day bootcamps",
    "After purchase",
    "Typically non-refundable",
    "If recordings, notes, or seat transfers are offered, that will be stated on the checkout or event page.",
  ],
];

export default function RefundTermsPage() {
  return (
    <LegalPageShell
      eyebrow="Refund Policy & Terms"
      title="Clear enrollment, payment, refund, and usage rules for every Threemates program."
      description="These terms govern access to courses, cohorts, workshops, mentoring sessions, and related services offered by Threemates. By registering, paying, or using the platform, you agree to the terms below."
      currentPath="/refund-terms"
      meta={[
        { label: "Effective date", value: LEGAL_EFFECTIVE_DATE },
        { label: "Version", value: LEGAL_VERSION },
        { label: "Support and refund contact", value: COMPANY_EMAIL },
        { label: "Jurisdiction", value: "Courts at Thane, Maharashtra, India" },
      ]}
      highlights={[
        {
          title: "What this covers",
          description:
            "Course purchases, cohort access, mentoring sessions, workshops, learner conduct, intellectual property, cancellations, and dispute handling.",
        },
        {
          title: "How to request a refund",
          description:
            "Send a written request from the registered email address to info@threemates.tech with your order ID, course name, and reason for the request.",
        },
        {
          title: "Payment handling",
          description:
            "Approved refunds are generally processed back through the original payment channel used via Razorpay, subject to bank or network timelines.",
        },
        {
          title: "Commercial fairness",
          description:
            "Refund outcomes depend on timing, usage, reserved seats, program format, and any special terms shown at checkout or on the offer page.",
        },
      ]}
    >
      <LegalSection
        eyebrow="Acceptance"
        title="What these terms govern"
        description={`These terms apply to all digital and instructor-led services offered by ${COMPANY_NAME}, including software development skilling programs, modern AI courses, cohort-based training, workshops, mentoring, and related learner support.`}
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <LegalCard title="Formation of agreement" className="pastel-blue">
            <div className="flex items-start gap-3">
              <BookOpenCheck className="mt-1 h-5 w-5 text-blue-600" />
              <p>Your agreement with Threemates begins when you complete enrollment, make a payment, use the program portal, or continue using a service after these terms are published.</p>
            </div>
          </LegalCard>
          <LegalCard title="Eligibility">
            <div className="flex items-start gap-3">
              <GraduationCap className="mt-1 h-5 w-5 text-blue-600" />
              <p>Learners must provide accurate registration details. Individuals under 18 should participate only with parent or guardian involvement where required by law or program policy.</p>
            </div>
          </LegalCard>
          <LegalCard title="Personal access only" className="pastel-sky">
            <div className="flex items-start gap-3">
              <ShieldAlert className="mt-1 h-5 w-5 text-blue-600" />
              <p>Access is personal and non-transferable. Sharing your credentials, seat, downloads, session links, or community access with another person is prohibited.</p>
            </div>
          </LegalCard>
        </div>
      </LegalSection>

      <LegalSection
        eyebrow="Pricing and access"
        title="Enrollment, billing, and learner responsibilities"
        description="Program pricing, inclusions, timelines, and access periods may vary by offering. Any course-specific landing page or invoice terms form part of this agreement."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <LegalCard title="Payments and invoicing">
            <div className="flex items-start gap-3">
              <BadgeIndianRupee className="mt-1 h-5 w-5 text-blue-600" />
              <p>Fees are payable in advance unless a written installment plan is agreed. Payments are routed through Razorpay or another approved payment mechanism disclosed at checkout.</p>
            </div>
            <p>Invoices, receipts, and refund records may include applicable tax components and order metadata needed for accounting and audit purposes.</p>
          </LegalCard>
          <LegalCard title="Learner obligations" className="pastel-blue">
            <p>You are responsible for meeting any published prerequisites, maintaining compatible internet and device access, attending sessions on time, and using the platform in a lawful and respectful manner.</p>
            <p>Failure to meet prerequisites, complete assignments, attend live sessions, or achieve a desired outcome does not by itself create a right to a refund.</p>
          </LegalCard>
          <LegalCard title="Scheduling and program changes" className="pastel-sky">
            <p>We may change instructors, mentors, dates, session timings, or delivery formats where operationally necessary, while preserving the core substance of the purchased offering wherever reasonably possible.</p>
            <p>If Threemates cancels a paid program before it begins and no reasonable alternative is offered, the affected learner will be eligible for a refund.</p>
          </LegalCard>
          <LegalCard title="Promotions and special offers">
            <p>Scholarship seats, discounted offers, bundle pricing, and limited-time promotions may carry program-specific refund conditions. Where they differ from the general policy below, the offer-specific terms will prevail.</p>
          </LegalCard>
        </div>
      </LegalSection>

      <LegalSection
        eyebrow="Refunds"
        title="Refund windows and commercial rules"
        description="Refund requests are reviewed against the offer type, time elapsed since purchase, actual usage, reserved-seat implications, and any custom terms disclosed at the point of sale."
      >
        <LegalTable columns={["Offer type", "Request window", "Outcome", "Conditions"]} rows={refundRows} />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <LegalCard title="Non-refundable situations" className="pastel-blue">
            <p>Refunds are generally not issued for change of mind after substantial usage, failure to attend sessions, dissatisfaction with learner effort or performance, or technical issues arising from the learner&rsquo;s own device or connectivity.</p>
            <p>Processing charges, third-party gateway deductions, currency conversion costs, and taxes already remitted may be deducted where permitted by law and disclosed to you.</p>
          </LegalCard>
          <LegalCard title="How to make a request">
            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 text-blue-600" />
              <p>Email <a href={`mailto:${COMPANY_EMAIL}`} className="font-medium text-blue-700 hover:text-blue-800">{COMPANY_EMAIL}</a> with the subject line Refund Request - Order ID, your registered email, payment reference, course or program name, and the basis for the request.</p>
            </div>
            <p>Approved refunds are typically initiated within 5 to 10 business days, but final credit timelines depend on the payment instrument, bank, or network involved.</p>
          </LegalCard>
        </div>
      </LegalSection>

      <LegalSection
        eyebrow="Usage restrictions"
        title="Intellectual property and platform conduct"
        description="The learning experience depends on protecting course materials, live content, mentorship time, and the community environment."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <LegalCard title="Content ownership">
            <p>Unless stated otherwise, all videos, notes, slides, assignments, session recordings, examples, templates, exercises, code samples, and brand materials remain the property of Threemates or its licensors.</p>
          </LegalCard>
          <LegalCard title="Permitted use" className="pastel-sky">
            <p>You receive a limited, non-exclusive, non-transferable licence to access purchased material for your own learning and internal evaluation only.</p>
          </LegalCard>
          <LegalCard title="Prohibited acts" className="pastel-blue">
            <p>Screen recording, mass downloading, reposting, resale, public sharing, classroom rebroadcast, credential sharing, scraping, reverse engineering, or unauthorized redistribution of materials is prohibited.</p>
          </LegalCard>
          <LegalCard title="Community conduct">
            <p>You must not harass mentors, staff, or other learners, disrupt sessions, upload unlawful content, or misuse chat, community, or submission channels.</p>
          </LegalCard>
          <LegalCard title="Suspension and termination">
            <p>We may suspend or terminate access for fraud, abuse, payment reversal, academic dishonesty, IP violations, or serious misconduct, with or without refund depending on the facts.</p>
          </LegalCard>
          <LegalCard title="Course outcomes">
            <p>No specific job, placement, salary, interview, certification, or career outcome is guaranteed unless expressly stated in a signed written agreement.</p>
          </LegalCard>
        </div>
      </LegalSection>

      <LegalSection
        eyebrow="Risk allocation"
        title="Disclaimers, liability, and dispute resolution"
        description="We aim to deliver useful, reliable programs, but there are reasonable limits to responsibility for learning outcomes, interruptions, and third-party dependencies."
      >
        <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
          <LegalCard title="Service disclaimer" className="pastel-sky">
            <div className="flex items-start gap-3">
              <FileWarning className="mt-1 h-5 w-5 text-blue-600" />
              <p>Programs and website services are provided on an as-available basis. Minor interruptions, scheduling changes, maintenance windows, and tool substitutions may occur without creating independent liability.</p>
            </div>
            <p>Any learning roadmap, project review, mentoring input, or career guidance is informational and should not be treated as employment, legal, financial, or regulatory advice.</p>
          </LegalCard>
          <LegalCard title="Liability and governing law">
            <div className="flex items-start gap-3">
              <Gavel className="mt-1 h-5 w-5 text-blue-600" />
              <p>To the maximum extent permitted by law, Threemates&rsquo; aggregate liability for a claim relating to a paid offering is limited to the amount paid for that specific offering.</p>
            </div>
            <p>These terms are governed by the laws of India. Courts located in Thane, Maharashtra will have exclusive jurisdiction, subject to any mandatory consumer-protection rights that cannot be contractually waived.</p>
            <p>Before formal proceedings, both sides should first attempt a good-faith written resolution process by contacting <a href={`mailto:${COMPANY_EMAIL}`} className="font-medium text-blue-700 hover:text-blue-800">{COMPANY_EMAIL}</a>.</p>
            <p>
              Related company information is also available on <Link href="/privacy-policy" className="font-medium text-blue-700 hover:text-blue-800">the privacy policy</Link> and <Link href="/dpdp-compliance" className="font-medium text-blue-700 hover:text-blue-800">the DPDP compliance page</Link>.
            </p>
          </LegalCard>
        </div>
      </LegalSection>
    </LegalPageShell>
  );
}