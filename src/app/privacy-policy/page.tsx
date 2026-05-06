import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Database, LockKeyhole, Mail, Server, ShieldCheck } from "lucide-react";
import {
  COMPANY_EMAIL,
  COMPANY_LOCATIONS,
  COMPANY_NAME,
  COMPANY_PHONE,
  COMPANY_WEBSITE,
  LEGAL_EFFECTIVE_DATE,
  LEGAL_VERSION,
} from "@/constants/site";
import { LegalCard, LegalPageShell, LegalSection, LegalTable } from "@/components/legal/LegalPageShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read how Threemates collects, uses, stores, and protects personal data across its software skilling, AI cohort, and website services.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Threemates",
    description:
      "How Threemates handles learner, customer, and website data, including AWS hosting, Razorpay payments, retention, and privacy rights.",
    url: "/privacy-policy",
    type: "website",
  },
  twitter: {
    title: "Privacy Policy | Threemates",
    description:
      "How Threemates handles learner, customer, and website data, including AWS hosting, Razorpay payments, retention, and privacy rights.",
  },
};

const collectionRows = [
  [
    "Identity and contact data",
    "Name, email address, mobile number, city, organization, learner age band, emergency or guardian contact where applicable",
    "Account creation, enrollment, learner communication, admissions follow-up, and support",
  ],
  [
    "Payment and billing data",
    "Order reference, invoice details, billing name, partial payment metadata, refund status",
    "Payment confirmation, invoicing, accounting, tax compliance, and refund handling",
  ],
  [
    "Learning and cohort data",
    "Course access logs, progress, submissions, attendance, projects, certificates, mentorship participation",
    "Program delivery, learner support, assessment, certification, and cohort operations",
  ],
  [
    "Technical data",
    "IP address, browser, device type, pages viewed, cookies, approximate location, diagnostic logs",
    "Security, fraud detection, uptime, analytics, and platform performance",
  ],
  [
    "Communication data",
    "Emails, support requests, contact form messages, interview or mentoring coordination notes",
    "Responding to inquiries, resolving issues, and improving service quality",
  ],
  [
    "Professional profile data",
    "Resume details, portfolio links, LinkedIn URL, skill level, work experience, learning goals",
    "Cohort matching, learner guidance, and placement support where requested",
  ],
];

