"use client"

import { cn } from "@/lib/utils"

interface IphoneFrameProps {
    children: React.ReactNode
    className?: string
}

export function IphoneFrame({ children, className }: IphoneFrameProps) {
    return (
        <div className={cn("relative mx-auto border-gray-800 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl", className)}>
            {/* Dynamic Island / Notch */}
            <div className="w-[148px] h-[18px] bg-black top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20 pointer-events-none" />

            {/* Side Buttons */}
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg" />
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg" />
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg" />

            {/* Screen Content */}
            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative z-10">
                {/* Status Bar Placeholder */}
                <div className="h-12 w-full bg-white absolute top-0 z-10 flex justify-between items-center px-6">
                    <span className="text-[10px] font-bold text-black ml-2">9:41</span>
                    <div className="flex gap-1.5">
                        <div className="w-4 h-2.5 bg-black rounded-[1px]" />
                        <div className="w-3 h-2.5 bg-black rounded-[1px]" />
                    </div>
                </div>

                {/* Main Content */}
                <div className="h-full pt-12">
                    {children}
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-black/20 rounded-full z-20" />
            </div>
        </div>
    )
}
