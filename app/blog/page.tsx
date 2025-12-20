import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { getAllBlogs } from "@/lib/blog"

// Revalidate every 60 seconds (ISR)
export const revalidate = 60

export default async function BlogIndexPage() {
    const articles = await getAllBlogs()

    return (
        <div className="min-h-screen bg-black text-white selection:bg-white/30">
            <GlassmorphismNav />
            {/* Spacer */}
            <div className="h-32"></div>

            <main className="max-w-5xl mx-auto px-6 py-12 lg:py-24">

                {/* Header */}
                <div className="mb-24 space-y-6">
                    <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-white">
                        Insights
                    </h1>
                    <p className="text-xl text-gray-500 font-light max-w-2xl leading-relaxed">
                        Notes on AI systems, software architecture, automation, and sustainable growth.
                    </p>
                </div>

                {/* Article List (Editorial Style) */}
                {!articles || articles.length === 0 ? (
                    <div className="py-12 text-gray-500 text-lg">No articles published yet.</div>
                ) : (
                    <div className="space-y-4">
                        {articles.map((article, i) => (
                            <div key={article.slug}>
                                <Link href={`/blog/${article.slug}`} className="group block">
                                    <article className="border-t border-white/10 py-12 flex flex-col md:flex-row gap-6 md:gap-12 md:items-baseline transition-colors hover:bg-white/[0.02] px-4 -mx-4 rounded-xl">

                                        {/* Meta Column */}
                                        <div className="md:w-48 shrink-0 space-y-2">
                                            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">{article.category || 'Thought'}</span>
                                            <div className="text-sm text-gray-600 font-light">
                                                {new Date(article.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </div>
                                        </div>

                                        {/* Content Column */}
                                        <div className="flex-1 space-y-3">
                                            <h2 className="text-2xl md:text-3xl font-light group-hover:text-gray-300 transition-colors flex items-center gap-4">
                                                {article.title}
                                                <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gray-500" />
                                            </h2>
                                            <p className="text-gray-500 font-light leading-relaxed max-w-2xl">
                                                {article.excerpt}
                                            </p>
                                        </div>

                                        {/* Read Time */}
                                        <div className="md:w-32 text-right text-sm text-gray-700 font-mono">
                                            {article.read_time || '5 min'}
                                        </div>

                                    </article>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}

                <div className="border-t border-white/10 mt-4" />
            </main>

            <Footer />
        </div>
    )
}
