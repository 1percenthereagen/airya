import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { AboutContent } from "@/components/about-content"

export const metadata = {
    title: "About | Airya",
    description: "Airya builds AI agents, SaaS platforms, and scalable digital infrastructure for modern businesses.",
}

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-white/30">
            <GlassmorphismNav />
            <div className="h-32"></div>

            <AboutContent />

            <Footer />
        </div>
    )
}
