import type { Metadata } from "next";
import { AlertTriangle, BadgeCheck, DatabaseZap, Fingerprint, Globe2, HeartHandshake, Lock, Mail, ShieldCheck, UserCheck, Users } from "lucide-react";
import {
  COMPANY_EMAIL,
  COMPANY_LOCATIONS,
  COMPANY_NAME,
  LEGAL_EFFECTIVE_DATE,
  LEGAL_VERSION,
} from "@/constants/site";
import { LegalCard, LegalPageShell, LegalSection, LegalTable } from "@/components/legal/LegalPageShell";

export const metadata: Metadata = {
  title: "DPDP Compliance",
  description:
    "Understand how Threemates aligns its data handling practices with the Digital Personal Data Protection Act, 2023, including user rights and security controls.",
  alternates: { canonical: "/dpdp-compliance" },
  openGraph: {
    title: "DPDP Compliance | Threemates",
    description:
      "Threemates' DPDP-aligned approach to notice, consent, security, retention, grievance handling, and Data Principal rights.",
    url: "/dpdp-compliance",
    type: "website",
  },
  twitter: {
    title: "DPDP Compliance | Threemates",
    description:
      "Threemates' DPDP-aligned approach to notice, consent, security, retention, grievance handling, and Data Principal rights.",
  },
};

const processingRows = [
  [
    "Account setup and course delivery",
    "Identity, contact, learner profile, progress data",
    "Notice-based processing connected to the service requested by the user",
  ],
  [
    "Payments, invoicing, refunds",
    "Billing data, transaction references, order details",
    "Processing required to complete the purchase and meet accounting, tax, and recordkeeping duties",
  ],
  [
    "Mentoring, support, and learner success",
    "Messages, assignments, session history, support requests",
    "Use consistent with the stated purpose for service delivery and problem resolution",
  ],
  [
    "Marketing updates and launch announcements",
    "Email address, communication preferences",
    "Separate opt-in consent, with unsubscribe and withdrawal controls",
  ],
  [
    "Placement or profile sharing with hiring partners",
    "Resume, profile details, portfolio links, achievements",
    "Separate and explicit consent before any external sharing",
  ],
  [
    "Security monitoring and fraud prevention",
    "IP address, device data, logs, access events",
    "Permitted processing for platform security, abuse prevention, and protection of services and users",
  ],
];

const rightsCards = [
  {
    title: "Right to access",
    description: "You may ask for a summary of the personal data we hold about you and the purposes for which it is being used.",
  },
  {
    title: "Right to correction",
    description: "You may request correction or completion of inaccurate, outdated, or incomplete personal data.",
  },
  {
    title: "Right to erasure",
    description: "You may request deletion of data that is no longer necessary, subject to retention requirements imposed by law or legitimate operational needs.",
  },
  {
    title: "Right to grievance redressal",
    description: "You may escalate complaints through our privacy contact channel if you believe your personal data has been mishandled.",
  },
  {
    title: "Right to withdraw consent",
    description: "Where processing is based on consent, you may withdraw it. Some core services may stop if the withdrawn consent is essential to deliver them.",
  },
  {
    title: "Right to nominate",
    description: "You may write to us to record a nominee request or authorized representative request, subject to verification and any rule-based requirements that apply.",
  },
];

