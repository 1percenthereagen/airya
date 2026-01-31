"use client"

import { motion } from "framer-motion"
import {
  Bot,
  MessageSquare,
  Phone,
  Calendar,
  Mail,
  Filter,
  ArrowRight,
  CheckCircle2,
  Zap,
  Globe,
  Database,
  Smartphone
} from "lucide-react"

import { ScrollReveal } from "@/components/scroll-reveal"
import { TextReveal } from "@/components/text-reveal"

export function FeaturesSection() {
  return (
    <section id="features" className="relative bg-white py-24 sm:py-32 overflow-hidden">
      {/* Background subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.4]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-24">
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              <TextReveal>Complete AI Systems for</TextReveal> <br />
              <span className="text-emerald-600 italic">Growth & Scale</span>
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              We don't just build chatbots. We engineer 24/7 intelligent systems that capture leads, qualify prospects, and drive meaningful revenue.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:gap-16">

          {/* PRIMARY: AI Sales & Support Automation */}
          <div className="space-y-8">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                  <Bot className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">AI Sales & Support</h3>
              </div>
            </ScrollReveal>

            <ScrollReveal staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1: 24/7 Chat Agents */}
              <div
                className="group relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <MessageSquare className="w-24 h-24 text-emerald-600" />
                </div>
                <div className="h-12 w-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6 text-gray-700" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">24/7 Chat Agents</h4>
                <p className="text-gray-500 text-sm mb-6">Instantly engage visitors with human-like conversation that converts.</p>

                {/* UI Snippet: Chat Bubble */}
                <div className="bg-gray-50 rounded-lg p-3 text-xs w-full border border-gray-100 relative">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1"></div>
                    <span className="text-gray-600">How can I help you scale today?</span>
                  </div>
                  <div className="mt-2 flex justify-end">
                    <div className="bg-emerald-600 text-white px-2 py-1 rounded-md">
                      Book a demo
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: AI Phone Receptionist */}
              <div
                className="group relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="h-12 w-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-gray-700" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Voice AI Receptionist</h4>
                <p className="text-gray-500 text-sm mb-6">Handle calls, answer FAQs, and route leads without missing a beat.</p>

                {/* UI Snippet: Call Status */}
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <span className="text-xs font-medium text-gray-700">Voice Active</span>
                  </div>
                  <div className="h-4 w-12 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-2/3 animate-[pulse_1s_ease-in-out_infinite]"></div>
                  </div>
                </div>
              </div>

              {/* Card 3: Smart Booking */}
              <div
                className="group relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="h-12 w-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6 text-gray-700" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Auto-Scheduling</h4>
                <p className="text-gray-500 text-sm mb-6">Qualify leads and book appointments directly into your calendar.</p>

                {/* UI Snippet: Calendar */}
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-gray-400">MON</span>
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 w-3/4 bg-gray-200 rounded-full"></div>
                    <div className="h-2 w-1/2 bg-emerald-100 rounded-full"></div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* SECONDARY: Marketing & Lead Systems */}
          <ScrollReveal staggerChildren={0.2} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Large Card: Lead Systems */}
            <div
              className="rounded-3xl bg-gray-50 p-8 sm:p-10 border border-gray-100 relative overflow-hidden h-full group"
            >
              <div className="relative z-10 max-w-md">
                <div className="p-2 inline-block rounded-lg bg-white mb-6 shadow-sm">
                  <Zap className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Lead Qualification Engine</h3>
                <p className="text-gray-600 mb-8">Stop chasing bad leads. Our systems automatically score, segment, and nurture prospects before they even reach your sales team.</p>

                {/* Flow Diagram UI */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 space-y-3 group-hover:translate-y-[-5px] transition-transform duration-500">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Inbound</span>
                    <span>Qualify</span>
                    <span>CRM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1 flex-1 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-full origin-left animate-[scale-in_1s_ease-out]"></div>
                    </div>
                    <ArrowRight className="w-3 h-3 text-gray-300" />
                    <div className="h-1 flex-1 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-full origin-left animate-[scale-in_1s_ease-out_0.5s_both]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Large Card: Email & Funnels */}
            <div
              className="rounded-3xl bg-gray-50 p-8 sm:p-10 border border-gray-100 relative overflow-hidden h-full group"
            >
              <div className="relative z-10 max-w-md">
                <div className="p-2 inline-block rounded-lg bg-white mb-6 shadow-sm">
                  <Mail className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Automated Outreach</h3>
                <p className="text-gray-600 mb-8">Personalized email sequences and follow-ups that sound like you, running on autopilot 24/7/365.</p>

                {/* Email UI Snippet */}
                <div className="space-y-2 group-hover:translate-y-[-5px] transition-transform duration-500">
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 transform translate-x-4 opacity-50 scale-95"></div>
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-bold text-emerald-700">AI</div>
                    <div className="flex-1">
                      <div className="h-2 w-24 bg-gray-200 rounded-full mb-1"></div>
                      <div className="h-2 w-16 bg-gray-100 rounded-full"></div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>


          {/* TERTIARY: Platform Integrations */}
          <ScrollReveal delay={0.3}>
            <div className="border-t border-gray-100 pt-16">
              <div className="text-center mb-10">
                <h3 className="text-lg font-semibold text-gray-900">Seamless Integration Stack</h3>
                <p className="text-sm text-gray-500 mt-2">Connecting your entire business ecosystem</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
                {[
                  { icon: Database, name: "CRM Sync" },
                  { icon: Smartphone, name: "WhatsApp" },
                  { icon: Globe, name: "Websites" },
                  { icon: Filter, name: "Analytics" }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors cursor-default">
                    <item.icon className="w-6 h-6 mb-2" />
                    <span className="text-xs font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Bottom CTA */}
          <ScrollReveal delay={0.4}>
            <div className="mt-8 text-center bg-gray-900 rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] duration-[1500ms]" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to automate your agency?</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-3.5 rounded-full bg-white text-gray-900 font-semibold hover:bg-emerald-50 transition-colors shadow-lg shadow-white/10">
                    Build Your AI Growth System
                  </button>
                  <button className="px-8 py-3.5 rounded-full border border-gray-700 text-white hover:border-white transition-colors">
                    See How It Works
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
