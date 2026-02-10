"use client"

import { motion } from "framer-motion"
import { BrowserWindow } from "./browser-window"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Database, Globe, Server, Code, Zap, BarChart, Users, Settings, MoreHorizontal, ArrowUpRight } from "lucide-react"

// Real High-Fidelity Dashboard Component
const RealSaasDashboard = () => (
    <div className="flex h-full bg-[#0a0a0a] text-gray-400 font-sans text-xs">
        {/* Sidebar */}
        <div className="w-48 border-r border-white/5 flex flex-col p-4 bg-black/40">
            <div className="flex items-center gap-2 mb-8 px-2">
                <div className="w-5 h-5 bg-white rounded-md" />
                <span className="font-semibold text-white">Nexus</span>
            </div>

            <div className="space-y-1">
                {["Overview", "Analytics", "Customers", "Revenue"].map((item, i) => (
                    <div key={i} className={`px-3 py-2 rounded-md flex items-center justify-between cursor-pointer ${i === 0 ? 'bg-white/10 text-white' : 'hover:bg-white/5'}`}>
                        {item}
                    </div>
                ))}
            </div>

            <div className="mt-8">
                <div className="text-[10px] uppercase font-semibold tracking-wider text-gray-600 px-3 mb-2">System</div>
                <div className="space-y-1">
                    {["Settings", "API Keys", "Documentation"].map((item, i) => (
                        <div key={i} className="px-3 py-2 rounded-md hover:bg-white/5 cursor-pointer">
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-auto flex items-center gap-3 px-2 border-t border-white/5 pt-4">
                <div className="w-8 h-8 rounded-full bg-gray-800" />
                <div>
                    <div className="text-white">Admin</div>
                    <div className="text-[10px]">Pro Plan</div>
                </div>
            </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
            {/* Header */}
            <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-black/20">
                <div className="flex items-center gap-2 text-gray-500">
                    <span>Dashboards</span>
                    <span>/</span>
                    <span className="text-white">Overview</span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-green-500">System Operational</span>
                </div>
            </div>

            {/* Dashboard Grid */}
            <div className="p-6 space-y-6 overflow-hidden">
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4">
                    {[
                        { label: "Total Revenue", value: "$124,592.00", delta: "+12.5%" },
                        { label: "Active Users", value: "8,549", delta: "+4.2%" },
                        { label: "Server Uptime", value: "99.99%", delta: "0.0%" },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white/[0.02] border border-white/5 p-4 rounded-xl">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-gray-500">{stat.label}</span>
                                <span className={`text-[10px] px-1.5 py-0.5 rounded ${i === 2 ? 'bg-gray-800 text-gray-300' : 'bg-green-500/10 text-green-400'}`}>{stat.delta}</span>
                            </div>
                            <div className="text-xl font-medium text-white">{stat.stat?.value || stat.value}</div>
                        </div>
                    ))}
                </div>

                {/* Main Content Area: Data Table */}
                <div className="bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden flex-1">
                    <div className="px-4 py-3 border-b border-white/5 flex justify-between items-center">
                        <h3 className="text-sm font-medium text-white">Recent Transactions</h3>
                        <MoreHorizontal className="w-4 h-4 text-gray-500" />
                    </div>
                    <div className="divide-y divide-white/5">
                        {[
                            { id: "TRX-9821", user: "Alice Freeman", amount: "$450.00", status: "Success" },
                            { id: "TRX-9822", user: "Mark Wilson", amount: "$120.00", status: "Processing" },
                            { id: "TRX-9823", user: "Sarah Jenkins", amount: "$950.00", status: "Success" },
                            { id: "TRX-9824", user: "Tech Corp Inc.", amount: "$2,400.00", status: "Success" },
                        ].map((row, i) => (
                            <div key={i} className="flex items-center justify-between px-4 py-3 hover:bg-white/[0.02]">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[10px] text-gray-400">
                                        {row.user.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="text-white">{row.user}</div>
                                        <div className="text-[10px] text-gray-600 font-mono">{row.id}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-8">
                                    <div className="w-20 text-right text-gray-300">{row.amount}</div>
                                    <div className={`w-20 px-2 py-0.5 rounded-full text-[10px] text-center ${row.status === 'Success' ? 'bg-white/10 text-white' : 'bg-yellow-500/10 text-yellow-500'}`}>
                                        {row.status}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
)


export function WebShowcase() {
    return (
        <section className="relative min-h-screen bg-black overflow-hidden pt-32 pb-24 px-6 flex items-center">

            {/* Background Gradients - Subtle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-white/[0.02] rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">

                {/* Left Content */}
                <div className="space-y-8">
                    {/* Removed Global Scale Badge */}

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1] mb-6"
                    >
                        Build Scalable, <br />
                        High-Performance <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Web Applications.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-lg leading-relaxed font-light"
                    >
                        Airya designs and develops modern websites and web applications that are fast, reliable, and built to scale.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap gap-4 pt-4"
                    >
                        <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <Server className="w-6 h-6 text-gray-300" />
                            <div className="text-left">
                                <div className="text-sm font-bold text-white">Cloud Ready</div>
                                <div className="text-xs text-gray-500">AWS / Vercel</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <Code className="w-6 h-6 text-gray-300" />
                            <div className="text-left">
                                <div className="text-sm font-bold text-white">Modern Stack</div>
                                <div className="text-xs text-gray-500">Next.js / React</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="pt-8"
                    >
                        <Button
                            size="lg"
                            className="rounded-full bg-white text-black hover:bg-gray-200 transition-all px-8 py-6 text-lg font-medium"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </motion.div>
                </div>

                {/* Right Content: 3D Browser Window */}
                <div className="relative h-[650px] w-full hidden lg:flex items-center justify-center perspective-1000">
                    <motion.div
                        initial={{ opacity: 0, rotateY: -12, rotateX: 5, scale: 0.9 }}
                        animate={{ opacity: 1, rotateY: -12, rotateX: 5, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: "circOut" }}
                        className="w-full max-w-2xl aspect-[16/10] relative z-20 group"
                    >
                        <BrowserWindow className="h-full w-full bg-[#050505] border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                            <RealSaasDashboard />
                        </BrowserWindow>

                        {/* Floating Badge 1 - More Technical Look */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 }}
                            className="absolute -left-8 top-1/4 bg-[#0a0a0a] border border-white/10 p-3 rounded-lg shadow-2xl flex items-center gap-3 backdrop-blur-md"
                        >
                            <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center border border-white/5">
                                <span className="text-white font-mono text-xs font-bold">100</span>
                            </div>
                            <div>
                                <div className="text-[10px] text-gray-500 uppercase font-mono tracking-wider">Lighthouse Score</div>
                                <div className="text-white font-bold text-xs">Performance</div>
                            </div>
                        </motion.div>

                        {/* Floating Badge 2 - More Technical Look */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 }}
                            className="absolute -right-4 bottom-1/3 bg-[#0a0a0a] border border-white/10 p-3 rounded-lg shadow-2xl flex items-center gap-3 backdrop-blur-md"
                        >
                            <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center border border-white/5 text-gray-300">
                                <Database className="w-4 h-4" />
                            </div>
                            <div>
                                <div className="text-[10px] text-gray-500 uppercase font-mono tracking-wider">Backend</div>
                                <div className="text-white font-bold text-xs">Next.js Server Actions</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Decorative Layers - Subtle Grey Glow */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.3, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="absolute z-10 w-[110%] h-[110%] bg-white/5 blur-3xl -rotate-6 rounded-full"
                    />
                </div>
            </div>
        </section>
    )
}
