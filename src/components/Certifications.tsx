"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ExternalLink } from "lucide-react";

interface CertificationsProps {
  data: {
    badge: string;
    title: string;
    description: string;
    partners: Array<{
      name: string;
      description: string;
      benefits: string[];
      logoLight: string;
      url: string;
    }>;
    certifications: Array<{
      title: string;
      description: string;
    }>;
  };
}

// Microsoft Logo SVG Component
function MicrosoftLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 139 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0, 0)">
        <rect width="23" height="23" y="0" fill="#F25022"/>
        <rect width="23" height="23" x="28" y="0" fill="#7FBA00"/>
        <rect width="23" height="23" y="28" fill="#00A4EF"/>
        <rect width="23" height="23" x="28" y="28" fill="#FFB900"/>
        <text x="62" y="22" fontFamily="Segoe UI, system-ui, sans-serif" fontSize="16" fontWeight="600" fill="currentColor">Microsoft</text>
      </g>
    </svg>
  );
}

// Claude Logo SVG Component
function ClaudeLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 139 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="claudeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4A574"/>
          <stop offset="100%" stopColor="#8B6914"/>
        </linearGradient>
      </defs>
      <g transform="translate(0, 2)">
        <path d="M15 2L29 34H1L15 2Z" fill="url(#claudeGrad)"/>
        <path d="M15 8L23 26H7L15 8Z" fill="white" fillOpacity="0.3"/>
        <rect x="8" y="18" width="14" height="5" fill="white" fillOpacity="0.5"/>
      </g>
      <text x="38" y="26" fontFamily="Inter, system-ui, sans-serif" fontSize="20" fontWeight="700" fill="#A67C52">Claude</text>
      <text x="107" y="26" fontFamily="Inter, system-ui, sans-serif" fontSize="10" fontWeight="400" fill="#8B6914" opacity="0.7">by Anthropic</text>
    </svg>
  );
}

const LogoComponents: Record<string, React.ComponentType<{ className?: string }>> = {
  "/assets/microsoft-logo.svg": MicrosoftLogo,
  "/assets/claude-logo.svg": ClaudeLogo,
};

export function Certifications({ data }: CertificationsProps) {
  return (
    <section className="py-16 md:py-28 px-4 md:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <Badge variant="outline" className="rounded-full mb-4 md:mb-6 shadow-soft">
            {data.badge}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {data.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Partner Logos with Benefits */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {data.partners.map((partner, index) => {
            const LogoComponent = LogoComponents[partner.logoLight];
            return (
              <Card
                key={index}
                className="border shadow-soft card-hover rounded-3xl overflow-hidden group"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      {LogoComponent ? (
                        <LogoComponent className="h-10 w-auto text-foreground" />
                      ) : (
                        <img
                          src={partner.logoLight}
                          alt={`${partner.name} Logo`}
                          className="h-10 w-auto"
                        />
                      )}
                    </div>
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  <p className="text-sm text-muted-foreground mb-5 font-medium">
                    {partner.description}
                  </p>

                  <div className="space-y-2.5">
                    {partner.benefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-sm"
                      >
                        <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        <span className="text-foreground/80">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Certifications */}
        <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
          {data.certifications.map((cert, i) => (
            <Card
              key={i}
              className="border shadow-soft rounded-2xl overflow-hidden"
            >
              <CardContent className="p-5 md:p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.09 5.1 7.63 12 4.18zM4 8.82l7 3.5v7.36l-7-3.5V8.82zm9 10.86v-7.36l7-3.5v7.36l-7 3.5z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-base mb-1">{cert.title}</h4>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}