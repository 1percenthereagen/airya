import { supabase } from './supabase'
import fs from 'fs'
import path from 'path'

export interface BlogPost {
    id: string
    slug: string
    title: string
    excerpt: string | null
    content_html: string | null
    content_md: string | null
    hero_image: string | null
    author: string | null
    tags: string[] | null
    status: string
    published_at: string | null
    created_at: string
    updated_at: string
    meta_title: string | null
    meta_description: string | null
    canonical_url: string | null
    read_time: string | null
    category: string | null
}

/**
 * Get internal local blogs from content/blog/*.json
 */
async function getLocalBlogs(): Promise<BlogPost[]> {
    const blogDir = path.join(process.cwd(), 'content/blog')

    if (!fs.existsSync(blogDir)) return []

    const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.json'))
    const localBlogs: BlogPost[] = []

    for (const file of files) {
        try {
            const filePath = path.join(blogDir, file)
            const content = JSON.parse(fs.readFileSync(filePath, 'utf8'))

            // Map JSON format to BlogPost interface
            const post: BlogPost = {
                id: content.slug,
                slug: content.slug,
                title: content.title,
                excerpt: content.excerpt || null,
                content_html: content.content || content.content_html || null,
                content_md: content.content_md || null,
                hero_image: content.hero_image || null,
                author: content.author || 'Airya Team',
                tags: content.tags || [],
                status: content.status || 'published',
                published_at: content.published_at || null,
                created_at: content.published_at || new Date().toISOString(),
                updated_at: content.published_at || new Date().toISOString(),
                meta_title: content.seo_title || content.meta_title || null,
                meta_description: content.seo_description || content.meta_description || null,
                canonical_url: content.canonical_url || null,
                read_time: content.read_time || null,
                category: content.category || null,
            }

            if (post.status === 'published') {
                localBlogs.push(post)
            }
        } catch (e) {
            console.error(`Error reading local blog file ${file}:`, e)
        }
    }

    return localBlogs
}

/**
 * Fetch all published blog posts, merging local and Supabase content
 */
export async function getAllBlogs(): Promise<BlogPost[]> {
    // Get local blogs
    const localBlogs = await getLocalBlogs()

    // Get remote blogs from Supabase
    let remoteBlogs: BlogPost[] = []
    try {
        const { data, error } = await supabase
            .from('blog_posts')
            .select('*')
            .eq('status', 'published')

        if (!error && data) {
            remoteBlogs = data
        }
    } catch (e) {
        console.warn('Could not fetch remote blogs, relying on local ones')
    }

    // Merge and filter duplicates (by slug)
    const allBlogsMap = new Map<string, BlogPost>()

    // Add remote first
    remoteBlogs.forEach(b => allBlogsMap.set(b.slug, b))
    // Add local (overwrites remote if same slug)
    localBlogs.forEach(b => allBlogsMap.set(b.slug, b))

    return Array.from(allBlogsMap.values()).sort((a, b) => {
        const dateA = new Date(a.published_at || a.created_at).getTime()
        const dateB = new Date(b.published_at || b.created_at).getTime()
        return dateB - dateA
    })
}

/**
 * Fetch a single blog post by slug
 */
export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
    // Check local first
    const localBlogs = await getLocalBlogs()
    const localBlog = localBlogs.find(b => b.slug === slug)
    if (localBlog) return localBlog

    // Check remote
    try {
        const { data, error } = await supabase
            .from('blog_posts')
            .select('*')
            .eq('slug', slug)
            .eq('status', 'published')
            .single()

        if (!error && data) return data
    } catch (e) {
        return null
    }

    return null
}

/**
 * Fetch latest N published blog posts
 */
export async function getLatestBlogs(limit: number = 3): Promise<BlogPost[]> {
    const allBlogs = await getAllBlogs()
    return allBlogs.slice(0, limit)
}

/**
 * Get content for rendering
 */
export function getBlogContent(post: BlogPost): string {
    return post.content_html || post.content_md || ''
}
