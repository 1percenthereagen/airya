import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
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
                    <div className="py-24 text-center">
                        <p className="text-2xl text-gray-600 font-light mb-4">No articles published yet.</p>
                        <p className="text-gray-700">Check back soon for insights from the Airya team.</p>
                    </div>
                ) : (
                    <div className="space-y-0">
                        {articles.map((article) => (
                            <div key={article.slug}>
                                <Link href={`/blog/${article.slug}`} className="group block">
                                    <article className="border-t border-white/10 py-10 md:py-12 flex flex-col md:flex-row gap-6 md:gap-10 transition-colors hover:bg-white/[0.02] px-4 -mx-4 rounded-xl">

                                        {/* Hero Image (if present) */}
                                        {article.hero_image && (
                                            <div className="md:w-48 shrink-0">
                                                <div className="aspect-[16/10] relative rounded-lg overflow-hidden bg-white/5">
                                                    <Image
                                                        src={article.hero_image}
                                                        alt={article.title}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        {/* Meta Column (only show if no hero image) */}
                                        {!article.hero_image && (
                                            <div className="md:w-48 shrink-0 space-y-2">
                                                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                                                    {article.category || 'Insight'}
                                                </span>
                                                <div className="text-sm text-gray-600 font-light">
                                                    {article.published_at
                                                        ? new Date(article.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                                                        : new Date(article.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                                                    }
                                                </div>
                                            </div>
                                        )}

                                        {/* Content Column */}
                                        <div className="flex-1 space-y-3">
                                            {/* Date and category if hero image is present */}
                                            {article.hero_image && (
                                                <div className="flex items-center gap-3 text-xs font-mono text-gray-500 uppercase tracking-widest">
                                                    <span>{article.category || 'Insight'}</span>
                                                    <span>•</span>
                                                    <span>
                                                        {article.published_at
                                                            ? new Date(article.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                                                            : new Date(article.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                                                        }
                                                    </span>
                                                </div>
                                            )}
                                            <h2 className="text-2xl md:text-3xl font-light group-hover:text-gray-300 transition-colors flex items-center gap-4">
                                                {article.title}
                                                <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gray-500" />
                                            </h2>
                                            {article.excerpt && (
                                                <p className="text-gray-500 font-light leading-relaxed max-w-2xl line-clamp-2">
                                                    {article.excerpt}
                                                </p>
                                            )}
                                            {/* Tags */}
                                            {article.tags && article.tags.length > 0 && (
                                                <div className="flex flex-wrap gap-2 pt-2">
                                                    {article.tags.slice(0, 3).map((tag) => (
                                                        <span key={tag} className="text-xs font-mono text-gray-600 bg-white/5 px-2 py-1 rounded">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Read Time */}
                                        <div className="md:w-24 text-right text-sm text-gray-700 font-mono hidden md:block">
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