export default function DpdpCompliancePage() {
  return (
    <LegalPageShell
      eyebrow="DPDP Compliance"
      title="Data protection, consent, and integrity controls aligned to India's DPDP framework."
      description="This page explains how Threemates approaches privacy governance, notice, consent management, security controls, grievance handling, and user rights in line with the Digital Personal Data Protection Act, 2023 and related obligations."
      currentPath="/dpdp-compliance"
      meta={[
        { label: "Effective date", value: LEGAL_EFFECTIVE_DATE },
        { label: "Version", value: LEGAL_VERSION },
        { label: "Compliance contact", value: COMPANY_EMAIL },
        { label: "Primary data residency", value: "India-first hosting with AWS Mumbai as primary region where feasible" },
      ]}
      highlights={[
        {
          title: "Our role",
          description:
            "Threemates acts as the Data Fiduciary for the personal data it collects through the website, learner workflows, and operational processes it controls.",
        },
        {
          title: "Service providers",
          description:
            "Cloud, payment, communications, and analytics providers act as processors or service providers to support the purposes disclosed to users.",
        },
        {
          title: "Rights handling",
          description:
            "Verified requests for access, correction, deletion, withdrawal, grievance, and nominee handling can be sent to info@threemates.tech.",
        },
        {
          title: "Security focus",
          description:
            "Controls are designed around confidentiality, integrity, availability, incident response, least privilege, and auditable handling of sensitive workflows.",
        },
      ]}
    >
      <LegalSection
        eyebrow="Governance"
        title="How Threemates approaches DPDP compliance"
        description={`${COMPANY_NAME} provides digital services and learning programs, so it handles personal data as part of onboarding, payments, course delivery, support, and security operations. We aim to collect the minimum data reasonably needed for those purposes and to explain those uses clearly before or at the point of collection.`}
      >
        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <LegalCard title="Data Fiduciary role" className="pastel-blue">
            <div className="flex items-start gap-3">
              <BadgeCheck className="mt-1 h-5 w-5 text-blue-600" />
              <p>For personal data collected through our site and services, Threemates determines the purpose and means of processing and is therefore the primary accountable entity for those activities.</p>
            </div>
            <p>Third-party tools such as AWS and Razorpay support hosting, payment, and operations under their own contractual and legal obligations.</p>
          </LegalCard>

          <LegalCard title="Operating locations and contact">
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
            <p>
              Until a separate grievance address is published, all privacy and DPDP matters can be sent to <a href={`mailto:${COMPANY_EMAIL}`} className="font-medium text-blue-700 hover:text-blue-800">{COMPANY_EMAIL}</a>.
            </p>
          </LegalCard>
        </div>
      </LegalSection>

      <LegalSection
        eyebrow="Purpose and lawful handling"
        title="Processing contexts and compliance basis"
        description="We align data processing with the notice presented to the user, the service requested by the user, consent where required, legal obligations, and other purposes permitted under applicable law."
      >
        <LegalTable columns={["Processing activity", "Typical data involved", "How the processing is justified"]} rows={processingRows} />
      </LegalSection>

      <LegalSection
        eyebrow="Data Principal rights"
        title="Rights available to users under our DPDP handling process"
        description="If you are the individual to whom the personal data relates, you can exercise the following rights by writing to us from a verifiable email address or by providing enough detail for us to confirm identity."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {rightsCards.map((item, index) => (
            <LegalCard
              key={item.title}
              title={item.title}
              className={index % 3 === 0 ? "pastel-blue" : index % 3 === 1 ? "pastel-sky" : undefined}
            >
              <p>{item.description}</p>
            </LegalCard>
          ))}
        </div>
      </LegalSection>

      <LegalSection
        eyebrow="Consent and notice"
        title="How consent is collected, logged, and withdrawn"
        description="Where consent is the appropriate basis, it should be specific, informed, and easy to withdraw. Our goal is to separate essential processing from optional communications or sharing."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <LegalCard title="Notice at collection" className="pastel-sky">
            <div className="flex items-start gap-3">
              <Fingerprint className="mt-1 h-5 w-5 text-blue-600" />
              <p>Forms and registration flows should identify the category of data being collected, the purpose of collection, and the contact path for privacy questions before submission wherever practicable.</p>
            </div>
          </LegalCard>
          <LegalCard title="Optional uses require choice">
            <div className="flex items-start gap-3">
              <HeartHandshake className="mt-1 h-5 w-5 text-blue-600" />
              <p>Marketing communication opt-ins, hiring-profile sharing, or similar non-essential uses should be presented as separate choices rather than bundled into mandatory access terms.</p>
            </div>
          </LegalCard>
          <LegalCard title="Withdrawal of consent">
            <div className="flex items-start gap-3">
              <UserCheck className="mt-1 h-5 w-5 text-blue-600" />
              <p>Users may withdraw optional consent by emailing <a href={`mailto:${COMPANY_EMAIL}`} className="font-medium text-blue-700 hover:text-blue-800">{COMPANY_EMAIL}</a> or by using any unsubscribe option included in marketing messages.</p>
            </div>
          </LegalCard>
          <LegalCard title="Audit trail and records" className="pastel-blue">
            <p>Where operationally implemented, we retain records of consent status, timestamps, relevant workflow context, and request outcomes so we can demonstrate compliance if challenged.</p>
          </LegalCard>
        </div>
      </LegalSection>

      <LegalSection
        eyebrow="Integrity and security"
        title="Controls used to protect confidentiality, integrity, and availability"
        description="Data integrity is not only about secrecy. It also requires accuracy, controlled changes, dependable backups, and quick response to unauthorized activity."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <LegalCard title="Access control" className="pastel-blue">
            <div className="flex items-start gap-3">
              <Lock className="mt-1 h-5 w-5 text-blue-600" />
              <p>Internal access is restricted to personnel with a legitimate operational need, and privileged actions should be limited, logged, and periodically reviewed.</p>
            </div>
          </LegalCard>
          <LegalCard title="Security monitoring">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 text-blue-600" />
              <p>We use logging, alerting, and operational monitoring to detect suspicious activity, failed access attempts, service instability, and signals of abuse or compromise.</p>
            </div>
          </LegalCard>
          <LegalCard title="Backups and recoverability" className="pastel-sky">
            <div className="flex items-start gap-3">
              <DatabaseZap className="mt-1 h-5 w-5 text-blue-600" />
              <p>Backups, version history, and recovery procedures help reduce the risk of accidental loss, corruption, or destructive change to production data.</p>
            </div>
          </LegalCard>
          <LegalCard title="Data quality and correction">
            <p>When a verified user identifies inaccurate information, we aim to correct it promptly in source systems or the next controlled update cycle, subject to evidence and lawful recordkeeping obligations.</p>
          </LegalCard>
          <LegalCard title="Incident response" className="pastel-blue">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-1 h-5 w-5 text-blue-600" />
              <p>If a personal data breach is confirmed, we will investigate, contain the issue, document impact, and notify affected users and authorities where required by applicable law.</p>
            </div>
          </LegalCard>
          <LegalCard title="Periodic improvement">
            <p>Security and privacy measures evolve with product changes, threat patterns, vendor capabilities, and legal guidance. We may update controls and this page as those expectations mature.</p>
          </LegalCard>
        </div>
      </LegalSection>

      <LegalSection
        eyebrow="Special situations"
        title="Children's data, cross-border handling, and grievance path"
        description="Some situations need extra care, particularly for minors, external processors, and complaints about data handling."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <LegalCard title="Children's data" className="pastel-sky">
            <div className="flex items-start gap-3">
              <Users className="mt-1 h-5 w-5 text-blue-600" />
              <p>If a learner is under 18, parent or guardian involvement may be required before enrollment or continued participation, depending on the service flow and legal requirements in force.</p>
            </div>
            <p>We do not intentionally use children&rsquo;s data for behavioral advertising or unrelated profiling.</p>
          </LegalCard>
          <LegalCard title="Cross-border processing" className="pastel-blue">
            <div className="flex items-start gap-3">
              <Globe2 className="mt-1 h-5 w-5 text-blue-600" />
              <p>Our preferred approach is India-first data residency. If limited cross-border processing occurs through a vendor feature, backup path, or support workflow, it should be subject to lawful restrictions and vendor safeguards.</p>
            </div>
          </LegalCard>
          <LegalCard title="Grievance channel">
            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 text-blue-600" />
              <p>Send complaints or rights requests to <a href={`mailto:${COMPANY_EMAIL}`} className="font-medium text-blue-700 hover:text-blue-800">{COMPANY_EMAIL}</a> with a clear subject such as DPDP Rights Request or Privacy Grievance and enough information for verification.</p>
            </div>
            <p>We aim to acknowledge genuine requests promptly and resolve them within a reasonable time consistent with applicable law and the complexity of the matter.</p>
          </LegalCard>
        </div>
      </LegalSection>
    </LegalPageShell>
  );
}