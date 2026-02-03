"use client"

import { motion } from "framer-motion"

const services = [
    {
        id: "01",
        title: "AI & Automation Systems",
        description: "Design systems that reduce manual work and bring structure to operations.",
        examples: [
            "AI agents for internal workflows",
            "Process and tool automation",
            "Data processing and decision support"
        ]
    },
    {
        id: "02",
        title: "UI/UX & Product Design",
        description: "Design interfaces that are clear, functional, and easy to use at scale.",
        examples: [
            "Product UX for web and mobile",
            "Design systems",
            "Conversion-focused interfaces"
        ]
    },
    {
        id: "03",
        title: "Web, SaaS & Mobile Apps",
        description: "Build scalable applications that grow with your business.",
        examples: [
            "Web apps and SaaS platforms",
            "iOS and Android apps",
            "Backend systems and APIs"
        ]
    },
    {
        id: "04",
        title: "Growth & Marketing Systems",
        description: "Build systems that support acquisition, conversion, and retention.",
        examples: [
            "Automated lead generation",
            "CRM and marketing infrastructure",
            "Conversion-optimized websites"
        ]
    }
]

export function WhatWeDoSection() {
    return (
        <section className="bg-black py-24 px-6 md:px-12 border-t border-white/5 relative z-20">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8"
                >
                    <h2 className="text-5xl md:text-7xl font-sans font-light text-white tracking-tight">
                        What <span className="text-gray-500 italic font-serif">We Do</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-md text-left md:text-right leading-relaxed font-light">
                        We design and build reliable digital systems that support real business operations and long-term growth.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-3xl">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-black p-8 md:p-10 h-full flex flex-col justify-between hover:bg-[#080808] transition-colors duration-500 relative"
                        >
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div>
                                <span className="text-xs font-mono text-gray-600 mb-8 block group-hover:text-white/40 transition-colors">
                                    /{service.id}
                                </span>

                                <h3 className="text-xl md:text-2xl font-medium text-white mb-4 leading-tight group-hover:translate-x-1 transition-transform duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-gray-500 text-sm leading-relaxed mb-8 group-hover:text-gray-400 transition-colors">
                                    {service.description}
                                </p>
                            </div>

                            <ul className="space-y-3 pt-8 border-t border-white/5">
                                {service.examples.map((example, i) => (
                                    <li key={i} className="text-xs text-gray-500 flex items-center gap-2 group-hover:text-gray-400 transition-colors">
                                        <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-white/40" />
                                        {example}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
