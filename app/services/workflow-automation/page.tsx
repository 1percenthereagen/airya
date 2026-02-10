"use client"

import { ServiceLayout } from "@/components/services/service-layout"
import { ServiceHero } from "@/components/services/service-hero"
import { ProcessTimeline } from "@/components/services/process-timeline"
import { ServiceContactForm } from "@/components/services/service-contact-form"
import { GlassCard } from "@/components/services/glass-card"
import { GitBranch, Database, Zap, ArrowRightLeft } from "lucide-react"

export default function WorkflowAutomationPage() {
    return (
        <ServiceLayout>
            <ServiceHero
                title="Workflow Automation"
                subtitle="End-to-End Business Logic"
                description="Eliminate manual data entry, connect disparate apps, and orchestrate complex business processes with invisible digital infrastructure."
                tags={["n8n", "Zapier", "Make", "Custom APIs"]}
            />

            {/* Problem / Solution */}
            <section className="py-24 px-6 bg-black relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="space-y-4">
                        <h3 className="text-gray-500 font-mono text-xs uppercase tracking-widest">The Problem</h3>
                        <h2 className="text-3xl font-bold text-white leading-tight">Your data is siloed and your team is copying & pasting.</h2>
                    </div>
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <GlassCard className="p-8">
                            <h4 className="text-xl font-semibold mb-4 text-white">Human Error</h4>
                            <p className="text-gray-400">Manual data transfer leads to a 4% error rate. In finance or healthcare, that's catastrophic.</p>
                        </GlassCard>
                        <GlassCard className="p-8">
                            <h4 className="text-xl font-semibold mb-4 text-white">Slow Velocity</h4>
                            <p className="text-gray-400">Waiting for a human to approve an invoice or update a CRM slows down your entire operation.</p>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-24 px-6 bg-zinc-900/10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center text-white">System Architecture</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "App Integration",
                                desc: "Connect your CRM, ERP, and Marketing tools. If it has an API, we can connect it.",
                                icon: ArrowRightLeft
                            },
                            {
                                title: "Data Pipelines",
                                desc: "Extract, Transform, Load (ETL). Move data from raw sources to dashboards automatically.",
                                icon: Database
                            },
                            {
                                title: "Event Triggers",
                                desc: "Set up complex conditional logic. 'If high-value lead signs up, create Slack channel + draft contract'.",
                                icon: GitBranch
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
                    <h2 className="text-4xl font-bold mb-16 text-center text-white">Systems in Action</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <GlassCard className="p-8">
                            <div className="mb-4">
                                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Case Study</span>
                                <h3 className="text-2xl font-bold mt-2 text-white">Logistics Company</h3>
                            </div>
                            <p className="text-gray-400 text-lg">Automated order processing from email &rarr; ERP &rarr; Warehouse. Reduced order processing time from <span className="text-white font-semibold">2 days to 30 seconds</span>.</p>
                        </GlassCard>
                        <GlassCard className="p-8">
                            <div className="mb-4">
                                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Case Study</span>
                                <h3 className="text-2xl font-bold mt-2 text-white">Marketing Agency</h3>
                            </div>
                            <p className="text-gray-400 text-lg">Built a unified dashboard that pulls live data from Meta, Google, and TikTok Ads, saving account managers <span className="text-white font-semibold">15 hours/week</span> on reporting.</p>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* Pricing Note */}
            <section className="py-12 px-6 bg-black text-center border-t border-white/5">
                <p className="text-gray-500 uppercase tracking-widest text-sm mb-4">Investment</p>
                <p className="text-3xl font-light text-white">Custom Workflows start from <span className="text-white font-semibold">$1,499</span></p>
            </section>

            <ServiceContactForm serviceName="Workflow Automation" />
        </ServiceLayout>
    )
}
