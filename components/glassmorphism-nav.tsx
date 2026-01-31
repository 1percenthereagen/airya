"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const navigation = [
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Pricing", href: "/pricing" },
  { name: "Services", href: "/services" },
  { name: "Insights", href: "/blog" },
]

export function GlassmorphismNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [hasLoaded, setHasLoaded] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoaded(true)
    }, 100)

    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY

        // Only hide/show after scrolling past 50px to avoid flickering at top
        if (currentScrollY > 50) {
          if (currentScrollY > lastScrollY.current && currentScrollY - lastScrollY.current > 5) {
            // Scrolling down - hide navbar
            setIsVisible(false)
          } else if (lastScrollY.current - currentScrollY > 5) {
            // Scrolling up - show navbar
            setIsVisible(true)
          }
        } else {
          // Always show navbar when near top
          setIsVisible(true)
        }

        lastScrollY.current = currentScrollY
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar, { passive: true })
      return () => {
        window.removeEventListener("scroll", controlNavbar)
        clearTimeout(timer)
      }
    }

    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (href: string) => {
    // If it's a full URL path like /services or /blog, let Link handle it naturally
    // If it's an anchor like /#features, we need to handle it 

    // Actually, for simplicity with Next.js App Router, using Link for everything is safer if we prefix /
    // For anchors on the same page, we might want manual scrolling, but mixing /contact and /#features is tricky.
    // The safest way is to use Link for everything.
    setIsOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-6 left-0 right-0 z-50 transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
          } ${hasLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <div className="w-full max-w-[95vw] md:max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-24">
            {/* Left: Logo */}
            <Link
              href="/"
              className="relative z-50 flex items-center hover:scale-105 transition-transform duration-200 cursor-pointer"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center -ml-4">
                <Image
                  src="/images/logo.png"
                  alt="Airya"
                  width={128}
                  height={128}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Center: Floating Capsule Menu (Desktop) */}
            <div className="hidden md:flex items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-[#050505]/80 backdrop-blur-xl border border-white/[0.08] rounded-full px-10 py-4 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.3)] ring-1 ring-white/[0.03]">
                <div className="flex items-center space-x-10">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-[15px] font-medium text-white/70 hover:text-white transition-colors duration-200 tracking-wide"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: CTA & Mobile Toggle */}
            <div className="flex items-center gap-4 relative z-50">
              {/* Desktop CTA */}
              <div className="hidden md:block">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-2 bg-white text-black px-7 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
                >
                  <span>Let's Chat!</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-white transition-transform active:scale-95"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className="md:hidden">
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black/60 backdrop-blur-xl transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Content */}
          <div className={`absolute top-full left-0 right-0 p-4 transition-all duration-500 transform ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"}`}>
            <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-4 shadow-2xl overflow-hidden">
              <div className="flex flex-col space-y-1">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="h-px bg-white/10 my-2" />
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-4 py-3 bg-white text-black rounded-xl font-medium"
                >
                  <span>Let's Chat!</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
