"use client"

import { ServiceLayout } from "@/components/services/service-layout"
import { MobileShowcase } from "@/components/services/mobile/mobile-showcase"
import { ProcessTimeline, Step } from "@/components/services/process-timeline"
import { ServiceContactForm } from "@/components/services/service-contact-form"
import { GlassCard } from "@/components/services/glass-card"
import { Smartphone, Tablet, Layers, Database, Code2, Rocket, Cloud, Cpu, UserCheck } from "lucide-react"

export default function MobileAppDevelopmentPage() {
    const processSteps: Step[] = [
        {
            title: "Discovery & Planning",
            description: "We understand your business goals, users, and technical requirements.",
            icon: "01"
        },
        {
            title: "Architecture & Design",
            description: "We define app structure, data flow, and user experience before development.",
            icon: "02"
        },
        {
            title: "Development",
            description: "We build the app using scalable frameworks and clean code practices.",
            icon: "03"
        },
        {
            title: "Testing & Optimization",
            description: "Performance, stability, and usability testing across devices.",
            icon: "04"
        },
        {
            title: "Launch & Support",
            description: "App store readiness, deployment, and optional ongoing improvements.",
            icon: "05"
        }
    ]

    return (
        <ServiceLayout>
            <MobileShowcase />

            {/* Services List */}
            <section className="py-24 px-6 bg-black relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-sans">Mobile App Development for iOS and Android</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto font-mono text-sm leading-relaxed">
                            We develop mobile applications using modern, production-ready technologies that balance speed, performance, and stability.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            "iOS App Development",
                            "Android App Development",
                            "Cross-Platform App Development",
                            "Frontend & Full-Stack Apps",
                            "API-Driven & Integrated Apps"
                        ].map((service, i) => (
                            <GlassCard key={i} className="p-6 flex items-center justify-center text-center">
                                <span className="text-gray-300 font-medium">{service}</span>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Problems Solved */}
            <section className="py-24 px-6 bg-zinc-900/10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h3 className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-4">The Challenge</h3>
                        <h2 className="text-4xl font-bold text-white mb-6 leading-tight">Many businesses struggle with...</h2>
                        <div className="space-y-6">
                            {[
                                "Apps that are hard to maintain or scale",
                                "Poor performance and inconsistent UI",
                                "Apps disconnected from backend systems",
                                "Difficulty adding new features over time"
                            ].map((problem, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-gray-500 text-xs">✕</span>
                                    </div>
                                    <p className="text-gray-400 text-lg leading-relaxed">{problem}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-white/5 to-transparent p-1 rounded-3xl">
                        <div className="bg-black/80 backdrop-blur-xl p-8 rounded-[22px] border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-4">The Solution</h3>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                We solve these by building structured mobile applications with clear logic, reliable integrations, and scalable foundations.
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
            <section className="py-24 px-6 bg-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center text-white">What We Build</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Customer-Facing Apps", icon: UserCheck, desc: "Engage your users with intuitive, beautiful mobile experiences." },
                            { title: "Internal Tools", icon: SettingsIcon, desc: "Streamline operations with custom apps for your workforce." },
                            { title: "AI-Powered Apps", icon: Cpu, desc: "Integrate LLMs and computer vision directly into the mobile experience." },
                            { title: "SaaS Connected Platforms", icon: Cloud, desc: "Extend your web platform to mobile with seamless sync." },
                            { title: "Data-Driven Apps", icon: Database, desc: "Visualize complex datasets and workflows on the go." }
                        ].map((item, i) => (
                            <GlassCard key={i} className="p-8">
                                <item.icon className="w-8 h-8 text-gray-200 mb-6" />
                                <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
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
                            { name: "Flutter", sub: "Cross-Platform" },
                            { name: "React Native", sub: "Cross-Platform" },
                            { name: "Swift / Kotlin", sub: "Native" },
                            { name: "Node.js", sub: "Backend" }
                        ].map((tech, i) => (
                            <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                                <h3 className="text-lg font-bold text-white">{tech.name}</h3>
                                <p className="text-xs text-gray-500 font-mono uppercase mt-2">{tech.sub}</p>
                            </div>
                        ))}
                    </div>
                    <p className="mt-12 text-gray-500 text-sm">Technology choices are based on long-term maintainability, not trends.</p>
                </div>
            </section>

            {/* Target Audience */}
            <section className="py-24 px-6 bg-black">
                <div className="max-w-4xl mx-auto bg-gradient-to-b from-white/10 to-transparent p-[1px] rounded-3xl">
                    <div className="bg-black p-12 rounded-[23px]">
                        <h2 className="text-3xl font-bold text-center text-white mb-12">Who This Service Is For</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                            {[
                                "Startups building their first mobile product",
                                "Businesses launching customer apps",
                                "Teams replacing manual processes with mobile tools",
                                "Companies integrating AI or automation into mobile workflows"
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
                        Mobile app development pricing depends on scope, features, and integrations.
                        Typically varies based on number of screens, backend requirements, and AI features.
                    </p>
                    <div className="inline-block px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                        Detailed estimates provided after discovery call
                    </div>
                </div>
            </section>

            <ServiceContactForm serviceName="Mobile App Development" />
        </ServiceLayout>
    )
}

function SettingsIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
}
