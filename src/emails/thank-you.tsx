import { COMPANY_EMAIL } from "@/constants/site";

interface ThankYouEmailProps {
  message: string;
}

export function ThankYouEmail({ message }: ThankYouEmailProps) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank You - Threemates</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
          
          <!-- Header with Logo -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #3b82f6 100%); padding: 40px 40px 32px; text-align: center;">
              <img 
                src="https://threemates.tech/assets/describedLogo.png" 
                alt="Threemates" 
                width="200" 
                style="display:block;margin:0 auto;max-width:200px;height:auto;" 
              />
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              
              <!-- Greeting -->
              <h1 style="margin:0 0 8px;font-size:24px;font-weight:700;color:#0f172a;">
                Thank you for your time! 🎉
              </h1>
              <p style="margin:0 0 24px;font-size:16px;color:#64748b;line-height:1.6;">
                We've received your message and appreciate you reaching out. Our team will be getting back to you soon.
              </p>

              <!-- Divider -->
              <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0;" />

              <!-- Message Recap -->
              <p style="margin:0 0 8px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#94a3b8;">
                Your Message
              </p>
              <div style="background-color:#f8fafc;border-left:4px solid #2563eb;border-radius:0 8px 8px 0;padding:16px 20px;margin:0 0 32px;">
                <p style="margin:0;font-size:14px;color:#334155;line-height:1.7;white-space:pre-wrap;">${message}</p>
              </div>

              <!-- What's Next -->
              <h2 style="margin:0 0 16px;font-size:18px;font-weight:700;color:#0f172a;">What happens next?</h2>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:8px 0;vertical-align:top;width:36px;">
                    <div style="width:28px;height:28px;background:#eff6ff;border-radius:50%;text-align:center;line-height:28px;font-size:13px;font-weight:700;color:#2563eb;">1</div>
                  </td>
                  <td style="padding:8px 0 8px 12px;">
                    <p style="margin:0;font-size:14px;color:#334155;line-height:1.5;"><strong>Review</strong> — Our team reviews your project requirements</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;vertical-align:top;width:36px;">
                    <div style="width:28px;height:28px;background:#eff6ff;border-radius:50%;text-align:center;line-height:28px;font-size:13px;font-weight:700;color:#2563eb;">2</div>
                  </td>
                  <td style="padding:8px 0 8px 12px;">
                    <p style="margin:0;font-size:14px;color:#334155;line-height:1.5;"><strong>Connect</strong> — We'll schedule a call to discuss details</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;vertical-align:top;width:36px;">
                    <div style="width:28px;height:28px;background:#eff6ff;border-radius:50%;text-align:center;line-height:28px;font-size:13px;font-weight:700;color:#2563eb;">3</div>
                  </td>
                  <td style="padding:8px 0 8px 12px;">
                    <p style="margin:0;font-size:14px;color:#334155;line-height:1.5;"><strong>Propose</strong> — You'll receive a tailored proposal</p>
                  </td>
                </tr>
              </table>

              <!-- CTA Button -->
              <div style="text-align:center;margin:32px 0 0;">
                <a href="https://threemates.tech" style="display:inline-block;background-color:#2563eb;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;padding:14px 36px;border-radius:50px;box-shadow:0 4px 12px rgba(37,99,235,0.3);">
                  Visit Our Website
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f8fafc;padding:28px 40px;border-top:1px solid #e2e8f0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#0f172a;">Threemates</p>
                    <p style="margin:0;font-size:12px;color:#94a3b8;">Modern IT Solutions & Software Development</p>
                  </td>
                  <td align="right" style="vertical-align:top;">
                    <p style="margin:0;font-size:12px;color:#94a3b8;">Bhubaneswar, Odisha, India</p>
                  </td>
                </tr>
              </table>
              <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0;" />
              <p style="margin:0;font-size:11px;color:#cbd5e1;text-align:center;">
                © ${new Date().getFullYear()} Threemates. All rights reserved.<br />
                <a href="https://threemates.tech" style="color:#94a3b8;text-decoration:underline;">threemates.tech</a>&nbsp;&nbsp;•&nbsp;&nbsp;
                <a href="mailto:${COMPANY_EMAIL}" style="color:#94a3b8;text-decoration:underline;">${COMPANY_EMAIL}</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
