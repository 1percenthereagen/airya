"use client"

import { motion } from "framer-motion"
import { MessageSquare, Phone, Calendar, Zap, Mail, Globe, Database } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

function ChatWidget() {
    return (
        <div className="w-full h-full p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-50">
                <MessageSquare className="w-12 h-12 text-white/20" />
            </div>
            <div className="space-y-4 relative z-10 mt-8">
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white/10 rounded-2xl rounded-tl-none p-3 text-sm text-gray-200 w-3/4 max-w-[200px]"
                >
                    How can I help you scale today?
                </motion.div>
                <div className="flex justify-end">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 }}
                        className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold"
                    >
                        Book a demo
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

function VoiceWidget() {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => setIsActive(prev => !prev), 2000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="w-full h-full p-6 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-50">
                <Phone className="w-12 h-12 text-white/20" />
            </div>
            <div className="flex-grow flex items-center justify-center">
                {/* Voice Waves */}
                <div className="flex items-center gap-1 h-12">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <motion.div
                            key={i}
                            animate={{ height: isActive ? [10, 30, 15, 40, 10] : 4 }}
                            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                            className="w-1.5 bg-white rounded-full bg-gradient-to-t from-white/20 to-white"
                        />
                    ))}
                </div>
            </div>
            <div className="flex justify-between items-center bg-white/5 rounded-full p-1 pl-4 mt-auto">
                <span className="text-xs text-gray-400 font-mono flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                    Voice Active
                </span>
                <div className={`w-10 h-5 rounded-full p-0.5 transition-colors ${isActive ? 'bg-white' : 'bg-white/20'}`}>
                    <motion.div
                        animate={{ x: isActive ? 20 : 0 }}
                        className={`w-4 h-4 rounded-full ${isActive ? 'bg-black' : 'bg-white'}`}
                    />
                </div>
            </div>
        </div>
    )
}

function CalendarWidget() {
    return (
        <div className="w-full h-full p-6 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-50">
                <Calendar className="w-12 h-12 text-white/20" />
            </div>
            <div className="mt-auto bg-white/5 rounded-xl p-3">
                <div className="flex items-center justify-between text-[10px] text-gray-500 mb-2 uppercase tracking-wide">
                    <span>Mon</span>
                    <span className="text-green-400">● 4 Slots</span>
                </div>
                <div className="space-y-1.5">
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "70%" }}
                            transition={{ duration: 1.5, ease: "circOut" }}
                            className="h-full bg-white/40"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

