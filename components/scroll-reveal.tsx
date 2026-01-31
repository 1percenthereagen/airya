"use client"

import { motion } from "framer-motion"
import React, { ReactNode } from "react"

interface ScrollRevealProps {
    children: ReactNode
    className?: string
    delay?: number
    duration?: number
    staggerChildren?: number
}

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.9,
        rotateX: -15
    },
    visible: (custom: { delay: number, duration: number }) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        transition: {
            duration: custom.duration,
            delay: custom.delay,
            ease: [0.16, 1, 0.3, 1],
        }
    })
}

const containerVariants = {
    hidden: {},
    visible: (custom: { staggerChildren: number, delay: number }) => ({
        transition: {
            staggerChildren: custom.staggerChildren,
            delayChildren: custom.delay
        }
    })
}

export function ScrollReveal({
    children,
    className = "",
    delay = 0,
    duration = 0.9,
    staggerChildren = 0
}: ScrollRevealProps) {
    const isContainer = staggerChildren > 0

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                margin: "-10% 0px -10% 0px"
            }}
            variants={isContainer ? containerVariants : itemVariants}
            custom={isContainer ? { staggerChildren, delay } : { delay, duration }}
            style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
                willChange: "transform, opacity",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden"
            }}
            className={className}
        >
            {isContainer ? (
                React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        return (
                            <motion.div variants={itemVariants} custom={{ delay: 0, duration }}>
                                {child}
                            </motion.div>
                        )
                    }
                    return child
                })
            ) : children}
        </motion.div>
    )
}

