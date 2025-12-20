import fs from 'fs'
import path from 'path'

export interface BlogPost {
    slug: string
    title: string
    excerpt: string
    category: string
    published_at: string
    read_time?: string
    seo_title?: string
    seo_description?: string
    cover_image?: string
    content: string
    status: string
}

const BLOG_CONTENT_DIR = path.join(process.cwd(), 'content', 'blog')

export async function getAllBlogs(): Promise<BlogPost[]> {
    const files = fs.readdirSync(BLOG_CONTENT_DIR)
    const blogs = files
        .filter(file => file.endsWith('.json'))
        .map(file => {
            const filePath = path.join(BLOG_CONTENT_DIR, file)
            const fileContent = fs.readFileSync(filePath, 'utf-8')
            return JSON.parse(fileContent) as BlogPost
        })
        .filter(blog => blog.status === 'published')
        .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())

    return blogs
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
    try {
        const filePath = path.join(BLOG_CONTENT_DIR, `${slug}.json`)
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        const blog = JSON.parse(fileContent) as BlogPost

        if (blog.status !== 'published') {
            return null
        }

        return blog
    } catch (error) {
        return null
    }
}
