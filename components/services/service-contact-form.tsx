"use client"

import { useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { GlassCard } from "./glass-card"

interface ServiceContactFormProps {
    serviceName: string
}

export function ServiceContactForm({ serviceName }: ServiceContactFormProps) {
    const [state, handleSubmit] = useForm("mkozdkqq") // Using the ID from previous task

    if (state.succeeded) {
        return (
            <GlassCard className="py-20 text-center">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Request Received</h3>
                <p className="text-gray-400">
                    We'll be in touch shortly to discuss your <br />
                    <span className="text-white font-medium">{serviceName}</span> project.
                </p>
            </GlassCard>
        )
    }

    return (
        <section id="contact" className="py-24 px-6 bg-black">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to start?
                    </h2>
                    <p className="text-gray-400">
                        Tell us about your project. No commitment required.
                    </p>
                </div>

                <GlassCard className="p-8 md:p-12">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Hidden Field for Context */}
                        <input type="hidden" name="service_interest" value={serviceName} />
                        <input type="hidden" name="subject" value={`New Inquiry: ${serviceName}`} />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all font-light"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Work Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all font-light"
                                    placeholder="john@company.com"
                                />
                                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="company" className="text-sm font-medium text-gray-400 ml-1">Company (Optional)</label>
                            <input
                                id="company"
                                type="text"
                                name="company"
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all font-light"
                                placeholder="Company Ltd."
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Project Details</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all font-light resize-none"
                                placeholder={`Tell us about your ${serviceName.toLowerCase()} goals...`}
                            />
                            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs" />
                        </div>

                        <Button
                            type="submit"
                            disabled={state.submitting}
                            size="lg"
                            className="w-full bg-white text-black hover:bg-gray-200 rounded-xl py-6 text-base font-medium transition-transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {state.submitting ? "Sending..." : "Request Consultation"}
                            {!state.submitting && <ArrowRight className="ml-2 w-4 h-4" />}
                        </Button>
                    </form>
                </GlassCard>
            </div>
        </section>
    )
}
