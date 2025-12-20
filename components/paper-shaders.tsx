"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import clsx from "clsx"

type MeshGradientProps = {
  className?: string
  colors?: string[]
  speed?: number
  backgroundColor?: string
  wireframe?: boolean | string
}

type DotOrbitProps = {
  className?: string
  dotColor?: string
  orbitColor?: string
  speed?: number
  intensity?: number
}

const defaultMeshColors = ["#020205", "#101019", "#242443", "#3e3e7a"]

export function MeshGradient({
  className,
  colors = defaultMeshColors,
  speed = 1,
  backgroundColor = "#000000",
  wireframe,
}: MeshGradientProps) {
  const gradientLayers = useMemo(() => {
    const [c0, c1, c2, c3] = [
      colors[0] ?? defaultMeshColors[0],
      colors[1] ?? defaultMeshColors[1],
      colors[2] ?? defaultMeshColors[2],
      colors[3] ?? defaultMeshColors[3],
    ]

    return `radial-gradient(circle at 15% 20%, ${c0} 0%, transparent 55%),
      radial-gradient(circle at 85% 25%, ${c1} 0%, transparent 55%),
      radial-gradient(circle at 25% 80%, ${c2} 0%, transparent 55%),
      radial-gradient(circle at 70% 70%, ${c3} 0%, transparent 55%)`
  }, [colors])

  const wireframeEnabled = Boolean(wireframe && wireframe !== "false")

  return (
    <div className={clsx("relative h-full w-full overflow-hidden", className)} style={{ backgroundColor }}>
      <motion.div
        className="absolute inset-0"
        style={{ backgroundImage: gradientLayers, backgroundSize: "140% 140%" }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: Math.max(12 / speed, 6), repeat: Infinity, ease: "linear" }}
      />
      {wireframeEnabled && (
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(transparent 95%, rgba(255,255,255,0.08) 98%), linear-gradient(90deg, transparent 95%, rgba(255,255,255,0.08) 98%)",
            backgroundSize: "140px 140px",
          }}
          animate={{ backgroundPosition: ["0% 0%", "50% 50%", "0% 0%"] }}
          transition={{ duration: Math.max(24 / speed, 10), repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </div>
  )
}

export function DotOrbit({
  className,
  dotColor = "#2f2f44",
  orbitColor = "#0f0f1c",
  speed = 1,
  intensity = 1,
}: DotOrbitProps) {
  const gridSize = Math.max(18 - intensity * 4, 8)
  const dotSize = Math.max(1, 2 * intensity)

  return (
    <div className={clsx("relative h-full w-full overflow-hidden", className)}>
      <motion.div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `radial-gradient(${dotColor} ${dotSize}px, transparent ${dotSize + 1}px)`,
          backgroundSize: `${gridSize}px ${gridSize}px`,
        }}
        animate={{ backgroundPosition: ["0% 0%", "50% 50%", "0% 0%"] }}
        transition={{ duration: Math.max(18 / speed, 8), repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, ${orbitColor} 0%, transparent 60%)`,
        }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: Math.max(12 / speed, 6), repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-[-30%]"
        style={{
          borderRadius: "50%",
          border: `1px solid ${dotColor}`,
          mixBlendMode: "screen",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: Math.max(28 / speed, 12), repeat: Infinity, ease: "linear" }}
      />
    </div>
  )
}

