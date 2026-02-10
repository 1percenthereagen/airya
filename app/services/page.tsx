"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/services/glass-card"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Bot, Cog, Globe, Smartphone, ShoppingBag, TrendingUp } from "lucide-react"

export default function ServicesHubPage() {
    const services = [
        {
            title: "AI Agents & Automation",
            description: "Custom AI workforces that handle sales, support, and internal operations 24/7.",
            href: "/services/ai-automation",
            icon: Bot,
        },
        {
            title: "Workflow Automation",
            description: "End-to-end process orchestration. Eliminate manual data entry and bottlenecks.",
            href: "/services/workflow-automation",
            icon: Cog,
        },
        {
            title: "Web & SaaS Engineering",
            description: "Scalable, high-performance web platforms built for the modern enterprise.",
            href: "/services/web-saas-development",
            icon: Globe,
        },
        {
            title: "Mobile App Development",
            description: "Native and cross-platform mobile experiences that users love.",
            href: "/services/mobile-app-development",
            icon: Smartphone,
        },
        {
            title: "Shopify & E-commerce",
            description: "High-conversion digital storefronts with custom functionality.",
            href: "/services/shopify-ecommerce",
            icon: ShoppingBag,
        },
        {
            title: "Growth & Marketing",
            description: "Data-driven growth systems, SEO, and performance marketing infrastructure.",
            href: "/services/growth-marketing",
            icon: TrendingUp,
        }
    ]

    return (
        <div className="min-h-screen bg-black text-white selection:bg-white/30">
            <GlassmorphismNav />

            <main className="pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">

                {/* Abstract Backgrounds - Updated for Uniformity */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-white/[0.03] rounded-full blur-[128px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">

                    {/* Header */}
                    <div className="text-center mb-24">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50"
                        >
                            Our Expertise
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-400 max-w-2xl mx-auto font-light tracking-wide"
                        >
                            A comprehensive suite of digital capabilities designed to help you scale, automate, and dominate your market.
                        </motion.p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <Link key={service.href} href={service.href} className="block group">
                                <GlassCard className="h-full hover:bg-white/[0.06] transition-all duration-500" hoverEffect={true}>
                                    <div className="mb-8 p-4 rounded-2xl bg-white/[0.05] inline-block group-hover:bg-white/[0.1] transition-colors">
                                        <service.icon className="w-8 h-8 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                                    </div>

                                    <h3 className="text-2xl font-semibold mb-4 text-white group-hover:tracking-wide transition-all duration-300">{service.title}</h3>
                                    <p className="text-gray-400 mb-8 leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {service.description}
                                    </p>

                                    <div className="flex items-center text-sm font-medium text-white/50 group-hover:text-white transition-colors">
                                        Explore Solution <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </GlassCard>
                            </Link>
                        ))}
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    )
}
