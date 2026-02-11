"use client"

import { ServiceLayout } from "@/components/services/service-layout"
import { WebShowcase } from "@/components/services/web/web-showcase"
import { ProcessTimeline, Step } from "@/components/services/process-timeline"
import { ServiceContactForm } from "@/components/services/service-contact-form"
import { GlassCard } from "@/components/services/glass-card"
import { Check, Code2, Globe, Layout, Database, Server, Smartphone, Zap, ArrowUpRight } from "lucide-react"

export default function WebSaasDevelopmentPage() {
    const processSteps: Step[] = [
        {
            title: "Discovery & Requirements",
            description: "We understand your goals, users, and technical constraints.",
            icon: "01"
        },
        {
            title: "Architecture & UX Planning",
            description: "We define structure, user flows, and system design before development.",
            icon: "02"
        },
        {
            title: "Development",
            description: "We build the solution using modern frameworks and clean code practices.",
            icon: "03"
        },
        {
            title: "Testing & Optimization",
            description: "Performance, responsiveness, and cross-browser testing.",
            icon: "04"
        },
        {
            title: "Launch & Iteration",
            description: "Deployment, monitoring, and optional ongoing improvements.",
            icon: "05"
        }
    ]

    return (
        <ServiceLayout>
            <WebShowcase />

            {/* Services List */}
            <section className="py-24 px-6 bg-black relative overflow-hidden">
                {/* Subtle Background Gradient match Landing Page */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black z-0 pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tighter text-white mb-6">Custom Web Development for Modern Businesses</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto font-mono text-sm leading-relaxed">
                            We build custom web solutions tailored to business requirements, not generic templates.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            "Custom Website Development",
                            "Web Application Development",
                            "Frontend & Full-Stack",
                            "API-Driven & Integrated Apps",
                            "Performance-Focused & SEO-Ready"
                        ].map((service, i) => (
                            <GlassCard key={i} className="p-6 flex items-center justify-center text-center hover:bg-white/[0.05] transition-colors border-white/5">
                                <span className="text-gray-300 font-light tracking-wide">{service}</span>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Problems Solved */}
            <section className="py-24 px-6 bg-zinc-900/10 relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h3 className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-4">The Challenge</h3>
                        <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-white mb-6 leading-tight">Many businesses struggle with...</h2>
                        <div className="space-y-6">
                            {[
                                "Slow or poorly optimized websites",
                                "Websites that cannot scale with business growth",
                                "Limited flexibility due to rigid templates",
                                "Disconnected systems and manual workflows"
                            ].map((problem, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-gray-500 text-xs">✕</span>
                                    </div>
                                    <p className="text-gray-400 text-lg leading-relaxed font-light">{problem}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-white/10 to-transparent p-1 rounded-3xl">
                        <div className="bg-black/80 backdrop-blur-xl p-8 rounded-[22px] border border-white/10">
                            <h3 className="text-2xl font-light tracking-tight text-white mb-4">The Solution</h3>
                            <p className="text-gray-400 leading-relaxed mb-6 font-light">
                                We solve these by building structured web solutions that are flexible, fast, and easy to evolve.
                            </p>
                            <div className="flex items-center gap-2 text-white font-mono text-sm">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                System-oriented Architecture
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Build */}
            <section className="py-24 px-6 bg-black relative">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-16 text-center text-white">What We Build</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Business & Marketing Sites", icon: Globe, desc: "High-conversion websites that tell your brand story." },
                            { title: "SaaS Platforms", icon: Layout, desc: "Scalable subscription-based software products." },
                            { title: "Internal Tools", icon: Database, desc: "Admin panels and dashboards to manage operations." },
                            { title: "AI-Powered Apps", icon: Zap, desc: "Integrating intelligent features into web interfaces." },
                            { title: "CRM Integrations", icon: Server, desc: "Connecting your website to your sales pipeline." }
                        ].map((item, i) => (
                            <GlassCard key={i} className="p-8 group hover:bg-white/[0.04] transition-colors border-white/10">
                                <div className="flex justify-between items-start mb-6">
                                    <item.icon className="w-8 h-8 text-gray-200" />
                                    <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-medium mb-4 text-white tracking-tight">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed font-light">{item.desc}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>
            {/* Process */}
            <ProcessTimeline steps={processSteps} />

            {/* Technologies */}
            <section className="py-24 px-6 bg-zinc-900/10">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-16 text-white">Technologies We Use</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { name: "Frameworks", sub: "React, Next.js" },
                            { name: "Backend", sub: "Node.js, Supabase" },
                            { name: "Infrastructure", sub: "Vercel, AWS" },
                            { name: "SEO", sub: "Semantic HTML, SSR" }
                        ].map((tech, i) => (
                            <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                                <h3 className="text-lg font-bold text-white">{tech.name}</h3>
                                <p className="text-xs text-gray-500 font-mono uppercase mt-2">{tech.sub}</p>
                            </div>
                        ))}
                    </div>
                    <p className="mt-12 text-gray-500 text-sm">Technology decisions are made based on stability and long-term value.</p>
                </div>
            </section>

            {/* Target Audience */}
            <section className="py-24 px-6 bg-black">
                <div className="max-w-4xl mx-auto bg-gradient-to-b from-white/10 to-transparent p-[1px] rounded-3xl">
                    <div className="bg-black p-12 rounded-[23px]">
                        <h2 className="text-3xl font-bold text-center text-white mb-12">Who This Service Is For</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                            {[
                                "Businesses needing a reliable web presence",
                                "Startups building SaaS or web platforms",
                                "Teams replacing manual processes with web tools",
                                "Companies integrating AI and automation into web systems"
                            ].map((audience, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                                    <p className="text-gray-300 text-lg">{audience}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Note */}
            <section className="py-24 px-6 bg-zinc-900/20 text-center">
                <div className="max-w-3xl mx-auto">
                    <p className="text-gray-500 uppercase tracking-widest text-xs font-mono mb-4">Investment</p>
                    <h2 className="text-3xl font-light text-white mb-6">Transparent Pricing</h2>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        Web development pricing depends on scope, complexity, and integrations.
                        Typically varies based on number of pages, backend requirements, and automation needs.
                    </p>
                    <div className="inline-block px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                        Detailed estimates presented after discovery call
                    </div>
                </div>
            </section>

            <ServiceContactForm serviceName="Web Development" />
        </ServiceLayout>
    )
}
