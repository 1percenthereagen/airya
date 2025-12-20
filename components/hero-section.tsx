"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { InteractiveTorus } from "./interactive-torus"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const textInView = useInView(headingRef, { once: true, margin: "-10%" })

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full flex items-center overflow-hidden bg-black text-white px-6 md:px-12 lg:px-24">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black z-0 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 pt-28 md:pt-20">
        {/* Right Column - 3D Element (Appears first on mobile) */}
        <div className="flex-1 w-full lg:w-1/2 flex items-center justify-center lg:justify-end relative z-10 order-1 lg:order-2">
          {/* Reduced mobile size to 250px and ensured no cropping */}
          <div className="w-[250px] h-[250px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] lg:-mr-10">
            <InteractiveTorus />
          </div>
        </div>

        {/* Left Column - Text Content (Appears second on mobile) */}
        <div className="flex-1 w-full lg:w-1/2 flex flex-col items-start text-left z-20 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: textInView ? 1 : 0, x: textInView ? 0 : -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1
              ref={headingRef}
              className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-white leading-[1.1]"
            >
              Software.
              <br />
              Systems.
              <br />
              Growth.
            </h1>

            <motion.p
              className="text-lg md:text-xl text-gray-400 font-light tracking-wide max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: textInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We design and build products, platforms, and marketing systems that scale with structure and clarity.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
