"use client";

import { useState, FormEvent } from "react";
import { ArrowUpRight, Loader2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormField {
    name: string;
    label: string;
    placeholder: string;
    type: string;
}

interface ContactFormProps {
    title: string;
    fields: FormField[];
    submitBtn: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm({ title, fields, submitBtn }: ContactFormProps) {
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = useState<Record<string, string>>(
        Object.fromEntries(fields.map((f) => [f.name, ""]))
    );

    const handleChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            setStatus("success");
            setFormData(Object.fromEntries(fields.map((f) => [f.name, ""])));
        } catch (err: any) {
            setStatus("error");
            setErrorMessage(err.message || "Failed to send message. Please try again.");
        }
    };

    if (status === "success") {
        return (
            <div className="soft-panel flex min-h-[420px] flex-col items-center justify-center p-8 text-center md:p-12">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="mb-3 font-display text-3xl font-semibold tracking-[-0.04em] text-foreground">Message Sent!</h2>
                <p className="mb-8 max-w-sm text-sm leading-7 text-muted-foreground sm:text-base">
                    Thank you for reaching out. We&apos;ve sent a confirmation to your email. Our team will get back to you within 24 hours.
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="site-button px-5 py-3"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <div className="soft-panel p-6 sm:p-8 md:p-10">
            <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                    <span className="section-badge">New project</span>
                    <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-foreground">{title}</h2>
                </div>
                <div className="hidden h-11 w-11 items-center justify-center rounded-full bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-medium sm:inline-flex">
                    <ArrowUpRight className="h-5 w-5" />
                </div>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
                {fields.map((field, index) => (
                    <div
                        key={index}
                        className={cn("space-y-2", field.type === "textarea" && "sm:col-span-2")}
                    >
                        <label htmlFor={field.name} className="text-sm font-medium text-muted-foreground">
                            {field.label}
                        </label>
                        {field.type === "textarea" ? (
                            <textarea
                                id={field.name}
                                name={field.name}
                                placeholder={field.placeholder}
                                rows={5}
                                value={formData[field.name] || ""}
                                onChange={(e) => handleChange(field.name, e.target.value)}
                                required={field.name !== "company"}
                                className="min-h-[170px] w-full resize-none rounded-[1.5rem] border border-slate-200 bg-slate-50/85 px-4 py-4 text-foreground transition-all placeholder:text-muted-foreground/50 focus:border-blue-400/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-200/70"
                            />
                        ) : (
                            <input
                                type={field.type}
                                id={field.name}
                                name={field.name}
                                placeholder={field.placeholder}
                                value={formData[field.name] || ""}
                                onChange={(e) => handleChange(field.name, e.target.value)}
                                required={field.name !== "company"}
                                className="w-full rounded-full border border-slate-200 bg-slate-50/85 px-4 py-3.5 text-foreground transition-all placeholder:text-muted-foreground/50 focus:border-blue-400/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-200/70"
                            />
                        )}
                    </div>
                ))}

                {/* Error message */}
                {status === "error" && errorMessage && (
                    <div className="rounded-[1.25rem] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 sm:col-span-2">
                        {errorMessage}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={status === "loading"}
                    className={cn(
                        "site-button mt-2 flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-base sm:col-span-2",
                        status === "loading" && "opacity-80 cursor-not-allowed"
                    )}
                >
                    {status === "loading" ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            {submitBtn}
                            <ArrowUpRight className="w-5 h-5" />
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
