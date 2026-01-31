"use client"

// Stacked Projects Component with Framer Motion logic

import { useScroll, useTransform, motion, MotionValue } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export interface Project {
    title: string
    description: string
    tags: string[]
    link: string
    image: string
    color: string
}

const projects: Project[] = [
    {
        title: "CereBramha",
        description: "AI-powered Alzheimer's risk assessment platform using advanced data models.",
        tags: ["AI Model", "Healthcare", "SaaS"],
        link: "https://cerebramha.com/",
        image: "/images/portfolio/cerebramha.png",
        color: "#050505"
    },
    {
        title: "OG Adventures",
        description: "End-to-end travel platform with automated booking workflows.",
        tags: ["Web App", "Automation", "UX"],
        link: "https://www.ogadventures.in/",
        image: "/images/portfolio/og-adventures.png",
        color: "#080808"
    },
    {
        title: "ERM Electric",
        description: "High-performance local business website optimized for lead generation.",
        tags: ["Local SEO", "Web Design", "Service"],
        link: "https://www.ermelectric.ca/",
        image: "/images/portfolio/erm-electric.jpg",
        color: "#0A0A0A"
    },
    {
        title: "ReBello",
        description: "Premium eCommerce experience merging sustainability with brand storytelling.",
        tags: ["eCommerce", "Shopify", "Branding"],
        link: "https://www.rebellocreations.com/",
        image: "/images/portfolio/rebello.png",
        color: "#0C0C0C"
    }
]

export function StackedProjects() {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    })

    return (
        <div ref={container} className="relative mt-[5vh] space-y-4">
            {projects.map((project, i) => {
                const targetScale = 1 - ((projects.length - i) * 0.05)
                return (
                    <Card
                        key={i}
                        i={i}
                        {...project}
                        progress={scrollYProgress}
                        range={[i * 0.25, 1]}
                        targetScale={targetScale}
                    />
                )
            })}
        </div>
    )
}

interface CardProps extends Project {
    i: number
    progress: MotionValue<number>
    range: [number, number]
    targetScale: number
}

const Card = ({ title, description, tags, link, image, color, i, progress, range, targetScale }: CardProps) => {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start start"]
    })

    // Transform animations based on the container's scroll progress
    const scale = useTransform(progress, range, [1, targetScale])

    // Refined Stacking Logic
    const topOffset = 40 // px per card
    const dynamicTop = `calc(10vh + ${i * topOffset}px)`

    return (
        <div ref={container} className="sticky top-0 h-screen flex items-start justify-center pt-10">
            <motion.div
                style={{
                    scale,
                    backgroundColor: color,
                    top: dynamicTop,
                }}
                className="relative flex flex-col w-full max-w-5xl h-[650px] rounded-[3.5rem] border border-white/10 p-4 transform-gpu origin-top overflow-hidden bg-[#0A0A0A] shadow-2xl"
            >
                <Link href={link} target="_blank" rel="noopener noreferrer" className="relative flex flex-col justify-between w-full h-full p-8 md:p-12 group overflow-hidden rounded-[3rem]">

                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            fill
                            src={image}
                            alt={title}
                            className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    </div>

                    {/* Top Content: Tags (Left) and Arrow (Right) */}
                    <div className="relative z-10 flex justify-between items-start w-full">
                        {/* Tags - Top Left */}
                        <div className="flex flex-wrap gap-2 max-w-[70%]">
                            {tags.map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-white/10 border border-white/10 backdrop-blur-md rounded-full text-xs md:text-sm font-medium text-white/90">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Arrow - Top Right */}
                        <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-500 shadow-lg">
                            <ArrowUpRight className="w-6 h-6" />
                        </div>
                    </div>

                    {/* Bottom Content: Text */}
                    <div className="relative z-10 max-w-2xl mt-auto">
                        <h3 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter">{title}</h3>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                            {description}
                        </p>
                    </div>
                </Link>
            </motion.div>
        </div>
    )
}
