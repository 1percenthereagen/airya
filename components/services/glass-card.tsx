"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlassCardProps {
    children: React.ReactNode
    className?: string
    hoverEffect?: boolean
}

export function GlassCard({ children, className, hoverEffect = true }: GlassCardProps) {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -5 } : undefined}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={cn(
                // Base styles: Neutral glass, subtle border, no colors
                "relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm",
                // Hover state: Subtle white glow, slightly lighter background
                "hover:bg-white/[0.06] hover:border-white/20 hover:shadow-2xl hover:shadow-white/[0.02] transition-colors duration-500 group",
                className
            )}
        >
            <div className="relative z-10">{children}</div>

            {/* Glossy reflection effect - subtle */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Radial Gradient for depth */}
            <div className="absolute -inset-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>
    )
}
