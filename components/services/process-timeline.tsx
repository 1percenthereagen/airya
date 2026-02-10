"use client"

import { motion } from "framer-motion"

export interface Step {
    title: string
    description: string
    icon: string
}

export interface ProcessTimelineProps {
    steps?: Step[]
}

export function ProcessTimeline({ steps: customSteps }: ProcessTimelineProps) {
    const defaultSteps = [
        {
            title: "Discovery",
            description: "We dive deep into your business logic, pain points, and goals to architect the perfect solution.",
            icon: "01"
        },
        {
            title: "Strategy & Design",
            description: "Blueprint creation. We map out workflows, data schemas, and UI/UX before writing a single line of code.",
            icon: "02"
        },
        {
            title: "Build & Integrate",
            description: "Agile development. We build, test, and integrate your system using the latest scalable technologies.",
            icon: "03"
        },
        {
            title: "Launch & Optimize",
            description: "Deployment is just the start. We monitor performance, gather feedback, and iterate for growth.",
            icon: "04"
        }
    ]

    const steps = customSteps || defaultSteps

    return (
        <section className="py-24 px-6 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How We Build</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A systematic approach to delivering high-impact results.
                    </p>
                </div>

                <div className="relative">
                    {/* Connection Line (Desktop) */}
                    <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 hidden md:block -translate-y-1/2" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2, duration: 0.5 }}
                                className="group"
                            >
                                <div className="bg-zinc-900 border border-white/5 p-8 rounded-2xl h-full flex flex-col items-center text-center hover:border-white/20 transition-colors relative">
                                    {/* Step Number Bubble */}
                                    <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center text-white/50 font-mono text-sm mb-6 group-hover:bg-white group-hover:text-black transition-all">
                                        {step.icon}
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
