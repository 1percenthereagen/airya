"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const SectionReveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
    <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="mb-24"
    >
        {children}
    </motion.section>
)

export function AboutContent() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12 lg:py-24">
            {/* Opening Philosophy */}
            <SectionReveal>
                <h1 className="text-5xl md:text-6xl font-light tracking-tight text-white mb-12">
                    About Airya
                </h1>
                <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                    <p>
                        Airya builds digital infrastructure that works quietly and consistently over time.
                    </p>
                    <p>
                        We design AI agents, SaaS platforms, full-stack web applications, and automation systems for businesses that value structure, clarity, and long-term thinking.
                    </p>
                    <p>
                        Our work is not about trends or experiments. It is about creating dependable systems that scale predictably and solve real problems.
                    </p>
                </div>
            </SectionReveal>

            <motion.hr
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                className="border-white/10 my-16 origin-left"
            />

            {/* What We Do */}
            <SectionReveal>
                <h2 className="text-3xl font-light text-white mb-8">What We Do</h2>
                <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                    <p>
                        We build AI agents that automate workflows, SaaS platforms that handle complexity, and web applications that operate reliably at scale.
                    </p>
                    <p>
                        Our focus is on systems that integrate smoothly into existing business operations, reduce manual effort, and create sustainable efficiency.
                    </p>
                    <p>
                        We work with businesses that understand technology as infrastructure, not decoration.
                    </p>
                </div>
            </SectionReveal>

            <motion.hr
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                className="border-white/10 my-16 origin-left"
            />

            {/* How We Work */}
            <SectionReveal>
                <h2 className="text-3xl font-light text-white mb-8">How We Approach Problems</h2>
                <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                    <p>
                        We start by understanding the system, not just the surface-level request.
                    </p>
                    <p>
                        Good solutions come from clear thinking, not fast execution. We design for maintainability, scalability, and long-term stability.
                    </p>
                    <p>
                        We avoid unnecessary complexity. The best systems are the ones that feel obvious in hindsight.
                    </p>
                </div>
            </SectionReveal>

            <motion.hr
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                className="border-white/10 my-16 origin-left"
            />

            {/* Why Systems Matter */}
            <SectionReveal>
                <h2 className="text-3xl font-light text-white mb-8">Why Systems Matter More Than Trends</h2>
                <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                    <p>
                        Trends change. Systems compound.
                    </p>
                    <p>
                        We build for businesses that prioritize sustainable growth over short-term visibility. Technology should create leverage, not maintenance burden.
                    </p>
                    <p>
                        The right infrastructure allows teams to move faster without breaking things. That is the kind of work we care about.
                    </p>
                </div>
            </SectionReveal>

            <motion.hr
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                className="border-white/10 my-16 origin-left"
            />

            {/* Team Section */}
            <SectionReveal>
                <h2 className="text-3xl font-light text-white mb-12">Team</h2>

                <div className="space-y-12">
                    {/* Tushar */}
                    <TeamMember
                        name="Tushar"
                        role="Founder"
                        bio="Tushar founded Airya to build AI agents, SaaS platforms, and automation systems that connect technology with real business workflows. He writes and builds systems designed for clarity, scalability, and long-term reliability."
                        linkedIn="https://www.linkedin.com/in/tusharshandilya0421/"
                        delay={0.1}
                    />

                    {/* Abhishek */}
                    <TeamMember
                        name="Abhishek Mishra"
                        role="Software Engineer"
                        bio="Abhishek builds Android and iOS applications with a focus on mobile performance, scalability, and production-grade engineering. Previously at Zomato, he brings experience from high-traffic consumer platforms to every project."
                        linkedIn="https://www.linkedin.com/in/mishra5047/"
                        delay={0.2}
                    />

                    {/* Nandini */}
                    <TeamMember
                        name="Nandini Goyal"
                        role="SaaS · AI · Web Applications"
                        bio="Nandini works on SaaS platforms, AI systems, and full-stack web applications. She focuses on building scalable and redundant digital products that bridge the gap between complex engineering and intuitive user experiences."
                        linkedIn="https://www.linkedin.com/in/nandinigoyal1999/"
                        delay={0.3}
                    />

                    {/* Ritwik */}
                    <TeamMember
                        name="Ritwik Yadav"
                        role="Digital Marketer · Vancouver"
                        bio="Ritwik handles performance marketing, SEO, content strategy, analytics, and funnel optimization. His focus is on sustainable growth systems rather than short-term spikes, building campaigns that compound over time."
                        linkedIn="https://www.linkedin.com/in/ritwik-yadav/"
                        delay={0.4}
                    />

                    {/* Param */}
                    <TeamMember
                        name="Param Sharma"
                        role="Growth Marketer · Jaipur"
                        bio="Param works on growth strategy, user acquisition, conversion optimization, and experimentation. He brings a strong understanding of early-stage scaling and marketing systems that drive measurable outcomes."
                        linkedIn="https://www.linkedin.com/in/param-sharma/"
                        delay={0.5}
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-gray-500 mt-12 text-sm"
                >
                    Airya is a small, focused team that values depth, execution, and long-term outcomes over size.
                </motion.p>
            </SectionReveal>

            <motion.hr
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                className="border-white/10 my-16 origin-left"
            />

            {/* Closing */}
            <SectionReveal>
                <div className="text-center py-12">
                    <p className="text-lg text-gray-500 italic">
                        Airya is built on the belief that good systems compound quietly over time.
                    </p>
                </div>
            </SectionReveal>
        </main>
    )
}

function TeamMember({ name, role, bio, linkedIn, delay }: { name: string, role: string, bio: string, linkedIn: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="border-l-2 border-white/10 pl-6 group hover:border-white transition-colors duration-500"
        >
            <h3 className="text-xl font-normal text-white mb-2">{name}</h3>
            <p className="text-sm text-gray-500 mb-4">{role}</p>
            <p className="text-gray-400 leading-relaxed mb-4">
                {bio}
            </p>
            <Link
                href={linkedIn}
                target="_blank"
                className="text-sm text-gray-500 hover:text-white transition-colors"
            >
                LinkedIn →
            </Link>
        </motion.div>
    )
}
