"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceHeroProps {
    title: string
    subtitle: string
    description: string
    tags?: string[]
}

export function ServiceHero({ title, subtitle, description, tags }: ServiceHeroProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <section
            ref={containerRef}
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black pt-20"
        >
            {/* Abstract Background - Updated to Monochromatic / Metallic */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                {/* Subtle Silver Glow */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-[128px]" />

                {/* Animated Lines / Grid */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                {/* Tags */}
                {tags && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-wrap justify-center gap-3 mb-8"
                    >
                        {tags.map((tag, i) => (
                            <span key={tag} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs text-white/50 tracking-[0.2em] uppercase backdrop-blur-sm font-mono">
                                {tag}
                            </span>
                        ))}
                    </motion.div>
                )}

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-8"
                >
                    {title}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-white/70 font-light mb-8 max-w-3xl mx-auto tracking-wide"
                >
                    {subtitle}
                </motion.p>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
                >
                    {description}
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Button
                        size="lg"
                        className="rounded-full bg-white text-black hover:bg-white/90 hover:scale-105 transition-all duration-300 px-10 py-7 text-lg uppercase tracking-wider font-medium"
                        onClick={() => {
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                    >
                        Start Project <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <span className="text-[10px] text-white/20 uppercase tracking-[0.3em]">Scroll</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/20 to-white/0" />
            </motion.div>
        </section>
    )
}
