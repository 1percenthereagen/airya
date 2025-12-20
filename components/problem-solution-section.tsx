"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export function ProblemSolutionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current) }
  }, [])

  const inputs = ["Leads", "Calls", "Messages", "Data", "Documents"]
  const system = ["AI Agents", "Automation", "Logic", "Integrations", "Intelligence"]
  const outputs = ["Qualified conversations", "Booked appointments", "Clean CRM", "Real dashboards", "Revenue signals"]

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-black relative z-10 overflow-hidden">
      {/* Subtle background glow for system column */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-full bg-white/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Header */}
        <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? "opacity-100 y-0" : "opacity-0 translate-y-12"}`}>
          <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight mb-6">
            We don't sell tools. <br />
            <span className="font-medium">We design systems that work without you.</span>
          </h2>
          <p className="text-xl text-gray-500 font-light tracking-wide uppercase text-sm">Every engagement starts with architecture, not features.</p>
        </div>

        {/* Three Pillars Layout */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">

          {/* 1. INPUT (Chaotic but calm) */}
          <div className="flex flex-col items-center justify-center space-y-6 md:space-y-12 opacity-40">
            <h3 className="text-xs font-mono text-gray-500 mb-4 tracking-widest uppercase">INPUT</h3>
            <div className="flex flex-wrap justify-center gap-4 md:flex-col md:gap-8">
              {inputs.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.8 }}
                  className="text-lg md:text-xl text-gray-400 font-light"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          {/* 2. SYSTEM (Center Glow) */}
          <div className="relative border-r border-l border-white/5 bg-white/[0.02] rounded-3xl py-12 flex flex-col items-center justify-center space-y-8 backdrop-blur-sm">
            <div className="absolute inset-0 border border-white/10 rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.05)]" />
            <h3 className="text-xs font-mono text-white mb-4 tracking-widest uppercase relative z-10">SYSTEM</h3>

            {system.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + (i * 0.15), duration: 0.6 }}
                className="relative z-10 text-xl md:text-3xl text-white font-medium tracking-tight"
              >
                {item}
              </motion.div>
            ))}

            {/* Animated Flow Line */}
            <motion.div
              initial={{ height: 0 }}
              animate={isVisible ? { height: '100%' } : {}}
              transition={{ duration: 2, delay: 0.5 }}
              className="absolute left-1/2 top-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2"
            />
          </div>

          {/* 3. OUTPUT (Clean Outcomes) */}
          <div className="flex flex-col items-center justify-center space-y-6 md:space-y-12">
            <h3 className="text-xs font-mono text-gray-500 mb-4 tracking-widest uppercase">OUTPUT</h3>
            <div className="flex flex-wrap justify-center gap-4 md:flex-col md:gap-8">
              {outputs.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.2 + (i * 0.1), duration: 0.8 }}
                  className="text-lg md:text-xl text-white font-light text-center md:text-left"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
