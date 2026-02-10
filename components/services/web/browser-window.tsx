"use client"

import { cn } from "@/lib/utils"

interface BrowserWindowProps {
    children: React.ReactNode
    className?: string
    url?: string
}

export function BrowserWindow({ children, className, url = "airya.com/dashboard" }: BrowserWindowProps) {
    return (
        <div className={cn("rounded-xl border border-white/10 bg-zinc-900/90 backdrop-blur-xl shadow-2xl overflow-hidden", className)}>
            {/* Browser Toolbar */}
            <div className="h-10 border-b border-white/5 flex items-center px-4 gap-4">
                {/* Traffic Lights */}
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>

                {/* URL Bar */}
                <div className="flex-1 max-w-sm mx-auto bg-black/50 rounded-md h-6 flex items-center justify-center border border-white/5">
                    <div className="flex items-center gap-2 text-[10px] text-gray-500">
                        <span className="text-gray-600">🔒</span>
                        {url}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="relative w-full h-full bg-black/50">
                {children}
            </div>
        </div>
    )
}
