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
    <footer className="w-full bg-black text-white py-12 md:py-16 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 md:gap-12">

        {/* Logo - Responsive size */}
        <Link href="/" className="group block">
          <Image
            src="/images/footerlogo.png"
            alt="Airya Logo"
            width={500}
            height={500}
            className="w-48 md:w-72 h-auto object-contain group-hover:opacity-80 transition-opacity"
          />
        </Link>

        {/* Links - 2 on top, 1 centered below on mobile */}
        <div className="w-full max-w-3xl">
          {/* Top row: Product & Company side by side */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16">
            {footerLinks.slice(0, 2).map((section) => (
              <div key={section.label} className="flex flex-col items-center text-center space-y-3">
                <h3 className="text-xs md:text-sm font-medium text-white/40 tracking-widest uppercase">{section.label}</h3>
                <ul className="space-y-2 md:space-y-3">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-light py-1 inline-block"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {/* Social - visible only on sm+ in the same row */}
            <div className="hidden sm:flex flex-col items-center text-center space-y-3">
              <h3 className="text-xs md:text-sm font-medium text-white/40 tracking-widest uppercase">{footerLinks[2].label}</h3>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks[2].links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-light py-1 inline-block"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Social - centered below on mobile only */}
          <div className="sm:hidden flex flex-col items-center text-center space-y-3 mt-8">
            <h3 className="text-xs font-medium text-white/40 tracking-widest uppercase">{footerLinks[2].label}</h3>
            <ul className="space-y-2">
              {footerLinks[2].links.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-light py-1 inline-block"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright - Bottom */}
        <div className="text-xs text-gray-500 font-mono pt-6 border-t border-white/5 w-full text-center space-y-1">
          <p>© {new Date().getFullYear()} Airya Inc. All rights reserved.</p>
          <p className="text-gray-600">Built within Cerebramha</p>
        </div>

      </div>
    </footer>
  )
}
