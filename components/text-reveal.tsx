"use client"

import { motion } from "framer-motion"

interface TextRevealProps {
    children: string
    className?: string
    delay?: number
}

export function TextReveal({ children, className = "", delay = 0 }: TextRevealProps) {
    return (
        <span className={`inline-block overflow-hidden align-bottom ${className}`}>
            <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.8,
                    delay: delay,
                    ease: [0.16, 1, 0.3, 1],
                }}
            >
                {children}
            </motion.span>
        </span>
    )
}
