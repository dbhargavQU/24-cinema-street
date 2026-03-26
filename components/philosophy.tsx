"use client"

import { useEffect, useRef, useState } from "react"
import { Eye, Palette, Target } from "lucide-react"

const philosophyPoints = [
  {
    icon: Target,
    title: "Stories that stay",
    description: "Narratives that linger in memory long after the screen fades to black.",
  },
  {
    icon: Eye,
    title: "Visuals that demand attention",
    description: "Every frame composed with intention, designed to captivate.",
  },
  {
    icon: Palette,
    title: "Craft with intent",
    description: "Artistry meets precision in every detail of our work.",
  },
]

export function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Main statement */}
        <div
          className={`text-center mb-12 md:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary text-sm tracking-widest uppercase font-medium">
            Our Philosophy
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-balance max-w-4xl mx-auto">
            Advertising should move people{" "}
            <span className="font-semibold text-primary">the way cinema does.</span>
          </h2>
        </div>

        {/* Philosophy points */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
          {philosophyPoints.map((point, index) => (
            <div
              key={point.title}
              className={`text-center group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="mx-auto w-14 h-14 md:w-16 md:h-16 rounded-full bg-card border border-border flex items-center justify-center mb-5 md:mb-6 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                <point.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-medium text-foreground mb-2 md:mb-3">
                {point.title}
              </h3>
              <p className="text-muted-foreground text-sm text-pretty max-w-xs mx-auto leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div
          className={`mt-12 md:mt-20 text-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-lg md:text-2xl text-muted-foreground font-light">
            We don&apos;t aim for visibility alone;{" "}
            <span className="text-foreground font-medium">we aim for impact.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