const retentionRows = [
  ["Account and profile data", "For the life of the account and up to 3 years after closure, unless a longer period is required by law"],
  ["Course records and certificates", "Up to 7 years for verification, audits, dispute handling, and certificate authenticity checks"],
  ["Payment and invoice records", "Up to 8 years to satisfy tax, accounting, and audit obligations"],
  ["Support conversations", "Up to 2 years from closure of the request"],
  ["Security and technical logs", "Generally up to 90 days, unless retained longer for incident investigation or legal compliance"],
  ["Marketing consent records", "Until consent is withdrawn, and then retained only as long as required to evidence compliance"],
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      eyebrow="Privacy Policy"
      title="Privacy for learners, clients, and visitors across every Threemates touchpoint."
      description="This policy explains what personal data Threemates collects, why we collect it, how we secure it on AWS infrastructure, how Razorpay supports payment processing, and the choices available to you under applicable Indian law."
      currentPath="/privacy-policy"
      meta={[
        { label: "Effective date", value: LEGAL_EFFECTIVE_DATE },
        { label: "Version", value: LEGAL_VERSION },
        { label: "Privacy contact", value: COMPANY_EMAIL },
        { label: "Primary infrastructure", value: "AWS Mumbai (ap-south-1) and approved supporting services" },
      ]}
      highlights={[
        {
          title: "What this covers",
          description:
            "Website visits, course inquiries, cohort enrollments, software skilling programs, AI training, support interactions, and operational communications.",
        },
        {
          title: "How we collect data",
          description:
            "Directly from forms, enrollments, and learner submissions, plus automatically through logs, cookies, and security tooling used to operate the platform.",
        },
        {
          title: "Payment processing",
          description:
            "Razorpay processes transactions. Threemates does not store full card numbers, CVV data, or bank login credentials on its own systems.",
        },
        {
          title: "Where to write to us",
          description:
            "All privacy, grievance, correction, and deletion requests can be sent to info@threemates.tech for verification and handling.",
        },
      ]}
    >
      <LegalSection
        eyebrow="Company details"
        title="Who we are and the scope of this policy"
        description={`${COMPANY_NAME} provides software development skilling, cohort-based learning, modern AI courses, and related technology services. This policy applies when you visit our website, contact our team, enroll in a program, or otherwise interact with our services.`}
      >
        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <LegalCard title="Business identity" className="pastel-blue">
            <p>
              Threemates is an India-based technology and skilling company operating from Maharashtra and Odisha. We offer software development training,
              cohort-based learning experiences, practical AI skilling, and related digital services.
            </p>
            <p>
              If you use our forms, enroll in a program, request a consultation, or communicate with our team, your interaction is governed by this policy.
            </p>
            <p>
              We do not intentionally collect Aadhaar numbers, PAN details, full card numbers, CVV values, or internet banking credentials through the website.
            </p>
          </LegalCard>

          <LegalCard title="Registered operating addresses">
            <div className="space-y-4">
              {COMPANY_LOCATIONS.map((location) => (
                <div key={location.slug} className="rounded-[1.3rem] border border-slate-200/80 bg-white/80 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-700">
                    {location.label} · {location.region}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{location.address}</p>
                </div>
              ))}
            </div>
          </LegalCard>
        </div>
      </LegalSection>

      <LegalSection
        eyebrow="Data inventory"
        title="What information we collect"
        description="We collect only the categories of personal data reasonably required to operate our website, deliver our programs, administer payments, and support learners and clients."
      >
        <LegalTable columns={["Category", "Examples", "Why we collect it"]} rows={collectionRows} />
      </LegalSection>

      <LegalSection
        eyebrow="Use of data"
        title="How we use personal data"
        description="We use personal data for disclosed, business-relevant purposes connected to service delivery, security, support, and legal compliance."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <LegalCard title="Service delivery" className="pastel-sky">
            <p>To create accounts, deliver course access, manage cohorts, schedule sessions, issue completion records, and support learner progress.</p>
          </LegalCard>
          <LegalCard title="Operations and support">
            <p>To answer inquiries, coordinate calls, troubleshoot issues, send reminders, and maintain accurate records for support, billing, and communication history.</p>
          </LegalCard>
          <LegalCard title="Security and reliability" className="pastel-blue">
            <p>To protect our website, monitor suspicious activity, detect abuse, preserve platform integrity, and investigate technical or security incidents.</p>
          </LegalCard>
          <LegalCard title="Improvement and analytics">
            <p>To understand how our website and programs are used, evaluate content effectiveness, and improve learner outcomes and platform usability.</p>
          </LegalCard>
          <LegalCard title="Compliance and recordkeeping" className="pastel-sky">
            <p>To maintain accounting, tax, audit, refund, and dispute records, and to respond where disclosure is required by applicable law or lawful process.</p>
          </LegalCard>
          <LegalCard title="Placement-related support">
            <p>Your profile or learner achievements are shared with hiring or partner organizations only when you ask for that assistance or separately consent to it.</p>
          </LegalCard>
        </div>
      </LegalSection>

      <LegalSection
        eyebrow="Infrastructure"
        title="Hosting, payments, and third-party processors"
        description="We use carefully selected service providers to run the website, store operational data, and process payments."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <LegalCard title="AWS cloud infrastructure" className="pastel-blue">
            <div className="flex items-start gap-3">
              <Server className="mt-1 h-5 w-5 text-blue-600" />
              <p>
                Our core website and application workloads may be hosted on Amazon Web Services, with AWS Mumbai (ap-south-1) used as the primary region for
                data residency in India wherever operationally feasible.
              </p>
            </div>
            <p>Relevant services may include computing, object storage, databases, CDN, logging, and backup tooling needed to keep the platform available and secure.</p>
          </LegalCard>

          <LegalCard title="Razorpay for payment processing">
            <div className="flex items-start gap-3">
              <Database className="mt-1 h-5 w-5 text-blue-600" />
              <p>
                Razorpay processes card, UPI, wallet, and net-banking transactions. We receive payment confirmations, order references, and limited billing metadata
                needed for invoicing, support, reconciliation, and refunds.
              </p>
            </div>
            <p>Razorpay&rsquo;s own terms and privacy documentation apply to the payment data it processes directly.</p>
          </LegalCard>

          <LegalCard title="Communications and other providers" className="pastel-sky">
            <div className="flex items-start gap-3">
              <Building2 className="mt-1 h-5 w-5 text-blue-600" />
              <p>
                We may use email delivery tools, analytics services, cloud monitoring, file storage, and internal collaboration tools strictly to provide our services,
                maintain uptime, and respond to users.
              </p>
            </div>
            <p>We do not sell or rent personal data to advertisers or unrelated third parties.</p>
          </LegalCard>
        </div>
      </LegalSection>

      <LegalSection
        eyebrow="Security"
        title="How we secure and retain your data"
        description="We apply technical and organizational controls designed to protect confidentiality, integrity, and availability of the information under our control."
      >
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <LegalCard title="Core security controls">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <LockKeyhole className="mt-1 h-5 w-5 text-blue-600" />
                <p>Encryption in transit using modern TLS, and encryption at rest where supported by the relevant AWS service or storage layer.</p>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 text-blue-600" />
                <p>Role-based and need-to-know access controls, internal credential management, auditability, backups, and security logging for operational systems.</p>
              </div>
              <div className="flex items-start gap-3">
                <Server className="mt-1 h-5 w-5 text-blue-600" />
                <p>Monitoring, patching, backup retention, and incident response workflows intended to reduce the risk of loss, misuse, and unauthorized access.</p>
              </div>
            </div>
          </LegalCard>

          <LegalCard title="Retention schedule" className="pastel-blue">
            <LegalTable columns={["Data type", "Typical retention"]} rows={retentionRows} />
          </LegalCard>
        </div>
      </LegalSection>

      <LegalSection
        eyebrow="Cookies and sharing"
        title="Cookies, disclosures, and your privacy choices"
        description="We use limited tracking tools to run the website, maintain sessions, understand performance, and improve service quality."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <LegalCard title="Cookies and analytics" className="pastel-sky">
            <p>Essential cookies may be used for session continuity, security, and basic website operation. Analytics cookies or scripts may be used to understand traffic and performance.</p>
            <p>You can control cookies through your browser settings, although disabling essential cookies may affect site functionality.</p>
          </LegalCard>
          <LegalCard title="When we may disclose data">
            <p>We may share personal data with service providers acting on our instructions, instructors or mentors who need learner context, or hiring partners only with your approval.</p>
            <p>We may also disclose information when required by law, lawful government request, court order, investigation, or to protect rights, safety, and platform integrity.</p>
          </LegalCard>
          <LegalCard title="Access, correction, and deletion">
            <p>You may request access to the personal data we hold about you, ask us to correct inaccuracies, withdraw consent where relevant, or request deletion subject to legal and operational retention duties.</p>
            <p>Write to <a href={`mailto:${COMPANY_EMAIL}`} className="font-medium text-blue-700 hover:text-blue-800">{COMPANY_EMAIL}</a> from your registered email address so we can verify the request before acting.</p>
          </LegalCard>
          <LegalCard title="Contact and grievance handling" className="pastel-blue">
            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 text-blue-600" />
              <p>
                For privacy concerns, complaints, or data requests, email <a href={`mailto:${COMPANY_EMAIL}`} className="font-medium text-blue-700 hover:text-blue-800">{COMPANY_EMAIL}</a> or call {COMPANY_PHONE}.
              </p>
            </div>
            <p>We aim to acknowledge verified requests promptly and resolve them within a reasonable period consistent with applicable law and operational complexity.</p>
            <p>
              General company details remain available at <Link href="/contact" className="font-medium text-blue-700 hover:text-blue-800">our contact page</Link> and on {COMPANY_WEBSITE}.
            </p>
          </LegalCard>
        </div>
      </LegalSection>
    </LegalPageShell>
  );
}