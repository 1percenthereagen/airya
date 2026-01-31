import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { PricingSection, FAQSection } from "@/components/premium-solutions-section"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Pricing - Airya | Vancouver AI Automation Agency",
    description: "Transparent pricing for AI automation and digital services in Vancouver. Choose the plan that scales with your ambition.",
}

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-black">
            <main className="min-h-screen relative overflow-hidden">
                <div className="relative z-10">
                    <GlassmorphismNav />
                    {/* Add a spacer for the fixed nav */}
                    <div className="pt-24" />
                    <PricingSection />
                    <FAQSection />
                    <Footer />
                </div>
            </main>
        </div>
    )
}
