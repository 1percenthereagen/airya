import { supabase } from './supabase'

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
 * Fetch all published blog posts, ordered by published_at desc
 */
export async function getAllBlogs(): Promise<BlogPost[]> {
    const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false, nullsFirst: false })
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Error fetching blogs:', error)
        return []
    }

    return data || []
}

/**
 * Fetch a single blog post by slug (only if published)
 */
export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
    const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .single()

    if (error) {
        console.error('Error fetching blog by slug:', error)
        return null
    }

    return data
}

/**
 * Fetch latest N published blog posts (for homepage preview)
 */
export async function getLatestBlogs(limit: number = 3): Promise<BlogPost[]> {
    const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false, nullsFirst: false })
        .order('created_at', { ascending: false })
        .limit(limit)

    if (error) {
        console.error('Error fetching latest blogs:', error)
        return []
    }

    return data || []
}

/**
 * Get content for rendering (prefer HTML, fallback to Markdown)
 */
export function getBlogContent(post: BlogPost): string {
    return post.content_html || post.content_md || ''
}
