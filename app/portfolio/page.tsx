import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2, MapPin, Globe2, Users, Code2, Palette, TrendingUp, ExternalLink } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { TextReveal } from "@/components/text-reveal"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { StackedProjects } from "@/components/stacked-projects"


export const metadata: Metadata = {
    title: "Portfolio - Airya | Vancouver AI Automation & Digital Services Agency",
    description: "Proven work from Airya, a Vancouver-based AI automation and digital services agency. View our case studies across healthcare, eCommerce, travel, and service businesses in Canada and globally.",
    keywords: ["Vancouver AI agency", "Canada digital services", "AI automation portfolio", "Vancouver web development", "British Columbia tech agency"],
}

export default function PortfolioPage() {
    return (
        <div className="min-h-screen bg-black overflow-hidden">
            <main className="min-h-screen relative overflow-hidden">
                <div className="relative z-10">
                    <GlassmorphismNav />
                    {/* Hero Section - Centered & Premium */}
                    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] opacity-50" />

                        <div className="max-w-7xl mx-auto text-center relative z-10">
                            <ScrollReveal>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                                    <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                                    <span className="text-sm text-white/80 tracking-wide">Premium Digital Solutions</span>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.1}>
                                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-8">
                                    Our Featured <span className="font-[family-name:var(--font-playfair)] italic font-light text-white/50">Projects</span>
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2}>
                                <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                                    A curated selection of our most ambitious work, engineered for performance and designed for impact.
                                </p>
                            </ScrollReveal>
                        </div>
                    </section>

                    {/* Featured Projects Section - Sticky Stack */}
                    <section id="projects" className="relative pb-32 px-4 md:px-6">
                        <div className="max-w-7xl mx-auto">
                            <StackedProjects />
                        </div>
                    </section>

                    {/* Delivered Solutions Summary */}
                    <section className="relative py-20 px-6 overflow-hidden">
                        <div className="max-w-5xl mx-auto text-center relative z-10">
                            <ScrollReveal>
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                                    We have delivered solutions for <span className="text-white/60">Mobile</span>, <span className="text-white/60">AI</span>, <span className="text-white/60">Web</span>, and <span className="text-white/60">Enterprise Systems</span> globally.
                                </h2>
                            </ScrollReveal>
                        </div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]" />
                    </section>


                    {/* Team & Developers Section */}
                    <section className="relative py-24 px-6">
                        <div className="max-w-6xl mx-auto">
                            <ScrollReveal>
                                <div className="text-center mb-16">
                                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                        <TextReveal>Built by Builders</TextReveal>
                                    </h2>
                                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                                        Our team includes experienced developers, AI engineers, designers, and automation specialists who have worked across startups, enterprises, and fast-growing brands.
                                    </p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2} staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                                {[
                                    { icon: Code2, role: "AI & Automation Engineers", desc: "Building intelligent systems" },
                                    { icon: Users, role: "Full Stack Developers", desc: "End-to-end delivery" },
                                    { icon: Palette, role: "UI/UX Designers", desc: "Premium experiences" },
                                    { icon: TrendingUp, role: "Digital Growth Specialists", desc: "Conversion & scale" },
                                    { icon: CheckCircle2, role: "Client Strategy & Operations", desc: "Seamless execution" },
                                    { icon: MapPin, role: "Vancouver Presence", desc: "Local client meetings" }
                                ].map((item) => (
                                    <div
                                        key={item.role}
                                        className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 group"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <item.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-2">{item.role}</h3>
                                        <p className="text-gray-400">{item.desc}</p>
                                    </div>
                                ))}
                            </ScrollReveal>

                            <ScrollReveal delay={0.6}>
                                <div className="text-center mt-12">
                                    <p className="text-gray-400 text-lg">
                                        Supported by on-ground representation in <span className="text-white font-semibold">Vancouver, Canada</span> for client meetings and local collaborations.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </section>

                    {/* Vancouver-Based Agency SEO Section */}
                    <section className="relative py-24 px-6">
                        <div className="max-w-5xl mx-auto text-center">
                            <ScrollReveal>
                                <div className="mb-12">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white font-medium mb-6">
                                        <MapPin className="w-4 h-4" />
                                        Vancouver, British Columbia
                                    </div>
                                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                                        <TextReveal>A Vancouver-Based Agency</TextReveal> <br />
                                        <TextReveal delay={0.2} className="text-white">Serving Global Clients</TextReveal>
                                    </h2>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.4}>
                                <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
                                    Airya is a <strong className="text-white">Vancouver-based AI automation and digital services agency</strong> helping Canadian and international businesses streamline operations, improve customer experience, and scale using intelligent systems.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal delay={0.6} staggerChildren={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    "Vancouver, BC",
                                    "Canada",
                                    "United States",
                                    "United Kingdom",
                                    "Australia",
                                    "Global Markets"
                                ].map((location) => (
                                    <div
                                        key={location}
                                        className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                    >
                                        <Globe2 className="w-6 h-6 text-white mx-auto mb-2" />
                                        <p className="text-gray-300 font-medium text-sm">{location}</p>
                                    </div>
                                ))}
                            </ScrollReveal>

                            <ScrollReveal delay={0.8}>
                                <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-2xl">
                                    <p className="text-gray-400 text-lg">
                                        <span className="text-white font-semibold">Local understanding</span> + <span className="text-white font-semibold">Global delivery</span>
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </section>

                    {/* Final CTA Section */}
                    <section className="relative py-32 px-6">
                        <div className="absolute inset-0 bg-transparent" />
                        <div className="relative z-10 max-w-4xl mx-auto text-center">
                            <ScrollReveal>
                                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                                    <TextReveal>Let's Build Something That</TextReveal> <br />
                                    <TextReveal delay={0.2} className="text-white">Actually Moves the Needle</TextReveal>
                                </h2>
                            </ScrollReveal>

                            <ScrollReveal delay={0.4}>
                                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                                    Whether you're in Vancouver, anywhere in Canada, or across the globe—let's talk about your next project.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal delay={0.6}>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                    <Link
                                        href="/contact"
                                        className="px-10 py-5 bg-white text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:bg-gray-200 text-lg flex items-center justify-center gap-2"
                                    >
                                        Book a Free Strategy Call
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/10 transition-all duration-300 hover:scale-105 text-lg flex items-center justify-center gap-2"
                                    >
                                        Get a Custom Proposal
                                    </Link>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.8}>
                                <p className="text-gray-500 text-sm">
                                    Based in <span className="text-white">Vancouver, Canada</span>. Working globally.
                                </p>
                            </ScrollReveal>
                        </div>
                    </section>

                    <Footer />
                </div>
            </main>
        </div>
    )
}
