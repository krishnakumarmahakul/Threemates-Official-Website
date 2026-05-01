import { NextRequest, NextResponse } from "next/server";
import { COMPANY_EMAIL } from "@/constants/site";
import { resend } from "@/lib/resend";
import { ThankYouEmail } from "@/emails/thank-you";
import { ContactNotificationEmail } from "@/emails/contact-notification";

const TEAM_EMAIL = COMPANY_EMAIL;

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, company, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Please provide a valid email address." },
                { status: 400 }
            );
        }

        // Send both emails concurrently
        const [notificationResult, thankYouResult] = await Promise.allSettled([
            // 1. Notification email to the team
            resend.emails.send({
                from: "Threemates <onboarding@resend.dev>",
                to: [TEAM_EMAIL],
                subject: `New Inquiry from ${name}${company ? ` (${company})` : ""}`,
                html: ContactNotificationEmail({ name, email, phone, company, message }),
                replyTo: email,
            }),

            // 2. Thank-you email to the person who submitted
            resend.emails.send({
                from: "Threemates <onboarding@resend.dev>",
                to: [email],
                subject: "Thank you for contacting Threemates! 🚀",
                html: ThankYouEmail({ message }),
            }),
        ]);

        // Check results
        const notificationOk = notificationResult.status === "fulfilled";
        const thankYouOk = thankYouResult.status === "fulfilled";

        if (!notificationOk) {
            console.error("Failed to send notification email:", notificationResult.status === "rejected" ? notificationResult.reason : "Unknown");
        }
        if (!thankYouOk) {
            console.error("Failed to send thank-you email:", thankYouResult.status === "rejected" ? thankYouResult.reason : "Unknown");
        }

        if (!notificationOk && !thankYouOk) {
            return NextResponse.json(
                { error: "Failed to send emails. Please try again later." },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Your message has been sent successfully!",
        });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Something went wrong. Please try again later." },
            { status: 500 }
        );
    }
}
