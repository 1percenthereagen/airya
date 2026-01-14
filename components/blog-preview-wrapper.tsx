import { getLatestBlogs } from "@/lib/blog"
import { BlogPreviewSection } from "./blog-preview-section"

export async function BlogPreviewWrapper() {
    const posts = await getLatestBlogs(3)

    return <BlogPreviewSection posts={posts} />
}
