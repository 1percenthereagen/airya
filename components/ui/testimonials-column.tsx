"use client"
import React from "react"
import { motion } from "framer-motion"

export interface Capability {
  title: string
  description: string
  icon: React.ElementType
  color: string
  tag?: string
}

export const TestimonialsColumn = (props: {
  className?: string
  testimonials: Capability[]
  duration?: number
}) => {
  return (
    <div className={`relative overflow-hidden h-[700px] ${props.className}`}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Number.POSITIVE_INFINITY, // Ensure seamless loop
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {/* We duplicate the array to create the infinite scroll effect */}
        {[...Array(2)].map((_, groupIndex) => (
          <React.Fragment key={groupIndex}>
            {props.testimonials.map(({ title, description, icon: Icon, color, tag }, i) => (
              <div
                className={`p-6 rounded-2xl border border-white/10 shadow-lg bg-white/5 backdrop-blur-md max-w-xs w-full group hover:bg-white/10 transition-colors duration-300 relative overflow-hidden`}
                key={`${groupIndex}-${i}`}
              >
                {/* Subtle Top Glow */}
                <div className={`absolute -top-10 -right-10 w-24 h-24 bg-${color}-500/20 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity`} />

                <div className="relative z-10">
                  <div className={`w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center mb-4 border border-white/5 group-hover:border-${color}-500/30 transition-colors`}>
                    <Icon className={`w-5 h-5 text-${color}-400`} />
                  </div>

                  <div className="flex flex-col gap-1 mb-2">
                    <h3 className="font-semibold text-lg text-white tracking-tight">{title}</h3>
                    {tag && (
                      <span className={`self-start text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 rounded-full bg-${color}-500/10 text-${color}-300 border border-${color}-500/20`}>
                        {tag}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed font-light">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  )
}
