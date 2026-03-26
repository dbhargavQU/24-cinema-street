"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const isDark = resolvedTheme === "dark"

    let animationId: number
    let particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      particles = []
      const count = Math.floor((canvas.width * canvas.height) / 15000)
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.15,
        })
      }
    }

    const animate = () => {
      /* Trail effect: fill with semi-transparent background color */
      if (isDark) {
        ctx.fillStyle = "rgba(10, 10, 10, 0.15)"
      } else {
        ctx.fillStyle = "rgba(242, 240, 235, 0.2)"
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        /* Amber-orange particles — more saturated and visible in light mode */
        const particleColor = isDark
          ? `rgba(230, 155, 50, ${p.opacity})`
          : `rgba(160, 90, 10, ${p.opacity * 2})`
        ctx.fillStyle = particleColor
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    resize()
    createParticles()
    animate()

    const handleResize = () => {
      resize()
      createParticles()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [resolvedTheme])

  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={mounted ? {
          background: resolvedTheme === "dark"
            ? "linear-gradient(180deg, #0a0a0a 0%, #141414 100%)"
            : "linear-gradient(180deg, #f2f0eb 0%, #ece9e2 100%)",
        } : undefined}
        suppressHydrationWarning
      />

      {/* Subtle gradient overlay — only fade bottom to background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-balance opacity-0 animate-fade-up leading-tight">
          We Don&apos;t Make Ads.
          <br />
          <span className="font-semibold text-primary">We Create Cinema for Brands.</span>
        </h1>

        <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty opacity-0 animate-fade-up animation-delay-200">
          Stories crafted with the depth of cinema and the precision of advertising.
        </p>

        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 opacity-0 animate-fade-up animation-delay-400">
          <Button
            size="lg"
            onClick={scrollToWork}
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium transition-all duration-300 hover:scale-105"
          >
            View Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto border-border hover:bg-secondary px-8 py-6 text-base font-medium transition-all duration-300"
          >
            Our Services
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-600">
        <button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          aria-label="Scroll to about section"
        >
          <span className="text-xs sm:text-sm tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
        </button>
      </div>
    </section>
  )
}
