"use client"

import { ServiceLayout } from "@/components/services/service-layout"
import { ServiceHero } from "@/components/services/service-hero"
import { ProcessTimeline } from "@/components/services/process-timeline"
import { ServiceContactForm } from "@/components/services/service-contact-form"
import { GlassCard } from "@/components/services/glass-card"
import { Check, Zap, Bot, MessageSquare, Phone } from "lucide-react"

export default function AIAutomationPage() {
    return (
        <ServiceLayout>
            <ServiceHero
                title="AI Agents & Automation"
                subtitle="Your 24/7 Digital Workforce"
                description="Deploy autonomous agents that handle sales, support, and operations with human-like intelligence. Stop trading time for money."
                tags={["Chatbots", "Voice AI", "Auto-Scheduling", "RAG Systems"]}
            />

            {/* Problem / Solution */}
            <section className="py-24 px-6 bg-black relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="space-y-4">
                        <h3 className="text-gray-500 font-mono text-xs uppercase tracking-widest">The Problem</h3>
                        <h2 className="text-3xl font-bold text-white leading-tight">Your team is burnt out on repetitive tasks.</h2>
                    </div>
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <GlassCard className="p-8">
                            <h4 className="text-xl font-semibold mb-4 text-white">Missed Revenue</h4>
                            <p className="text-gray-400">70% of leads go cold because they aren't contacted within 5 minutes. Humans sleep; AI doesn't.</p>
                        </GlassCard>
                        <GlassCard className="p-8">
                            <h4 className="text-xl font-semibold mb-4 text-white">Operational Drag</h4>
                            <p className="text-gray-400">Customer support and scheduling consume valuable hours that should be spent on strategy.</p>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-24 px-6 bg-zinc-900/10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center text-white">What We Build</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "AI Sales Agents",
                                desc: "Qualify leads, answer FAQs, and book meetings directly into your calendar via SMS, WhatsApp, or Webchat.",
                                icon: MessageSquare
                            },
                            {
                                title: "Voice Receptionists",
                                desc: "Human-sounding voice AI that handles inbound calls, routes transfers, and takes messages 24/7.",
                                icon: Phone
                            },
                            {
                                title: "Internal Ops Agents",
                                desc: "Automate research, data entry, and report generation. Give your team superpowers.",
                                icon: Bot
                            }
                        ].map((item, i) => (
                            <GlassCard key={i} className="p-8">
                                <item.icon className="w-10 h-10 text-white mb-6 opacity-80" />
                                <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            <ProcessTimeline />

            {/* Use Cases */}
            <section className="py-24 px-6 bg-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center text-white">Real World Impact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <GlassCard className="p-8">
                            <div className="mb-4">
                                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Case Study</span>
                                <h3 className="text-2xl font-bold mt-2 text-white">Real Estate Agency</h3>
                            </div>
                            <p className="text-gray-400 text-lg">Implemented an AI SMS agent that revived 5,000 cold leads, resulting in <span className="text-white font-semibold">$450k in pipeline value</span> in just 30 days.</p>
                        </GlassCard>
                        <GlassCard className="p-8">
                            <div className="mb-4">
                                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Case Study</span>
                                <h3 className="text-2xl font-bold mt-2 text-white">Law Firm</h3>
                            </div>
                            <p className="text-gray-400 text-lg">Deployed a 24/7 Voice Receptionist to screen calls and schedule consultations, saving the front desk <span className="text-white font-semibold">20 hours/week</span>.</p>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* Pricing Note */}
            <section className="py-12 px-6 bg-black text-center border-t border-white/5">
                <p className="text-gray-500 uppercase tracking-widest text-sm mb-4">Investment</p>
                <p className="text-3xl font-light text-white">Custom Agents start from <span className="text-white font-semibold">$1,999</span></p>
                <p className="text-sm text-gray-600 mt-2">Final pricing depends on complexity, integrations, and usage.</p>
            </section>

            <ServiceContactForm serviceName="AI Automation" />
        </ServiceLayout>
    )
}
