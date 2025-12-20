export async function fetchGoogleDoc(sourceUrl: string | null): Promise<string | null> {
    if (!sourceUrl) return null

    // Extract Doc ID from URL
    const idMatch = sourceUrl.match(/\/d\/([a-zA-Z0-9-_]+)/)
    if (!idMatch) return null

    const docId = idMatch[1]
    const exportUrl = `https://docs.google.com/feeds/download/documents/export/Export?id=${docId}&exportFormat=html`

    try {
        const response = await fetch(exportUrl, { next: { revalidate: 0 } }) // No cache to ensure updates
        if (!response.ok) {
            console.error(`Failed to fetch Google Doc: ${response.status} ${response.statusText}`)
            return null
        }

        const html = await response.text()

        // Basic clean-up of Google's HTML
        // 1. Extract body content
        const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/)
        if (!bodyMatch) return html // Return full HTML if body extraction fails

        let content = bodyMatch[1]


        // 2. Aggressive cleanup for "Congested" layout
        // Remove style attributes (fixes max-width, padding, font-family, colors)
        content = content.replace(/ style="[^"]*"/g, "")

        // Remove class attributes (Google's classes are useless for us)
        content = content.replace(/ class="[^"]*"/g, "")

        // Remove width/height attributes from generic elements (not images/tables if possible, actually images better handled by prose if we strip width)
        // Let's strip align too
        content = content.replace(/ (width|height|align)="[^"]*"/g, "")

        // 3. Remove <span> tags (they are now useless wrappers after style stripping)
        content = content.replace(/<\/?span[^>]*>/g, "")

        // 4. Remove empty paragraphs (now that spans are gone, <p><span></span></p> becomes <p></p>)
        content = content.replace(/<p>\s*<\/p>/g, "")
        content = content.replace(/<p>&nbsp;<\/p>/g, "")

        return content

    } catch (error) {
        console.error('Error fetching Google Doc:', error)
        return null
    }
}
