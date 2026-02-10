"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { IphoneFrame } from "./iphone-frame"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Zap, Smartphone, Layers } from "lucide-react"

// Mock UI Components for Screens
const LoginScreen = () => (
    <div className="p-6 flex flex-col h-full bg-gray-50">
        <div className="h-16 w-16 bg-blue-600 rounded-2xl mb-8 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-white rounded-full" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h3>
        <p className="text-gray-500 mb-8">Sign in to continue</p>

        <div className="space-y-4">
            <div className="h-14 bg-white rounded-xl border border-gray-200" />
            <div className="h-14 bg-white rounded-xl border border-gray-200" />
        </div>

        <div className="mt-8 h-14 bg-blue-600 rounded-xl w-full" />

        <div className="mt-auto text-center text-gray-400 text-xs">
            Forgot Password?
        </div>
    </div>
)

const DashboardScreen = () => (
    <div className="bg-gray-50 h-full p-4 space-y-4 overflow-hidden">
        <div className="flex justify-between items-center mb-6">
            <div className="w-10 h-10 bg-gray-200 rounded-full" />
            <div className="w-8 h-8 bg-gray-200 rounded-full" />
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm">
            <div className="h-8 w-24 bg-gray-100 rounded-full mb-4" />
            <div className="h-16 w-full bg-blue-50 rounded-2xl" />
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-3xl h-32" />
            <div className="bg-blue-600 p-4 rounded-3xl h-32" />
        </div>

        <div className="bg-white p-4 rounded-3xl h-24" />
        <div className="bg-white p-4 rounded-3xl h-24" />
    </div>
)

const ProfileScreen = () => (
    <div className="bg-white h-full p-6 flex flex-col items-center">
        <div className="w-24 h-24 bg-gray-100 rounded-full mb-4 mt-8" />
        <div className="h-6 w-32 bg-gray-100 rounded-full mb-2" />
        <div className="h-4 w-24 bg-gray-50 rounded-full mb-8" />

        <div className="w-full space-y-4">
            {[1, 2, 3, 4].map(i => (
                <div key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                    <div className="flex gap-4">
                        <div className="w-10 h-10 bg-white rounded-xl" />
                        <div className="space-y-2">
                            <div className="h-4 w-24 bg-white rounded-full" />
                            <div className="h-3 w-16 bg-white/50 rounded-full" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
)


export function MobileShowcase() {
    return (
        <section className="relative min-h-screen bg-black overflow-hidden pt-32 pb-24 px-6">

            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left Content */}
                <div className="space-y-8">

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1] mb-6"
                    >
                        Build Reliable iOS and <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Android Apps That Scale.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-lg leading-relaxed font-light"
                    >
                        Airya designs and develops high-performance mobile applications focused on usability, scalability, and long-term maintainability.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap gap-4 pt-4"
                    >
                        <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10">
                            <Smartphone className="w-6 h-6 text-blue-400" />
                            <div className="text-left">
                                <div className="text-sm font-bold text-white">Cross Platform</div>
                                <div className="text-xs text-gray-500">iOS & Android</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10">
                            <Zap className="w-6 h-6 text-yellow-400" />
                            <div className="text-left">
                                <div className="text-sm font-bold text-white">High Performance</div>
                                <div className="text-xs text-gray-500">60 FPS Guaranteed</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="pt-8"
                    >
                        <Button
                            size="lg"
                            className="rounded-full bg-white text-black hover:bg-gray-200 transition-all px-8 py-6 text-lg font-medium"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Start Your App <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </motion.div>
                </div>

                {/* Right Content: Floating Phones */}
                <div className="relative h-[800px] w-full hidden lg:block perspective-1000">
                    {/* Center Phone (Dashboard) */}
                    <motion.div
                        initial={{ opacity: 0, y: 100, rotateY: -10 }}
                        animate={{ opacity: 1, y: 0, rotateY: -10 }}
                        transition={{ duration: 1, delay: 0.2, type: "spring" }}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                    >
                        <IphoneFrame className="shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                            <DashboardScreen />
                        </IphoneFrame>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1 }}
                            className="absolute -right-12 top-24 bg-white text-black px-4 py-2 rounded-xl shadow-xl font-bold text-sm flex items-center gap-2 z-30"
                        >
                            <Layers className="w-4 h-4 text-blue-500" />
                            Auto Layout
                        </motion.div>
                    </motion.div>

                    {/* Left Phone (Login) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, y: 50, rotateY: 15, scale: 0.9 }}
                        animate={{ opacity: 1, x: -160, y: 40, rotateY: 15, scale: 0.9 }}
                        transition={{ duration: 1, delay: 0.4, type: "spring" }}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                    >
                        <IphoneFrame className="brightness-90">
                            <LoginScreen />
                        </IphoneFrame>
                    </motion.div>

                    {/* Right Phone (Profile) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, y: -50, rotateY: -25, scale: 0.9 }}
                        animate={{ opacity: 1, x: 160, y: -40, rotateY: -25, scale: 0.9 }}
                        transition={{ duration: 1, delay: 0.6, type: "spring" }}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                    >
                        <IphoneFrame className="brightness-90">
                            <ProfileScreen />
                        </IphoneFrame>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.2 }}
                            className="absolute -left-8 bottom-32 bg-white text-black px-4 py-2 rounded-xl shadow-xl font-bold text-sm flex items-center gap-2 z-30"
                        >
                            <Zap className="w-4 h-4 text-yellow-500" />
                            Clean Design
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
