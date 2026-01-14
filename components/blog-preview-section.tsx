"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import type { BlogPost } from "@/lib/blog"

interface BlogPreviewSectionProps {
    posts: BlogPost[]
}

export function BlogPreviewSection({ posts }: BlogPreviewSectionProps) {
    if (!posts || posts.length === 0) {
        return null
    }

    return (
        <section className="py-24 md:py-32 px-6 bg-black">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
                >
                    <div>
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4 block">
                            From the Blog
                        </span>
                        <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
                            Latest Insights
                        </h2>
                    </div>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-mono uppercase tracking-widest group"
                    >
                        View all articles
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                </motion.div>

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {posts.map((post, index) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link
                                href={`/blog/${post.slug}`}
                                className="group block h-full"
                            >
                                <div className="h-full bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
                                    {/* Image */}
                                    {post.hero_image && (
                                        <div className="aspect-[16/10] relative overflow-hidden">
                                            <Image
                                                src={post.hero_image}
                                                alt={post.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    )}

                                    {/* Content */}
                                    <div className="p-6 space-y-4">
                                        {/* Meta */}
                                        <div className="flex items-center gap-3 text-xs font-mono text-gray-500 uppercase tracking-widest">
                                            <span>{post.category || 'Insight'}</span>
                                            <span>•</span>
                                            <span>
                                                {post.published_at
                                                    ? new Date(post.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
                                                    : new Date(post.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
                                                }
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-light text-white group-hover:text-gray-300 transition-colors leading-snug">
                                            {post.title}
                                        </h3>

                                        {/* Excerpt */}
                                        {post.excerpt && (
                                            <p className="text-sm text-gray-500 font-light leading-relaxed line-clamp-2">
                                                {post.excerpt}
                                            </p>
                                        )}

                                        {/* Read more */}
                                        <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-white transition-colors pt-2">
                                            Read article
                                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}
