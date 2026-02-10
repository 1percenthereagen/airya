"use client"

import { ServiceLayout } from "@/components/services/service-layout"
import { ServiceHero } from "@/components/services/service-hero"
import { ProcessTimeline } from "@/components/services/process-timeline"
import { ServiceContactForm } from "@/components/services/service-contact-form"
import { GlassCard } from "@/components/services/glass-card"
import { TrendingUp, Target, Search, BarChart3 } from "lucide-react"

export default function GrowthMarketingPage() {
    return (
        <ServiceLayout>
            <ServiceHero
                title="Growth & Marketing"
                subtitle="Data-Driven Revenue Engines"
                description="Stop guessing. We build scalable marketing infrastructure that attracts, nurtures, and converts high-value leads on autopilot."
                tags={["SEO", "PPC", "CRM", "Analytics", "Automation"]}
            />

            {/* Problem / Solution */}
            <section className="py-24 px-6 bg-black relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="space-y-4">
                        <h3 className="text-gray-500 font-mono text-xs uppercase tracking-widest">The Problem</h3>
                        <h2 className="text-3xl font-bold text-white leading-tight">You're burning cash on ads that don't convert.</h2>
                    </div>
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <GlassCard className="p-8">
                            <h4 className="text-xl font-semibold mb-4 text-white">Broken Funnels</h4>
                            <p className="text-gray-400">Traffic is vanity, conversion is sanity. If your landing page doesn't sell, your ads are worthless.</p>
                        </GlassCard>
                        <GlassCard className="p-8">
                            <h4 className="text-xl font-semibold mb-4 text-white">Attribution Blindness</h4>
                            <p className="text-gray-400">You don't know which channel is working, so you can't scale the winners or cut the losers.</p>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-24 px-6 bg-zinc-900/10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center text-white">Growth Systems</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Performance SEO",
                                desc: "Rank for high-intent keywords. We focus on technical SEO and content that drives revenue, not just clicks.",
                                icon: Search
                            },
                            {
                                title: "Marketing Automation",
                                desc: "Nurture leads while you sleep. Automated email sequences and SMS follow-ups that increase LTV.",
                                icon: Target
                            },
                            {
                                title: "Analytics & Reporting",
                                desc: "Unified dashboards that show you exactly where every dollar is going and what every lead costs.",
                                icon: BarChart3
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
                    <h2 className="text-4xl font-bold mb-16 text-center text-white">Measurable ROI</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <GlassCard className="p-8">
                            <div className="mb-4">
                                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Case Study</span>
                                <h3 className="text-2xl font-bold mt-2 text-white">B2B SaaS</h3>
                            </div>
                            <p className="text-gray-400 text-lg">Restructured their paid acquisition funnel and implemented improved tracking. Reduced Cost Per Lead (CPL) by <span className="text-white font-semibold">50%</span> while doubling lead volume.</p>
                        </GlassCard>
                        <GlassCard className="p-8">
                            <div className="mb-4">
                                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Case Study</span>
                                <h3 className="text-2xl font-bold mt-2 text-white">Local Service Business</h3>
                            </div>
                            <p className="text-gray-400 text-lg">Implemented a "Speed to Lead" automation system. Leads are now contacted within 2 minutes of inquiry. Conversion rate increased from 5% to <span className="text-white font-semibold">18%</span>.</p>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* Pricing Note */}
            <section className="py-12 px-6 bg-black text-center border-t border-white/5">
                <p className="text-gray-500 uppercase tracking-widest text-sm mb-4">Investment</p>
                <p className="text-3xl font-light text-white">Growth Systems start from <span className="text-white font-semibold">$999/mo</span></p>
            </section>

            <ServiceContactForm serviceName="Growth & Marketing" />
        </ServiceLayout>
    )
}
