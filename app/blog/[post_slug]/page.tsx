import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { getBlogBySlug } from "@/lib/blog"
import type { Metadata } from "next"
import styles from "./blog-content.module.css"

// Revalidate every 60 seconds
export const revalidate = 60

export async function generateMetadata({ params }: { params: { post_slug: string } }): Promise<Metadata> {
    const blog = await getBlogBySlug(params.post_slug)
    if (!blog) return {}

    const title = blog.seo_title || blog.title
    const description = blog.seo_description || blog.excerpt

    return {
        title,
        description,
        alternates: {
            canonical: `/blog/${blog.slug}`,
        },
        openGraph: {
            title,
            description,
            type: 'article',
            url: `/blog/${blog.slug}`,
            images: blog.cover_image ? [blog.cover_image] : undefined
        }
    }
}

export default async function BlogPostPage({ params }: { params: { post_slug: string } }) {
    const article = await getBlogBySlug(params.post_slug)

    if (!article) {
        notFound()
    }

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
                    <div className="mb-12 space-y-4 border-b border-white/10 pb-12">
                        <div className="flex items-center gap-4 text-sm font-mono text-gray-500 uppercase tracking-widest">
                            <span>{article.category || 'Opinion'}</span>
                            <span>•</span>
                            <span>{new Date(article.published_at).toLocaleDateString()}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
                            {article.title}
                        </h1>
                    </div>

                    <div
                        className={styles.blogContent}
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />

                </article>


            </main>
            <Footer />
        </div>
    )
}
