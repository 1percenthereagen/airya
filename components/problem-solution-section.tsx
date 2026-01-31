"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "./scroll-reveal"
import { TextReveal } from "./text-reveal"

export function ProblemSolutionSection() {
  const inputs = ["Leads", "Calls", "Messages", "Data", "Documents"]
  const system = ["AI Agents", "Automation", "Logic", "Integrations", "Intelligence"]
  const outputs = ["Qualified conversations", "Booked appointments", "Clean CRM", "Real dashboards", "Revenue signals"]

  return (
    <section className="py-24 px-4 bg-black relative z-10 overflow-hidden">
      {/* Subtle background glow for system column */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-full bg-white/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight mb-6">
            <TextReveal>We don't sell tools.</TextReveal> <br />
            <TextReveal delay={0.2} className="font-medium">We design systems that work without you.</TextReveal>
          </h2>
          <ScrollReveal delay={0.4}>
            <p className="text-xl text-gray-500 font-light tracking-wide uppercase text-sm">Every engagement starts with architecture, not features.</p>
          </ScrollReveal>
        </div>

        {/* Three Pillars Layout */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">

          {/* 1. INPUT (Chaotic but calm) */}
          <div className="flex flex-col items-center justify-center space-y-6 md:space-y-12 opacity-40">
            <h3 className="text-xs font-mono text-gray-500 mb-4 tracking-widest uppercase">INPUT</h3>
            <ScrollReveal staggerChildren={0.1} className="flex flex-wrap justify-center gap-4 md:flex-col md:gap-8">
              {inputs.map((item, i) => (
                <div key={i} className="text-lg md:text-xl text-gray-400 font-light text-center md:text-left">
                  {item}
                </div>
              ))}
            </ScrollReveal>
          </div>

          {/* 2. SYSTEM (Center Glow) */}
          <div className="relative border-r border-l border-white/5 bg-white/[0.02] rounded-3xl py-12 flex flex-col items-center justify-center space-y-8 backdrop-blur-sm">
            <div className="absolute inset-0 border border-white/10 rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.05)]" />
            <h3 className="text-xs font-mono text-white mb-4 tracking-widest uppercase relative z-10">SYSTEM</h3>

            <ScrollReveal staggerChildren={0.15} className="flex flex-col items-center space-y-8 relative z-10">
              {system.map((item, i) => (
                <div key={i} className="text-xl md:text-3xl text-white font-medium tracking-tight">
                  {item}
                </div>
              ))}
            </ScrollReveal>

            {/* Animated Flow Line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
              className="absolute left-1/2 top-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2"
            />
          </div>

          {/* 3. OUTPUT (Clean Outcomes) */}
          <div className="flex flex-col items-center justify-center space-y-6 md:space-y-12">
            <h3 className="text-xs font-mono text-gray-500 mb-4 tracking-widest uppercase">OUTPUT</h3>
            <ScrollReveal staggerChildren={0.1} delay={1.2} className="flex flex-wrap justify-center gap-4 md:flex-col md:gap-8">
              {outputs.map((item, i) => (
                <div key={i} className="text-lg md:text-xl text-white font-light text-center md:text-left">
                  {item}
                </div>
              ))}
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  )
}

