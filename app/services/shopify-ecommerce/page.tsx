"use client"

import { ServiceLayout } from "@/components/services/service-layout"
import { ServiceHero } from "@/components/services/service-hero"
import { ProcessTimeline } from "@/components/services/process-timeline"
import { ServiceContactForm } from "@/components/services/service-contact-form"
import { GlassCard } from "@/components/services/glass-card"
import { ShoppingBag, CreditCard, Paintbrush, TrendingUp } from "lucide-react"

export default function ShopifyEcommercePage() {
    return (
        <ServiceLayout>
            <ServiceHero
                title="Shopify & E-commerce"
                subtitle="High-Conversion Digital Storefronts"
                description="We build beautiful, fast, and optimized Shopify stores that turn visitors into loyal customers. From headless builds to custom themes."
                tags={["Shopify Plus", "Liquid", "Headless", "CRO", "Payments"]}
            />

            {/* Problem / Solution */}
            <section className="py-24 px-6 bg-black relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="space-y-4">
                        <h3 className="text-gray-500 font-mono text-xs uppercase tracking-widest">The Problem</h3>
                        <h2 className="text-3xl font-bold text-white leading-tight">Your store looks like everyone else's.</h2>
                    </div>
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <GlassCard className="p-8">
                            <h4 className="text-xl font-semibold mb-4 text-white">Brand Dilution</h4>
                            <p className="text-gray-400">Using a standard template makes your premium product feel cheap. You need a unique identity to stand out.</p>
                        </GlassCard>
                        <GlassCard className="p-8">
                            <h4 className="text-xl font-semibold mb-4 text-white">Optimization Limit</h4>
                            <p className="text-gray-400">Standard themes are bloated. Custom builds load faster, rank better, and convert higher.</p>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-24 px-6 bg-zinc-900/10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center text-white">Commerce Capabilities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Custom Themes",
                                desc: "Pixel-perfect implementation of your brand guidelines. Unique layouts that tell your product's story.",
                                icon: Paintbrush
                            },
                            {
                                title: "Headless Commerce",
                                desc: "Decouple the frontend from the backend for ultimate speed and flexibility. Perfect for high-volume stores.",
                                icon: ShoppingBag
                            },
                            {
                                title: "App Integration",
                                desc: "Seamlessly connect your ERP, 3PL, and marketing tools. Automate inventory management and fulfillment.",
                                icon: CreditCard
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
                    <h2 className="text-4xl font-bold mb-16 text-center text-white">Store Transformation</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <GlassCard className="p-8">
                            <div className="mb-4">
                                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Case Study</span>
                                <h3 className="text-2xl font-bold mt-2 text-white">Luxury Fashion Brand</h3>
                            </div>
                            <p className="text-gray-400 text-lg">Redesigned the entire shopping experience with a focus on visual storytelling. Increased Average Order Value (AOV) by <span className="text-white font-semibold">35%</span> within 2 months.</p>
                        </GlassCard>
                        <GlassCard className="p-8">
                            <div className="mb-4">
                                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Case Study</span>
                                <h3 className="text-2xl font-bold mt-2 text-white">DTC Supplement Co.</h3>
                            </div>
                            <p className="text-gray-400 text-lg">Migrated from WooCommerce to Shopify Plus. Improved site speed by 40% and implemented a custom subscription portal, reducing churn by <span className="text-white font-semibold">15%</span>.</p>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* Pricing Note */}
            <section className="py-12 px-6 bg-black text-center border-t border-white/5">
                <p className="text-gray-500 uppercase tracking-widest text-sm mb-4">Investment</p>
                <p className="text-3xl font-light text-white">Store Setups start from <span className="text-white font-semibold">$1,799</span></p>
            </section>

            <ServiceContactForm serviceName="Shopify & E-commerce" />
        </ServiceLayout>
    )
}
