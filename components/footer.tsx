"use client"
import type React from "react"
import type { ComponentProps, ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface FooterLink {
  title: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
}

interface FooterSection {
  label: string
  links: FooterLink[]
}

const footerLinks: FooterSection[] = [
  {
    label: "Product",
    links: [
      { title: "AI & Automation", href: "/services#ai-automation" },
      { title: "Software Systems", href: "/services#development" },
      { title: "Mobile Applications", href: "/services#development" },
      { title: "Growth Infrastructure", href: "/services#marketing" },
    ],
  },
  {
    label: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Services", href: "/services" },
      { title: "Insights", href: "/blog" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Social",
    links: [
      { title: "Facebook", href: "#", icon: FacebookIcon },
      { title: "Instagram", href: "#", icon: InstagramIcon },
      { title: "Youtube", href: "#", icon: YoutubeIcon },
      { title: "LinkedIn", href: "#", icon: LinkedinIcon },
    ],
  },
]

export function Footer() {
  return (
    <footer className="w-full bg-black text-white py-16 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

        {/* Brand Column (Left) */}
        <div className="md:col-span-4 flex flex-col items-start space-y-6">
          <Link href="/" className="group block">
            <Image
              src="/images/logo.png"
              alt="Airya Logo"
              width={140}
              height={140}
              className="object-contain group-hover:opacity-80 transition-opacity"
            />
          </Link>
          <p className="text-gray-400 text-sm font-light tracking-wide max-w-xs leading-relaxed">
            Intelligent systems for scale.
            <br />
            Designing the future of automation and growth.
          </p>
          <div className="pt-4 text-xs text-gray-500 font-mono">
            © {new Date().getFullYear()} Airya Inc.
          </div>
        </div>

        {/* Links Columns (Middle & Right) */}
        <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {footerLinks.map((section, index) => (
            <div key={section.label} className="flex flex-col space-y-6">
              <h3 className="text-sm font-medium text-white/40 tracking-widest uppercase">{section.label}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-light flex items-center gap-2 group"
                    >
                      {link.icon && (
                        <link.icon className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-white" />
                      )}
                      <span className="relative">
                        {link.title}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full opacity-50" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </footer>
  )
}
