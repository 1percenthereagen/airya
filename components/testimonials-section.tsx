"use client"

import { useEffect, useRef } from "react"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"
import {
  LayoutDashboard,
  Layers,
  Brain,
  Bot,
  Mic,
  ShoppingBag,
  Smartphone,
  AppWindow,
  BarChart3
} from "lucide-react"

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element")
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-fade-in-up")
              }, index * 300)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const capabilities = [
    {
      title: "SaaS Platforms",
      description: "AI-powered products, dashboards, and internal tools built for scale.",
      icon: LayoutDashboard,
      color: "zinc",
      tag: "Enterprise"
    },
    {
      title: "Full Stack Web Apps",
      description: "Scalable, high-performance web applications using modern frameworks.",
      icon: Layers,
      color: "zinc",
      tag: "Web"
    },
    {
      title: "Data Science & AI",
      description: "Advanced analytics, ML models, and intelligent prediction systems.",
      icon: Brain,
      color: "zinc",
      tag: "Intelligence"
    },
    {
      title: "Agentic AI Applications",
      description: "Autonomous agents that handle sales, operations, and support 24/7.",
      icon: Bot,
      color: "zinc",
      tag: "Automation"
    },
    {
      title: "Voice AI Agents",
      description: "Human-like AI callers and receptionists that manage phone lines.",
      icon: Mic,
      color: "zinc",
      tag: "Voice"
    },
    {
      title: "Shopify & E-commerce",
      description: "High-conversion online stores with custom automation worklows.",
      icon: ShoppingBag,
      color: "zinc",
      tag: "Commerce"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform Android applications for global reach.",
      icon: Smartphone,
      color: "zinc",
      tag: "Android"
    },
    {
      title: "iOS App Development",
      description: "Performance-focused native iOS apps with premium UX.",
      icon: AppWindow,
      color: "zinc",
      tag: "iOS"
    },
    {
      title: "AI Marketing Systems",
      description: "Automated lead capture, nurturing sequences, and growth engines.",
      icon: BarChart3,
      color: "zinc",
      tag: "Growth"
    },
  ]

  return (
    <section id="capabilities" ref={sectionRef} className="relative pt-24 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
      {/* Original Grid Background (Transparent/Black) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out inline-flex items-center gap-2 text-zinc-400 text-sm font-medium tracking-wider uppercase mb-6">
            <div className="w-8 h-px bg-zinc-700"></div>
            Our Capabilities
            <div className="w-8 h-px bg-zinc-700"></div>
          </div>
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight">
            Types of businesses we <span className="font-semibold text-white">empower</span>
          </h2>
          <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
            End-to-end AI, product, and growth systems built for modern companies, from startups to enterprise.
          </p>
        </div>

        {/* Capability Cards Carousel */}
        <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out relative flex justify-center items-center min-h-[600px] md:min-h-[800px] overflow-hidden">
          {/* Edge Fades - UPDATED to match 'bg-black' */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

          <div
            className="flex gap-6 lg:gap-8 max-w-6xl w-full px-4"
          >
            <TestimonialsColumn testimonials={capabilities.slice(0, 3)} duration={35} className="flex-1" />
            <TestimonialsColumn
              testimonials={capabilities.slice(3, 6)}
              duration={45}
              className="flex-1 hidden md:block"
            />
            <TestimonialsColumn
              testimonials={capabilities.slice(6, 9)}
              duration={40}
              className="flex-1 hidden lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