function LeadEngineWidget() {
    return (
        <div className="w-full h-full p-8 flex flex-col justify-between">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-xl font-bold text-white mb-2">Lead Qualification Engine</h3>
                    <p className="text-sm text-gray-400 max-w-sm">Stop chasing bad leads. Our systems automatically score, segment, and nurture prospects before they even reach your sales team.</p>
                </div>
                <div className="p-3 bg-white/10 rounded-xl">
                    <Zap className="text-white" size={24} />
                </div>
            </div>

            <div className="bg-white/5 rounded-xl p-4 mt-6">
                <div className="flex justify-between text-xs text-gray-400 mb-2 font-mono uppercase">
                    <span>Inbound</span>
                    <span>Qualify</span>
                    <span>CRM</span>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full relative">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-white to-transparent w-1/3 opacity-50 blur-sm"
                    />
                    <motion.div
                        initial={{ width: "10%" }}
                        whileInView={{ width: "85%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-white rounded-full"
                    />
                </div>
            </div>
        </div>
    )
}

function OutreachWidget() {
    return (
        <div className="w-full h-full p-8 flex flex-col justify-between">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-xl font-bold text-white mb-2">Automated Outreach</h3>
                    <p className="text-sm text-gray-400 max-w-sm">Personalized email sequences and follow-ups that sound like you, running on autopilot 24/7/365.</p>
                </div>
                <div className="p-3 bg-white/10 rounded-xl">
                    <Mail className="text-white" size={24} />
                </div>
            </div>

            <div className="bg-white/5 rounded-xl p-4 mt-6 flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-black text-xs">AI</div>
                <div className="flex-grow space-y-2">
                    <div className="h-2 w-3/4 bg-white/20 rounded-full" />
                    <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                </div>
                <div className="text-green-400">
                    <CheckMark />
                </div>
            </div>
        </div>
    )
}

const CheckMark = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
)

export function AiSystemsSection() {
    return (
        <section className="py-32 px-6 bg-black text-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
                    >
                        Complete AI Systems for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Growth & Scale</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-400 leading-relaxed"
                    >
                        We don't just build chatbots. We engineer 24/7 intelligent systems that capture leads, qualify prospects, and drive meaningful revenue.
                    </motion.p>
                </div>

                {/* Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
                >
                    {/* Top Row: 3 Cards */}
                    <motion.div variants={item} className="h-72 bg-zinc-900/40 border border-white/5 rounded-3xl hover:border-white/20 transition-colors">
                        <div className="h-1/2 p-6 pb-0">
                            <h3 className="font-bold text-lg mb-1">24/7 Chat Agents</h3>
                            <p className="text-xs text-gray-500">Instantly engage visitors with human-like conversation that converts.</p>
                        </div>
                        <div className="h-1/2">
                            <ChatWidget />
                        </div>
                    </motion.div>

                    <motion.div variants={item} className="h-72 bg-zinc-900/40 border border-white/5 rounded-3xl hover:border-white/20 transition-colors">
                        <div className="h-1/2 p-6 pb-0">
                            <h3 className="font-bold text-lg mb-1">Voice AI Receptionist</h3>
                            <p className="text-xs text-gray-500">Handle calls, answer FAQs, and route leads without missing a beat.</p>
                        </div>
                        <div className="h-1/2">
                            <VoiceWidget />
                        </div>
                    </motion.div>

                    <motion.div variants={item} className="h-72 bg-zinc-900/40 border border-white/5 rounded-3xl hover:border-white/20 transition-colors">
                        <div className="h-1/2 p-6 pb-0">
                            <h3 className="font-bold text-lg mb-1">Auto-Scheduling</h3>
                            <p className="text-xs text-gray-500">Qualify leads and book appointments directly into your calendar.</p>
                        </div>
                        <div className="h-1/2">
                            <CalendarWidget />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Second Row: 2 Wide Cards */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24"
                >
                    <motion.div variants={item} className="h-64 bg-zinc-900/40 border border-white/5 rounded-3xl hover:border-white/20 transition-colors">
                        <LeadEngineWidget />
                    </motion.div>
                    <motion.div variants={item} className="h-64 bg-zinc-900/40 border border-white/5 rounded-3xl hover:border-white/20 transition-colors">
                        <OutreachWidget />
                    </motion.div>
                </motion.div>

                {/* Integration Stack */}
                <div className="text-center mb-24">
                    <p className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-8">Seamless Integration Stack</p>
                    <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Simple text/icon representations for stack */}
                        <div className="flex flex-col items-center gap-2 group">
                            <Database className="w-8 h-8 text-white group-hover:text-blue-400 transition-colors" />
                            <span className="text-xs text-gray-500">CRM Sync</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 group">
                            <MessageSquare className="w-8 h-8 text-white group-hover:text-green-400 transition-colors" />
                            <span className="text-xs text-gray-500">WhatsApp</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 group">
                            <Globe className="w-8 h-8 text-white group-hover:text-purple-400 transition-colors" />
                            <span className="text-xs text-gray-500">Websites</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 group">
                            <Zap className="w-8 h-8 text-white group-hover:text-yellow-400 transition-colors" />
                            <span className="text-xs text-gray-500">Analytics</span>
                        </div>
                    </div>
                </div>

                {/* CTA Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="bg-[#050505] border border-white/10 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-white/[0.02] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />

                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">Ready to automate your agency?</h3>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/contact?plan=Growth%20System" className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors hover:scale-105 transform duration-200">
                                Build Your AI Growth System
                            </Link>
                            <Link href="/services" className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-medium hover:bg-white/5 transition-colors">
                                See How It Works
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
