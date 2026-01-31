import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { getBlogBySlug, getBlogContent } from "@/lib/blog"
import type { Metadata } from "next"
import styles from "./blog-content.module.css"
import sanitizeHtml from "sanitize-html"

// Revalidate every 60 seconds
export const revalidate = 60

export async function generateMetadata({ params }: { params: Promise<{ post_slug: string }> }): Promise<Metadata> {
    const { post_slug } = await params
    const blog = await getBlogBySlug(post_slug)
    if (!blog) return {}

    const title = blog.meta_title || blog.title
    const description = blog.meta_description || blog.excerpt || ''

    return {
        title,
        description,
        alternates: {
            canonical: blog.canonical_url || `/blog/${blog.slug}`,
        },
        openGraph: {
            title,
            description,
            type: 'article',
            url: `/blog/${blog.slug}`,
            images: blog.hero_image ? [blog.hero_image] : undefined
        }
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ post_slug: string }> }) {
    const { post_slug } = await params
    const article = await getBlogBySlug(post_slug)

    if (!article) {
        notFound()
    }

    const content = getBlogContent(article)
    const publishDate = article.published_at
        ? new Date(article.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
        : new Date(article.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

    return (
        <div className="min-h-screen bg-black text-white selection:bg-white/30">
            <GlassmorphismNav />
            {/* Spacer */}
            <div className="h-32"></div>

            <main className="max-w-4xl mx-auto px-6 py-12 lg:py-24">

                <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 text-sm uppercase tracking-widest font-mono">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Insights
                </Link>

                <article>
                    {/* Header */}
                    <header className="mb-12 space-y-6 border-b border-white/10 pb-12">
                        <div className="flex items-center gap-4 text-sm font-mono text-gray-500 uppercase tracking-widest">
                            <span>{article.category || 'Insight'}</span>
                            <span>•</span>
                            <span>{publishDate}</span>
                            {article.read_time && (
                                <>
                                    <span>•</span>
                                    <span>{article.read_time}</span>
                                </>
                            )}
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
                            {article.title}
                        </h1>
                        {article.author && (
                            <p className="text-gray-500 font-light">By {article.author}</p>
                        )}
                        {/* Tags */}
                        {article.tags && article.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-2">
                                {article.tags.map((tag) => (
                                    <span key={tag} className="text-xs font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </header>

                    {/* Hero Image */}
                    {article.hero_image && (
                        <div className="mb-12 aspect-[16/9] relative rounded-xl overflow-hidden bg-white/5">
                            <Image
                                src={article.hero_image}
                                alt={article.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    {/* Content */}
                    <div
                        className={styles.blogContent}
                        dangerouslySetInnerHTML={{
                            __html: sanitizeHtml(content, {
                                allowedTags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'br', 'hr', 'ul', 'ol', 'li', 'strong', 'em', 'u', 's', 'a', 'img', 'blockquote', 'code', 'pre'],
                                allowedAttributes: {
                                    'a': ['href', 'title', 'target'],
                                    'img': ['src', 'alt', 'title', 'width', 'height']
                                }
                            })
                        }}
                    />

                </article>

            </main>
            <Footer />
        </div>
    )
}
