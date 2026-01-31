"use client"

import { useRef } from "react"
import Link from "next/link"
import { TextReveal } from "./text-reveal"
import { ScrollReveal } from "./scroll-reveal"
import { InteractiveTorus } from "./interactive-torus"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null)

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full flex items-center overflow-hidden bg-black text-white px-6 md:px-12 lg:px-24">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black z-0 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 pt-36 pb-12 md:pb-0 md:pt-20">
        {/* Right Column - 3D Element (Appears first on mobile) */}
        <div className="flex-1 w-full lg:w-1/2 flex items-center justify-center lg:justify-end relative z-10 order-1 lg:order-2 mb-8 md:mb-0">
          <ScrollReveal delay={0.4} className="w-[280px] h-[280px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] lg:-mr-10">
            <InteractiveTorus />
          </ScrollReveal>
        </div>

        {/* Left Column - Text Content (Appears second on mobile) */}
        <div className="flex-1 w-full lg:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-20 order-2 lg:order-1">
          <div className="space-y-6 md:space-y-6">
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-white leading-[1.1] flex flex-col items-center md:items-start"
            >
              <TextReveal>Software.</TextReveal>
              <TextReveal delay={0.1}>Systems.</TextReveal>
              <TextReveal delay={0.2}>Growth.</TextReveal>
            </h1>

            <ScrollReveal delay={0.3}>
              <p className="text-base md:text-xl text-gray-400 font-light tracking-wide max-w-xs md:max-w-lg mx-auto md:mx-0 opacity-80">
                We design and build products, platforms, and marketing systems that scale with structure and clarity.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                <Link href="/contact" className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors">
                  Get Started
                </Link>
                <Link href="/blog" className="px-8 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors">
                  Our Thinking
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

