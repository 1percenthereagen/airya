"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { motion, useScroll, useSpring } from "framer-motion"

export function ServiceLayout({ children }: { children: React.ReactNode }) {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <div className="min-h-screen bg-black text-white selection:bg-white/30">
            <GlassmorphismNav />

            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-white z-50 origin-left"
                style={{ scaleX }}
            />

            <main>
                {children}
            </main>

            <Footer />
        </div>
    )
}
